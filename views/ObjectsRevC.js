// *** Vector ***

// set up vector with dimensions as required
function Vector(x, y, z) {
	this.x = this.ox = x || 0;
	this.y = this.oy = y || 0;
	this.z = this.oz = z || 0;
}

Vector.prototype = {
    set: function(x, y, z) {
        if (typeof x === 'object') {
            z = x.z;
            y = x.y;
            x = x.x;
        }
    	this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        return this;
    },

    add: function(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    },

    sub: function(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    },
    	
	scale: function(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
	},
	
	rotate: function(m, c, x, y, z) {
		
		rx = m.x || 0;
		ry = m.y || 0;
		rz = m.z || 0;
		
		// rotate x axis
		if (x != 0) {
			xx = rx
			xy = Math.cos(x)*ry + Math.sin(x)*rz;
			xz = Math.cos(x)*rz - Math.sin(x)*ry;
		}
		else {
			xx = rx;
			xy = ry;
			xz = rz;
		}
		
		//rotate y axis
		if (y != 0) {
			yx = Math.cos(y)*xx - Math.sin(y)*xz;
			yy = xy;
			yz = Math.cos(y)*xz + Math.sin(y)*xx;
		}
		else {
			yx = xx;
			yy = xy;
			yz = xz;
		}
		
		//rotate z axis
		if (z != 0) {
			zx = Math.cos(z)*yx - Math.sin(z)*yy;
			zy = Math.cos(z)*yy + Math.sin(z)*yx;
			zz = yz;
		}
		else {
			zx = yx;
			zy = yy;
			zz = yz;
		}
		
		this.x = zx + c.x; // return screen to centre
		this.y = zy + c.y;
		this.z = zz + c.z;
		

	},
		
	length: function(n) {
		return Math.sqrt(Math.pow(this.ox - n.ox, 2) + Math.pow(this.oy - n.oy, 2) + Math.pow(this.oz - n.oz, 2));	
	},
	
	height: function(n) {
		return this.oz - n.oz;
	},
	
    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    angleTo: function(v) {
        var dx = v.x - this.x,
            dy = v.y - this.y;
        return Math.atan2(dy, dx);
    },

    distanceTo: function(v) {
        var dx = v.x - this.x,
            dy = v.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
   	},
    
    distanceToO: function(v) {
        var dx = v.ox - this.ox,
            dy = v.oy - this.oy;
        return Math.sqrt(dx * dx + dy * dy);
    },
};

// *** Node ***

function Node(x, y, z, i, p) {
	Vector.call(this, x, y, z);
	this.id = i;
	this._pipe = p || 3;
	this.previous = this;
};

