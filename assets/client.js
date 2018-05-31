
Cursor = function(id){
    this.id = id;
    this.x = 0;
    this.y = 0;
}

/**
 * requestAnimationFrame
 */
window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
})();



(function() {

    // Configs
    var BACKGROUND_COLOR    = 'rgba(200, 200, 200, 1)',
        loc                 = 0
        socket              = io.connect(url),
        colors              = ['Cyan', 'Magenta', 'Yellow', 'Red', 'Blue', 'Green', 'White', 'Grey', 'Orangered', 'Salmon'];
    if (!loc){
        var url             = 'fall-gnaw.rhcloud.com:8000';
    } else {
        var url             = 'http://localhost:8080';
        }
    // Vars
    var id, canvas, context,
        bufferCvs, bufferCtx,
        groupCvs, groupCtx,
        grad,
        totalled,
        dragging        = false,
        clients             = {},
        cursors             = {},
        nodes               = [],
        prev                = new Cursor,
        lastEmit            = (new Date).getTime();

    // Global Vars
    
    // Event Listeners
    function resize(e) {
        screenWidth         = canvas.width  = window.innerWidth;
        screenHeight        = canvas.height = window.innerHeight;
        bufferCvs.width     = groupCvs.width  = cursorCvs.width   = screenWidth;
        bufferCvs.height    = groupCvs.height = cursorCvs.height  = screenHeight;
        
        context             = canvas.getContext('2d');
        bufferCtx           = bufferCvs.getContext('2d');
        groupCtx            = groupCvs.getContext('2d');
        cursorCtx           = cursorCvs.getContext('2d');

        var cx              = canvas.width * 0.5,
            cy              = canvas.height * 0.5;

        grad = context.createRadialGradient(cx, cy, 0, cx, cy, Math.sqrt(cx * cx + cy * cy));
        grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
    }

    function mouseMove(e) {

        if((new Date).getTime() - lastEmit > 30){
            socket.emit('mouseaction',{
                'x': e.clientX,
                'y': e.clientY,
                'dragging': dragging,
                'userid': id
            });
            lastEmit = (new Date).getTime();
        }

        //draw own line 
        if(dragging){
            drawLine(bufferCtx, id, prev.x, prev.y, e.pageX, e.pageY);
            prev.x = e.pageX;
            prev.y = e.pageY;
        }
        plot();
    }

    function mouseDown(e) {
        e.preventDefault();
        dragging = true

        prev.x = e.pageX;
        prev.y = e.pageY;

        socket.emit('mouseaction',{
            'x': e.clientX,
            'y': e.clientY,
            'dragging': dragging,
            'userid': id
        });
    }

    function mouseUp(e) {
        dragging = false;

        socket.emit('mouseaction',{
            'x': e.clientX,
            'y': e.clientY,
            'dragging': dragging,
            'userid': id
        });

        socket.emit('load_data');
    }

        // Server
    socket.on('newid', function(data){
        id = data;
        console.log(data);
    });

    socket.on('moving', function(data){

        console.log('recieve move');
        
        if(data.userid !== id){
            console.log('other user' + data.dragging);
            // if the user is drawing then draw
            if(data.dragging && clients[data.userid]){
                drawLine(groupCtx, data.userid, clients[data.userid].x, clients[data.userid].y, data.x, data.y);
            }
            cursorCtx.clearRect(0, 0, screenWidth, screenHeight);
            // draw cursor
            drawCursor(cursorCtx, data.userid, data.x, data.y);

            // save current state
            clients[data.userid] = data;
            clients[data.userid].updated = (new Date).getTime();

            plot();
        }
    });

    socket.on('nodes', function(data){
        console.log(data);

        // if node list containing different set to data, create new nodes
        if(nodes.length !== data.length){
            nodes = [];
            for(var i = 0; i < data.length; i++){
                var d = data[i]; 
                nodes[nodes.length] = new Node(d[0], d[1], d[2], d[3], d[4], d[5]);
                console.log(nodes[nodes.length-1])
                nodes[nodes.length-1]._draw(bufferCtx);
            }

        // or update and draw nodes
        } else {
            for(var i = 0; i < data.length; i++){
                var d = data[i];
                var n = nodes[i];
                n.update(d);
                n._draw(bufferCtx);
            }
        }
    });

    socket.on('message', function(data){
        console.log(data);
    });

    socket.on('totalled', function(data){
        totalled = data;
        console.log('total ' + totalled);
    })

    // Functions

    function drawLine(ctx, id, fromx, fromy, tox, toy){
        var color = colors[(id % 10)];
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(fromx, fromy);
        ctx.lineTo(tox, toy);
        ctx.stroke();
        ctx.closePath();
    }

    function drawCursor(ctx, id, x, y){
        var userid = id;
        var color = colors[(id % 10)];
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 5, 5);
        ctx.fillText(userid, x+5, y);
    }

// ** Init **

    canvas = document.getElementById('c');
    context = c.getContext("2d");

    bufferCvs = document.createElement('canvas');
    groupCvs = document.createElement('canvas');
    cursorCvs = document.createElement('canvas');

    window.addEventListener('resize', resize, false);
    resize(null);
        
    //startup(DATA);
    
    canvas.addEventListener('mousemove', mouseMove, false);
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);


    
    // ** Start Update **

    var plot = function() {

        context.save();
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(0, 0, screenWidth, screenHeight);
        context.fillStyle = grad;
        context.fillRect(0, 0, screenWidth, screenHeight);
        context.restore();
        context.fillStyle = 'black';
        context.fillText(totalled, 20, 20);
        //groupCtx.clearRect(0, 0, screenWidth, screenHeight);

        context.drawImage(bufferCvs, 0, 0);
        context.drawImage(groupCvs, 0, 0);
        context.drawImage(cursorCvs, 0, 0);
    };
    plot();
})();