// give node vector methods	
Node.prototype = (function(o) {
	var s = new Vector(0, 0, 0), p;
	for (p in o) s[p] = o[p]; 
	return s;
})({
    isMouseOver:   	false,
    dragging:      	false,
    _easeRadius:   	0,
    _dragDistance: 	null,
    selected:		false,
    COLOR: 			'#fff',
    piped: 			false,
    stope: 			0,
	highlight:		false,
	choke:			0,
	yield:			0,

    hitTest: function(p) {
        return this.distanceTo(p) < 5;
    },

    startDrag: function(dragStartPoint) {
        this.dragging = true;
    },

    drag: function(dragToPoint, n) { 
		for (var i = 0; i < len; i++) {
			if (i === this.id) continue;
			
			n[i].x = dragToPoint.x - this.x + n[i].x;
			n[i].y = dragToPoint.y - this.y + n[i].y;
		}
		this.x = dragToPoint.x;
		this.y = dragToPoint.y;
    },

    endDrag: function() {
        this.dragging = false;
    },

	pressure: function(n) { //used to get the immediate total pressure of a single point
		var j, i;

		i = nodes[n];
		j = this._pipe;
		
		return i.pressure + (this.length(i)+i.choke) * pipes[j]._friction;
	},
	
	pressureChange: function(n) { // used to set up pressure array for route
		var i = this._pipe;
		return (this.length(n)+n.choke) * pipes[i]._friction;
	},
	
	render: function(ctx, m, r) {
		var c, d;
		
		if (this.highlighted) c = d = '#cc2';
		
    	else if (this.dragging || this.selected) 	c = d = SELECT_COLOR;
    	
    	else if (this.isMouseOver) 				c = d = HOVER_COLOR;
    	
    	else if (m === 2)				    	c = d = r; 					//color for pressure
    	
    	else if (m === 1)						c = d = '#666';				//color grey
    	
    	else 									c = d = this.COLOR;			//arrgnt color
    	
    	if (this.stope) 						c = STOPE_COLOR;
    	
    	this._draw(ctx, c, d);
    },
    
    _draw: function(ctx, c, d) {
    	var r, g, rgba, rgbb, grad;
    
        n = this;
        p = n.previous;
        
    	ctx.fillStyle = c
    	ctx.strokeStyle = d;
    	ctx.beginPath();
        ctx.moveTo(n.x, n.y);
		if (n.choke > 0) {
			ctx.arc(n.x, n.y, NODE_RADIUS+2, 0, Math.PI * 2, false);
			ctx.stroke();
		}
		else {
			ctx.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2, false);	
			ctx.fill();
		}

		if (n.piped) {
			ctx.beginPath();
			ctx.moveTo(n.x, n.y);
			ctx.lineTo(p.x, p.y);
			ctx.closePath();
			ctx.stroke();
		}	
		
		if (!graph && this.stope) {
			console.log(this.yield);
			if (this.yield > 250) {
				g = 250;
				r = 0;
			}
			else if (this.yield > 100) {
				g = parseInt(((this.yield-100)/150)*250) || 0;
				r = parseInt(250-((this.yield-100)/150)*250) || 0;	
			}
			else {
				g = 0;
				r = 250;
			}
			
			rgba = 'rgba(' + String(r) + ',' + String(g) + ',0, 0)';
			rgbb = 'rgba(' + String(r) + ',' + String(g) + ',0, 0.8)';
			
			grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 20);
       		grad.addColorStop(0, rgba);
        	grad.addColorStop(0.4, rgbb);
        	grad.addColorStop(1, rgba);
        	
        	ctx.fillStyle = grad;
			
			ctx.moveTo(n.x, n.y);
			ctx.arc(n.x, n.y, 40, 0, Math.PI * 2, false);
			ctx.fill();
		}
    }
});

// *** Route ***

function Route(s) {
	this.s = s; 								// stope node (object)
	this.a = []; 								// array of nodes from stope
	this.p = []; 								// array of pressures from stope
	this.d = [];								// array of pipe distance from pump
	this.e = [];								// array of elevations from stope
	this.r = [];								// array of pressure ratings from stope
	this.selected = false;
	this.xScale = 1;
	this.yScale = 1;
	this.hover = null;

};

Route.prototype = {
	updateArrgt: function() {
		var i, n, m, dist, h;
		
		n = this.s;
		dist = 0;
		h = 0;
		this.a = [n];
		this.d = [dist];
		this.e = [h];
		
		this.r = [h + pipes[n._pipe]._rating*1000/9.81/DENSITY];

		while (n != n.previous) { // add nodes in reverse order back to pump
			m = n.previous;
			h += m.height(n);
			this.a.push(m);
			this.e.push(h);
			this.r.push(h + pipes[n._pipe]._rating*1000/9.81/DENSITY);
			n = m;
		}
		
		for (i = this.a.length-1; i >= 1; i--) {  //add distances
			n = this.a[i];
			m = this.a[i-1];
			dist += (n.length(m) + m.choke)
			this.d.push(dist);
		}

		this.xScale = this.d[this.d.length-1]/(screenWidth/4);
		this.yScale = this.r[this.r.length-1]/(screenHeight/4);	
	},
	
	updatePressure: function() { 				// 'g' to be used if changes made to recipe or flow only
		var a, n, m, p, t;
		a = this.a; 							// route
		this.p = [0]
		p = t = 0;									// stope pressure
		
		for (i = 0; i < a.length-1; i++) {
			n = a[i];							// current node (starts at stope)
			m = a[i+1]; 						// previous node

			p = m.pressureChange(n)/DENSITY/9.81;		// change between previous node and current
			
			t += p
			if (t < this.e[i+1]-8) {
				t = this.e[i+1] - 8;					// if pressure below pipe profile
			}
			this.p.push(t);
		}
	},
	
    distanceTo: function(a, b) {  //x coordinates only
        var d = a - b;
        return Math.sqrt(d * d);
   	},
   	
    hitTest: function(p, c) {   //mouse, cvs
    	var i, m, x, d, c;
    	
    	this.hover = null;
    	c = c;
    	x = p.x - (screenWidth*0.75);     // mouse x coordinates within context
    	m = this.distanceTo(this.d[0]/this.xScale, x);
    	n = 0;
    	
    	for (i = 1; i < this.d.length; i++) {
    		d = this.distanceTo(this.d[i]/this.xScale, x)
    		if (d < m) {
    			m = d;
    			n = this.a.length-1-i;
    		}
        }
        this.hover = n;
        return this.a[n];
    },
    
    _draw: function(ctx, w, h) {
		var c, x, y, sx, sy, h, w;
		
		c = ctx;
		
		h = h;
		w = w;

		sx = this.xScale;
		sy = this.yScale;	

		x = 0;										// first point at pump
		y = h - (this.e[this.e.length-1] / sy);

		c.beginPath();								// draw pipe profile
		c.moveTo(x, y);
		for (i = 1; i < this.a.length; i++) {

			j = this.a.length -1 - i;
			x = (this.d[i] / sx);
			y = h - (this.e[j] / sy);
			c.lineTo(x, y);
		}
		c.strokeStyle = '#4f4';
		c.stroke();
		
		x = this.d[0] / sx;								// first point at pump
		y = h - this.p[this.p.length-1] / sy;

		c.beginPath();									// draw HGL
		c.moveTo(x, y);
		for (i = 1; i < this.a.length; i++) {
			j = this.a.length - 1 - i;
			x = this.d[i] / sx;
			y = h - this.p[j] / sy;
			c.lineTo(x, y);
		}
		c.strokeStyle = '#ddd';
		c.stroke();
		
		x = this.d[0] / sx;								// first point at pump
		y = h - this.r[this.r.length-1] / sy;

		c.beginPath();									// draw RATING
		c.moveTo(x, y);
		for (i = 1; i < this.a.length; i++) {
			j = this.a.length - 1 - i;
			x = this.d[i] / sx;
			y = h - this.r[j] / sy;
			c.lineTo(x, y);
		}
		c.strokeStyle = '#a22';
		c.stroke();
		
		if (this.hover != null) {
		
			c.beginPath();
			x = this.d[this.d.length - this.hover -1] / sx;
			c.moveTo(x, 0);
			c.lineTo(x, h);
			c.strokeStyle = '#ddd';
			c.stroke();
		}
	}
		
};


// *** Button ***

function Button(x, y, t, type) {
	Vector.call(this, x, y);
	this.x = x;
	this.y = y;
	this.text = t;
	this.radius = 10;
	this.type = type;
	if (this.type === 'a') this.color = BUTTON_COLOR;
	else this.color = TAB_COLOR;
};

// give node vector methods	
Button.prototype = (function(o) {
	var s = new Vector(0, 0, 0), p;
	for (p in o) s[p] = o[p]; 
	return s;
})({
    isMouseOver:   	false,
    dragging: 		false,
    selected:		false,

    hitTest: function(p) {
        return this.distanceTo(p) < 15;
    },
    
    startDrag: function(dragStartPoint) {
        this.dragging = true;
    },
    
    endDrag: function(g) {
        this.dragging = false;
		if (this.isMouseOver) this.select(g);
    },
   
	select: function(g) {
		var t = this.selected;
   		for (var i = 0; i < g.length; i++) {
        	g[i].selected = false;
        }
        if (t) this.selected = false;
        else this.selected = true;
    },
         
    render: function(ctx) {
    	if (this.dragging || this.selected) {
    		this._draw(ctx, SELECT_COLOR);
    	}
    	
    	else if (this.isMouseOver) {
    		this._draw(ctx, HOVER_COLOR);
    	}
    	
    	else {
    		this._draw(ctx, this.color)
    	}
    },
    
    _draw: function(ctx, c) {
    
    	if (this.type === 'a') {
    	
			ctx.fillStyle = c;
			ctx.beginPath();
			//ctx.arc(screenWidth - 65, this.y, this.radius, 0, Math.PI * 2, false);
			ctx.textAlign = 'center';	
			ctx.fillText(this.text, this.x, this.y);
			ctx.fill();
			ctx.restore();
		}
		
		if (this.type === 'b') {

			ctx.fillStyle = c;
			ctx.fillRect(this.x, 0, TAB_WIDTH, TAB_HEIGHT);
			ctx.fillStyle = '#eee';
			ctx.fillText(this.text, this.x+10, this.y-5)
			ctx.fill();
			ctx.restore();
		}
		if (this.type === 'c') {
    	
			ctx.fillStyle = c;
			ctx.fillText(this.text, this.x-25, this.y+6);
			ctx.fill();
			ctx.restore();
		}
		
    }
});

function Graph(data) {

	this.y = data || [];
	this.my = 0;
	this.yScale = screenHeight/4/1500;
	this.hover = null;
};

Graph.prototype = {
	update: function(which) {
		var r, y, z, my = 0;
		
		
		if (which) {
			graph = 1;
			y = [];
			
			for (i = 0; i < routes.length; i++) {
				r = routes[i]
				r.updateArrgt();
				y.push(r.p[r.p.length-1] - r.e[r.e.length-1]);
			}
			this.yScale = screenHeight/4/1500;
		}
		
		else {
			graph = 0;
			y = [];
			
			for (i = 0; i < routes.length; i++) {
				r = routes[i]
				y.push(r.a[0].yield);
			}
			this.yScale = screenHeight/4/750;
		}
		this.y = y;
	},
   	
    hitTest: function(p) {   //mouse
    	var x;
    	
    	this.hover = null;
    	x = p.x - (screenWidth*0.75);     // mouse x coordinates within context
        this.hover = parseInt(x/(screenWidth*0.25/this.y.length));
		return this.hover;
    },

	_draw: function(ctx) {
		var i, len, y, dx, bx, by, bh, bw, text; 
			c = ctx;
			
		len = this.y.length;
		dx = screenWidth/4/len;

		for (i = 0; i < len; i++) {
			y = this.y[i];
		
			if (i === this.hover) c.fillStyle = '#777';
			
			else c.fillStyle = '#444';
			
			bx = parseInt(dx*i);
			by = screenHeight/4;
			
			bw = parseInt(dx*0.7);
			bh = -1*parseInt(y*this.yScale);
			
			if (graph) text = String(parseInt(y/10)/100);
			else text = String(parseInt(y));
			
			c.fillRect(bx, by, bw, bh);
			
			c.fillStyle = '#ccc';
			c.fillText(text, bx, by-10);
			
			c.fill();
		}
	}
};

function Crosshairs(i, x, y) {
	Vector.call(this, x, y);
	this.id = i;
	this.x = x;
	this.y = y;
};

Crosshairs.prototype = (function(o) {
	var s = new Vector(0, 0, 0), p;
	for (p in o) s[p] = o[p];
	return s;
})({

    isMouseOver:   	false,
    dragging: 		false,
    isActive: 		false,

    hitTest: function(p) {
    	var x, y;
    	
    	x = p.x - screenWidth*0.75 - this.x;
    	y = p.y - this.y;
    	
    	if (this.id === 'a') y -= screenHeight*0.25;
        
        return (x > -20 && y > -20 && x < 20 && y < 20);
    },
    
    startDrag: function(dragStartPoint) {
        this.dragging = true;
        this.isActive = true;
    },
    
    drag: function(dragToPoint) { 
    	var x;
		
		x = dragToPoint.x - screenWidth * 0.75;
		
		if (x > 0) this.x = x;
		
		if (this.id === 'a') this.y = dragToPoint.y - screenHeight * 0.25;
    },
    
    endDrag: function(g) {
        this.dragging = false;
    },
    
    _draw: function(ctx) {
    	var a, x, y, w, h, c;
    	
    	c = ctx
    	
    	w = screenWidth/4;
    	h = screenHeight/4;
    
    	x = this.x;
    	y = this.y;
    	
    	if (this.isActive) a = '#e72';
    	else a = '#888';
    	
    	if (this.id === 'a') {
    
			c.beginPath();
			c.moveTo(0, y);
			c.lineTo(w, y);
			c.moveTo(x, 0);
			c.lineTo(x, h);
			c.strokeStyle= '#666';
			c.lineWidth = 1;
			c.stroke();		
		
			c.beginPath();
			c.moveTo(x-15, y);
			c.lineTo(x+15, y);
			c.moveTo(x, y-15);
			c.lineTo(x, y+15);
			c.strokeStyle = a;
			c.lineWidth = 3;
			c.stroke();
		
			c.fillStyle = '#ccc'
			c.fillText(parseInt(FLOW_RATE) + ' m3/h', x+2, h-2);
			c.fillText(parseInt(TONNAGE) + ' t/h', 0, y-2);
			c.fill();
			
		}
		else if (this.id === 'b') {
			c.save();
			c.beginPath();
			c.moveTo(0, y);
			c.lineTo(w, y);
			c.strokeStyle= '#333';
			c.lineWidth = 2;
			c.stroke();	
				
			c.beginPath();
			c.moveTo(x-7, h-2);
			c.lineTo(x+7, h-2);
			c.moveTo(x+7, y-15);
			c.lineTo(x-7, y-15);
			c.moveTo(x, h-2);
			c.lineTo(x, y-15);
			c.closePath();			
			c.strokeStyle= a;
			c.lineWidth = 3;
			c.stroke();	
			c.restore();
				
			c.fillStyle = '#ccc'
			c.fillText(parseInt(MAX_PUMP/100)/10 + ' MPa', x+5, y);
		}
    }
});    
    
function SteelPipe(id, diameter, rating, OD, wall, wear) {
	this.id = id;
	this.d = diameter;
	this.r = rating;
	this.OD = OD;
	this.t = wall;
	this.ID = this.OD-(this.t*2);
	this.CSA = (Math.PI*(this.ID*this.ID)) / 4000000;
	this.mass = (Math.PI*(this.OD*this.OD)) / 4000000 - this.CSA;
	this.wear = wear || 1.5;
	
	if (this.d < 8) {
		this.groove = 2.11;
		this.weld = 0.85;
	}
	else {
		this.groove = 2.34;
		this.weld = 1;
	}
	if (this.r <= 4) {
		this.coupling = '77';
		if (this.d < 8) this.c_rating = 6.89;
		else this.c_rating = 5.82;
	}
	else if (this.r === 8) {
		this.coupling = 'HP70ES';
		if (this.d === 4) this.c_rating = 17.24;
		else if (this.d === 6) this.c_rating = 13.79;
		else this.c_rating = 10.34;
	}
	else if (this.r >= 12) {
		this.coupling = '808';
		if (this.d < 8) this.c_rating = 20.68;
		else this.c_rating = 17.24;
	}
	this.rating();
	this.update();
}

SteelPipe.prototype = {
	p_rating:	0,
	_rating:	0,
	_text:		'',
	_velocity: 	0,
	_friction:	0,
	_length: 	0,
	
	rating: function() {
		this.min_t = this.t * (1 - MILL_TOLERANCE) - (this.wear + this.groove);
		
		this.p_rating = (2 * MIN_YIELD * this.weld * WELD_STRENGTH * this.min_t / (this.OD-(2 * Y_VALUE * this.min_t)))
		
		if (this.c_rating > this.p_rating) this._rating = this.p_rating;
		else this._rating = this.c_rating;
	},
	
	update: function() {
		this._velocity = this.velocity(FLOW_RATE);
		this._friction = this.friction(YIELD_STRESS, VISCOSITY);
		this.text();
	},
	
	velocity: function(f) {
		return f / this.CSA / 3600;
	},

	friction: function(y,vis) {
	/*
	// Durand using Colebrook-White
	var w, d, v, Re, Rek, r, f, Func, diff, colebrook, g, vs, vw, Cv;
	
	w = 1000,
	r = 0.0000508,
	d = this.ID/1000,
	v = this._velocity,
	Func = 1,
	Re = w * v * d / 0.001002,
	g = 9.81;
	
	vw = TONNAGE/CONCENTRATION - TONNAGE;
	vs = TONNAGE/SG;
	Cv = vs/(vw + vs);
	
	if (Re > 0) {
        f = Math.pow(1 / (4 * Math.log(3.7 * d / r) / Math.log(10)), 2);
        Rek = r / d * Re * Math.sqrt(f / 2);		// Roughness Reynold's number
        
		if (Rek < 70) {
            f = 0.079 / Math.pow(Re, 0.25);			// Blasius equation
            while (Math.abs(Func) > 0.00001) {
                Func = Math.pow(f, -0.5) + 4 * Math.log(r / (3.7 * d) + 1.26 * (Math.pow(f, -0.5)) / Re) * 1 / Math.log(10);
                diff = -0.5 * Math.pow(f, (-3 / 2)) + 4 / Math.log(10) * 1 / (r / 3.7 / d + 1.26 / (Re * Math.pow(f, 0.5))) * (-1.26 / 2 / Re * Math.pow(f, (-3 / 2)));
                f = f - Func / diff;
			}
		}
		else f = Math.pow(1 / (4 * Math.log(3.7 * d / r) / Math.log(10)), 2);
		
	}
	else f = 0;
	
	colebrook = 2 * w * f * Math.pow(v, 2) / d / 1000;
	
	return colebrook * (DENSITY + 85 * Cv * Math.pow(((g * d * (SG - 1)/1)/Math.pow(v, 2))*(1/ Math.sqrt(4)), 3/2))
	*/
		// Homogeneous
		var v, i, t, n = 1, c = 0,
		
		low = y,
		high = 100000,
		d = this.ID/1000,
		v = this._velocity,

		l = 8 * v / d,
		r = 1;

		while (Math.abs(l-r) > 0.0001) {
			c++;
			t = (low + high) / 2;
			var a = 4 * n / Math.pow(t,3) * Math.pow(1/vis,1/n) * Math.pow(t-y,(n+1)/n)
			var b = Math.pow(t - y,2) / (3*n+1)+2 * y*(t-y) / (2*n+1) + Math.pow(y,2) / (n+1)
			r = a * b

			if (r > l) {
				high = t;
			}
			if (r < l) {
				low = t;
			}
			if (v < 0 || c > 1000) {
				console.log('gradient error');
				break
			}
		}
		return t * 4 / d / 1000
		
	},

	totalLength: function() {
		var i, n;

		this._length = 0;
		
		for (i = 0; i < nodes.length; i ++) {
			n = nodes[i];
			if (n._pipe === this.id) {
				this._length += n.length(n.previous) + n.choke;
			}
		}
	},
	
	text: function() {
		this._text = [
			String(this.d) + ' in',
			'Sch ' + String(this.r) + '0',
			String(this.OD),
			String(parseInt(this.ID*100)/100),
			String(this.t),
			String(PIPE_ROUGHNESS),
			String(parseInt(this._velocity*100)/100),
			String(parseInt(this._friction*1000)/1000),
			String(parseInt(this._length)),
			String(parseInt(this._rating*100)/100)
		]
	}
}