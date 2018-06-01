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

	var DATA				= [[777615,9583388,1436,0,0,0],[777652,9583395,1420,1,0,0],[777684,9583382,1410,2,1,0],[777708,9583364,1400,3,2,0],[777730,9583361,1396,4,3,0],[777740,9583365,1396,5,4,0],[777785,9583380,1270,6,5,0],[778092,9583380,1270,7,6,0],[778092,9583167,1270,8,256,0],[778092,9583295,1270,9,10,0],[778102,9583310,1270,10,11,0],[778102,9583325,1270,11,12,0],[778092,9583355,1270,12,7,0],[778132,9583097,1257,13,13,0],[778125,9583097,1258,14,15,0],[778118,9583099,1259,15,16,0],[778112,9583102,1260,16,17,0],[778106,9583106,1261,17,18,0],[778101,9583111,1262,18,19,0],[778097,9583117,1263,19,20,0],[778094,9583123,1264,20,21,0],[778093,9583130,1265,21,22,0],[778092,9583137,1266,22,23,0],[778092,9583157,1270,23,8,0],[778092,9583167,1270,24,24,0],[778132,9583097,1257,25,25,0],[778125,9583096,1257,26,26,0],[778118,9583094,1258,27,14,0],[778112,9583091,1258,28,27,0],[778106,9583087,1258,29,28,0],[778101,9583082,1258,30,29,0],[778097,9583077,1259,31,30,0],[778094,9583070,1259,32,31,0],[778093,9583064,1259,33,33,0],[778092,9583057,1260,34,32,0],[778092,9583047,1260,35,34,0],[778092,9582980,1250,36,35,0],[778082,9582815,1245,37,38,1],[778102,9582882,1245,38,39,0],[778102,9582987,1245,39,40,0],[778092,9583010,1245,40,41,0],[778092,9583167,1245,41,257,1],[778092,9583280,1245,42,257,0],[778100,9583310,1245,43,42,0],[778100,9583355,1245,44,43,0],[778055,9582860,1245,45,46,0],[778055,9582980,1245,46,47,0],[778067,9583010,1245,47,40,0],[778067,9583032,1245,48,47,0],[778072,9583070,1220,49,61,0],[778082,9583167,1220,50,259,0],[778082,9583287,1220,51,50,0],[778092,9583305,1220,52,51,0],[778092,9583340,1220,53,52,0],[778085,9583372,1220,54,53,0],[778085,9583410,1220,55,54,0],[778085,9583487,1220,56,55,0],[778082,9583137,1220,57,50,0],[778020,9583137,1220,58,57,0],[778020,9583085,1220,59,58,0],[778137,9583087,1220,60,62,0],[778082,9583087,1220,61,57,0],[778117,9583087,1220,62,61,0],[778110,9583010,1220,63,66,0],[778110,9582935,1220,64,63,0],[778085,9582815,1220,65,64,0],[778117,9583025,1220,66,62,0],[778055,9582860,1220,67,68,0],[778055,9582905,1220,68,69,0],[778047,9582927,1220,69,70,0],[778047,9582957,1220,70,71,0],[778057,9582980,1220,71,72,0],[778057,9583025,1220,72,66,0],[778057,9583055,1220,73,72,0],[778117,9582815,1195,74,85,0],[778117,9583272,1195,75,260,0],[778117,9583337,1195,76,75,0],[778105,9583347,1195,77,76,0],[778062,9583347,1195,78,77,0],[778062,9583385,1195,79,78,0],[778077,9583272,1195,80,75,0],[778077,9583302,1195,81,80,0],[778077,9583265,1195,82,80,0],[778070,9583235,1195,83,82,0],[778070,9583160,1195,84,83,0],[778117,9583122,1195,85,260,0],[778080,9583122,1195,86,85,0],[778035,9583122,1195,87,86,0],[778027,9583137,1195,88,87,0],[778080,9583025,1195,89,86,0],[778045,9583002,1195,90,89,0],[778045,9582935,1195,91,90,0],[778027,9582890,1195,92,91,0],[778117,9582815,1170,93,94,0],[778117,9582912,1170,94,113,0],[778117,9583192,1170,95,261,0],[778117,9583205,1170,96,95,0],[778065,9583205,1170,97,96,0],[778065,9583257,1170,98,97,0],[778065,9583302,1170,99,98,0],[778100,9583302,1170,100,99,0],[778100,9583340,1170,101,100,0],[778067,9583385,1170,102,101,0],[778060,9583182,1170,103,97,0],[778060,9583160,1170,104,103,0],[778117,9583107,1170,105,261,0],[778090,9583107,1170,106,105,0],[778067,9583122,1170,107,106,0],[778027,9583122,1170,108,107,0],[778027,9583145,1170,109,108,0],[778085,9583100,1170,110,106,0],[778085,9583055,1170,111,110,0],[778075,9583032,1170,112,111,0],[778117,9583032,1170,113,105,0],[778060,9583032,1170,114,112,0],[778060,9583025,1170,115,114,0],[778042,9583002,1170,116,115,0],[778042,9582905,1170,117,118,0],[778042,9582912,1170,118,116,0],[778117,9583205,1155,119,262,0],[778055,9583205,1155,120,119,0],[778055,9583265,1155,121,120,0],[778082,9583310,1155,122,121,0],[778082,9583370,1155,123,122,0],[778055,9583152,1155,124,120,0],[778062,9583137,1155,125,124,0],[778062,9583085,1155,126,131,0],[778040,9583055,1155,127,126,0],[778040,9582950,1155,128,127,0],[778032,9582920,1155,129,128,0],[778117,9583122,1155,130,262,0],[778062,9583122,1155,131,125,0],[778117,9583025,1155,132,130,0],[778125,9583010,1155,133,132,0],[778125,9582965,1155,134,133,0],[778100,9582920,1155,135,134,0],[778100,9582860,1155,136,135,0],[778100,9582860,1130,137,138,0],[778100,9582920,1130,138,139,0],[778127,9582965,1130,139,140,0],[778127,9583040,1130,140,141,0],[778117,9583055,1130,141,142,0],[778117,9583130,1130,142,143,0],[778117,9583205,1130,143,263,0],[778065,9583212,1130,144,143,0],[778065,9583280,1130,145,144,0],[778095,9583310,1130,146,145,0],[778095,9583400,1130,147,146,0],[778070,9583130,1130,148,142,0],[778037,9582890,1130,149,150,0],[778042,9582912,1130,150,151,0],[778042,9582965,1130,151,152,0],[778037,9582980,1130,152,153,0],[778037,9583017,1130,153,154,0],[778047,9583032,1130,154,155,0],[778047,9583070,1130,155,156,0],[778070,9583085,1130,156,148,0],[778070,9583152,1130,157,148,0],[778050,9583167,1130,158,157,0],[778050,9583197,1130,159,158,0],[778122,9582935,1105,160,161,0],[778122,9583040,1105,161,162,0],[778117,9583065,1105,162,264,0],[778117,9583150,1105,163,264,0],[778117,9583205,1105,164,171,0],[778060,9583205,1105,165,164,0],[778060,9583265,1105,166,165,0],[778092,9583300,1105,167,166,0],[778105,9583325,1105,168,167,0],[778105,9583370,1105,169,168,0],[778092,9583400,1105,170,169,0],[778117,9583172,1105,171,163,0],[778077,9583152,1105,172,171,0],[778060,9582860,1105,173,174,0],[778060,9582895,1105,174,175,0],[778040,9582912,1105,175,176,0],[778040,9582970,1105,176,177,0],[778030,9582980,1105,177,178,0],[778030,9583002,1105,178,179,0],[778050,9583025,1105,179,180,0],[778050,9583062,1105,180,181,0],[778077,9583062,1105,181,172,0],[778055,9583152,1105,182,172,0],[778055,9583182,1105,183,182,0],[778042,9583197,1105,184,183,0],[778020,9583167,1080,185,186,0],[778030,9583192,1080,186,187,0],[778030,9583205,1080,187,194,0],[778030,9583220,1080,188,187,0],[778047,9583250,1080,189,188,0],[778080,9583280,1080,190,189,0],[778107,9583325,1080,191,190,0],[778107,9583370,1080,192,191,0],[778092,9583400,1080,193,192,1],[778117,9583205,1080,194,265,0],[778117,9583152,1080,195,265,0],[778117,9583062,1080,196,195,0],[778117,9582980,1080,197,196,0],[778125,9582965,1080,198,197,0],[778125,9582935,1080,199,198,0],[778075,9583152,1080,200,195,0],[778055,9583152,1080,201,200,1],[778075,9583062,1080,202,196,0],[778075,9583107,1080,203,202,0],[778045,9583062,1080,204,202,0],[778045,9583040,1080,205,204,0],[778025,9583025,1080,206,205,0],[778010,9582965,1080,207,206,0],[778115,9583190,1060,208,224,0],[778091,9583213,1060,209,208,0],[778044,9583260,1050,210,209,0],[778115,9583160,1060,211,266,0],[778091,9583183,1060,212,211,0],[778067,9583207,1055,213,212,0],[778034,9583207,1050,214,214,0],[778115,9583150,1060,215,266,0],[778103,9583118,1060,216,215,0],[778092,9583087,1055,217,216,0],[778058,9583087,1050,218,217,0],[778115,9583130,1060,219,223,0],[778115,9583096,1060,220,219,0],[778115,9583063,1055,221,220,0],[778091,9583039,1050,222,221,0],[778117,9583134,1060,223,215,0],[778117,9583165,1060,224,211,0],[778117,9583190,1060,225,225,0],[778117,9583134,1030,226,236,0],[778117,9583165,1030,227,267,0],[778117,9583190,1030,228,228,0],[778114,9583189,1030,229,227,0],[778091,9583213,1030,230,229,0],[778044,9583260,1030,231,230,0],[778114,9583159,1030,232,267,0],[778091,9583183,1030,233,232,0],[778067,9583207,1025,234,233,0],[778034,9583207,1020,235,234,0],[778114,9583149,1030,236,232,0],[778103,9583118,1030,237,236,0],[778092,9583087,1025,238,237,0],[778058,9583087,1020,239,238,0],[778114,9583129,1030,240,226,0],[778114,9583096,1030,241,240,0],[778114,9583063,1030,242,241,0],[778091,9583039,1030,243,242,0],[778117,9583134,1000,244,251,0],[778117,9583165,1000,245,247,0],[778117,9583190,1000,246,245,0],[778114,9583159,1000,247,267,0],[778091,9583183,1000,248,247,0],[778067,9583207,995,249,248,0],[778034,9583207,990,250,249,0],[778114,9583149,1000,251,247,0],[778103,9583118,1000,252,251,0],[778092,9583087,995,253,252,0],[778058,9583087,990,254,253,0],[778087,9583182,1270,255,256,0],[778092,9583178,1270,256,9,0],[778092,9583177,1245,257,255,0],[778116,9583167,1245,258,257,0],[778109,9583167,1220,259,258,0],[778117,9583162,1195,260,259,0],[778117,9583155,1170,261,260,0],[778117,9583153,1155,262,261,0],[778117,9583143,1130,263,262,0],[778117,9583145,1105,264,263,0],[778117,9583154,1080,265,264,0],[778117,9583159,1060,266,265,0],[778117,9583164,1030,267,266,0]];

    // Configs
    var BACKGROUND_COLOR 	= 'rgba(10, 50, 60, 1)';
		FLOW_RATE 			= 100;
		TONNAGE				= 113;
		YIELD_STRESS 		= 10;
		VISCOSITY 			= 0.05;
		DENSITY 			= 1.85;
		SG 					= 2.77;
		MAX_PUMP			= 10000;
		RANGE_UPPER			= 0.75;
		RANGE_LOWER			= 0.65;
		NODE_RADIUS 		= 2;
		HOVER_COLOR 		= '#fff';
		SELECT_COLOR		= '#4fb';
		BUTTON_COLOR		= '#9bb';
		TAB_COLOR			= '#034';
		NODE_COLOR			= '#fff';
		STOPE_COLOR			= '#f4f';
		TEXT_COLOR			= '#000';
		BUTTONS_A 			= ['rotate', 'pipe', 'stope', 'add', 'load', 'save'];
		TABS				= ['arrangement', 'hydraulics'];
		BUTTONS_B			= ['hgl', 'bar'],
		OT 					= 'xxxxyyyzzz';
		OS					= 50;
		TAB_WIDTH			= 100;
		TAB_HEIGHT			= 20;
		PIPE_ROUGHNESS		= 0.051;
		MIN_YIELD 			= 137.9;
		MILL_TOLERANCE		= 0.125;
		WELD_STRENGTH		= 1;
		Y_VALUE				= 0.4; 
		PIPE_TYPES 			= [[
							'4s40', 4, 4, 114.3, 6.02],[
							'4s80', 4, 8, 114.3, 8.56],[
							'5s40', 5, 4, 141.224, 6.604],[
							'5s80', 5, 8, 141.224, 9.652],[
							'6s40', 6, 4, 168.28, 7.11],[
							'6s80', 6, 8, 168.28, 10.97],[
							'6s120', 6, 12, 168.28, 14.27],[
							'8s40', 8, 4, 219.08, 8.18],[
							'8s80', 8, 8, 219.08, 12.70],[
							'8s120', 8, 12, 219.08, 18.26],[
							'10s80', 10, 8, 271.02, 14.73]]
		PIPE_TABLE			= ['pipe', 'wall', 'OD (mm)', 'ID (mm)', 'thick (mm)', 'rough (mm)', 'velocity (m/s)', 'friction (kPa/m)', 'length (m)', 'rating (MPa)'];
		SELECT_PIPE			= ['a', 'b', 'c', 'd', 'e', 'f'];

    // Vars
    var canvas, context,
        bufferCvs, bufferCtx,
		tCvs, tCtx,								// telemetry
		cCvs, cCtx,								// control
		hCvs, hCtx,								// hgl
		gCvs, gCtx,								// graph
		pCvs, pCtx, 							// piping
        grad, _last, hover = null,
		hoverData = [0,0,0],
    	buttons 	= [],
		printing	= [],
    	pipeSelect	= [],
    	tabs  		= [],
    	coordinates = [],
    	copyNodes 	= [],
		input		= [],
		saveText 	= [],
		gr 			= [], 						// graph data
		piper 		= null,
    	mouse 		= new Vector,
    	startRotate = new Vector,
    	orientationC,
		orientationX,
		orientationY,
		orientationZ,
		orientation = [];
		sliderScale = 1;

	
	// Global Vars
	
		startZoom = new Vector;
		_rotation = new Vector;
		currentRotation = new Vector;
    	whichPlot = 0;
    	_scale = 1;
    	axis = null;
    	graph = 1;
    	crosshairs 	= new Crosshairs('a');
    	slider 		= new Crosshairs('b');
		pipes		= [];
    	nodes 		= [];
    	routes 		= [];
    
    // Event Listeners
    function resize(e) {
        screenWidth  = canvas.width  = window.innerWidth;
        screenHeight = canvas.height = window.innerHeight;
        bufferCvs.width  = screenWidth;
        bufferCvs.height = screenHeight;
        
		tCvs.width = cCvs.width = hCvs.width = gCvs.width = screenWidth/4;
		tCvs.height = cCvs.height = hCvs.height = gCvs.height = pCvs.height = screenHeight/4;
		pCvs.width = screenWidth - gCvs.width;
		
        context   = canvas.getContext('2d');
        bufferCtx = bufferCvs.getContext('2d');
		tCtx = tCvs.getContext('2d');
		cCtx = cCvs.getContext('2d');					
		hCtx = hCvs.getContext('2d');
		gCtx = gCvs.getContext('2d');
		pCtx = pCvs.getContext('2d');

        var cx = canvas.width * 0.5,
            cy = canvas.height * 0.5;
        centre = new Vector(cx, cy, 0);
        
        sliderScale = 15000 / (screenWidth/4); 				// keep slider same scale
        
    	grad = context.createRadialGradient(cx, cy, 0, cx, cy, Math.sqrt(cx * cx + cy * cy));
        grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0.8)');

    }
    
    function mouseMove(e) {
        mouse.set(e.clientX, e.clientY);
        var i, r, n, g, hit = false;
		
		hoverData = [0,0,0];

		if (!buttons[0].selected) {							// check for node hover if not rotating
			hover = null;
			for (i = 0; i < nodes.length; i++) {
				n = nodes[i];
				if ((!hit && n.hitTest(mouse)) || n.dragging) {
					n.isMouseOver = hit = true; //highlight on mouseover 
					hover = i;
				}
				else {
					n.isMouseOver = false;
				}
			}
		}
				
		for (i = tabs.length - 1; i >= 0; i--) {				//highlight tab on mouseover
			g = tabs[i];
			if (!hit && g.hitTest(mouse)) g.isMouseOver = hit = true; 
			else g.isMouseOver = false;
		}
		
		if (buttons[0].selected && mouseDown) { // if rotate selected and holding mouse down
			var x, y, z;
			if (axis === 'za') {
				x = y = 0;
				z = (mouse.y - startRotate.y) / screenHeight * Math.PI;
			}
			else if (axis === 'zb') {
				x = y = 0;
				z = (mouse.y - startRotate.y) / screenHeight * Math.PI *-1;
			}
			else if (axis === 'xy') {
				x = (mouse.y - startRotate.y) / screenHeight * Math.PI *2;
				y = (mouse.x - startRotate.x) / screenHeight * Math.PI *-2;
				z = 0;
			}

			rotateNodes(x, y, z);
			currentRotation.x = x;
			currentRotation.y = y;
			currentRotation.z = z;
			
		}
		if (mouse.x < screenWidth*0.75 && mouse.y > screenHeight*0.75) {		// piping area
			if (whichPlot === 2) {
			
				hover = null;
				
				m = new Vector(mouse.x, mouse.y-screenHeight*0.75);
				
				for (i = 0; i < pipeSelect.length; i++) {
					p = pipeSelect[i];
					if (!hit && p.hitTest(m)) {
						p.isMouseOver = hit = true;
					}
					else {
						p.isMouseOver = false;
					}
				}
		}	
			}
		
		if (mouse.x > screenWidth*0.75) {										// GUI band
			if (whichPlot === 2)  {

				hover = null;
				
				if (mouse.y < screenHeight*0.25) { 								// telemetry
					
					c = slider;

					if ((!hit && c.hitTest(mouse)) || c.dragging) {
						c.isMouseOver = hit = true; 							
					}
					else c.isMouseOver = false;
					
							
					for (i = printing.length - 1; i >= 0; i--) {				
						g = printing[i];
						
						if (!hit && g.hitTest(mouse)) g.isMouseOver = hit = true; 
						else g.isMouseOver = false;
					}
				}	
				
				else if (screenHeight*0.25 < mouse.y && mouse.y < screenHeight*0.5) { 	// crosshairs
				
					c = crosshairs;

					if ((!hit && c.hitTest(mouse)) || c.dragging) {
						c.isMouseOver = hit = true; 
						slider.isMouseOver = false;					
					}
					else c.isMouseOver = false;
				}
				
				else if (screenHeight*0.5 < mouse.y && mouse.y < screenHeight*0.75) { 	// HGL
					for (i = 0; i < routes.length; i++) {				
						r = routes[i];
						if (r.selected) {
							n = r.hitTest(mouse, hCvs);
							n.isMouseOver = hit = true;
							hover 	= n.id;
							hoverData = [
								parseInt(r.d[r.d.length - r.hover -1]),
								parseInt(r.e[r.hover]), 
								parseInt((r.p[r.hover] - r.e[r.hover]) * 9.81 * DENSITY), 
								parseInt((r.r[r.hover] - r.e[r.hover]) * 9.81 * DENSITY)]
								;
						}
					}
				}
				
				else if (screenHeight*0.75 < mouse.y && mouse.y < screenHeight) { 		// Graph
					g = gr.hitTest(mouse);
					n = routes[g].s;
					n.isMouseOver = hit = true;
				}
			}
		
			else if (whichPlot === 1) {												// arrangement buttons
				for (i = buttons.length - 1; i >= 0; i--) {
					g = buttons[i];
					if (!hit && g.hitTest(mouse)) {
						g.isMouseOver = hit = true; 
					}
					else {
						g.isMouseOver = false;
					}
				}
			}
		}
        canvas.style.cursor = hit ? 'pointer' : 'default';
        plot();
    }

    function mouseDown(e) {

        for (var n, i = nodes.length - 1; i >= 0; i--) {
        	n = nodes[i];
        	
            if (n.isMouseOver) { //check if any nodes 
				if (buttons[1].selected && n != _last) {
					n.piped = true;
					n.previous = _last;
				}
				else if (buttons[2].selected) {
					n.stope = 1;		
				}
            	else if (tabs[0].selected) {
            		n.startDrag(mouse);
        		}
				else if (buttons[1].selected && n != _last) {
					n.piped = true;
					n.previous = _last;
				}
        		else if (piper != null) {
        			n._pipe = piper;
        		}
        		
        		n.selected = true;
        		_last.selected = false;
            	_last = n;
                return;
            }
        }
        
        if (crosshairs.isMouseOver) {
        	crosshairs.startDrag(mouse);
        	slider.isActive = false;
        }
        
        if (slider.isMouseOver) {
        	slider.startDrag(mouse);
        	crosshairs.isActive = false;
        }
        
        for (var i = buttons.length - 1; i >= 0; i--) {
            if (buttons[i].isMouseOver) { //check if any buttons 
                buttons[i].startDrag(mouse)
            	return;
            }
        }

        for (var i = printing.length - 1; i >= 0; i--) {
            if (printing[i].isMouseOver) { //check if any buttons 
                printing[i].startDrag(mouse)
            	return;
            }
        }

        for (var i = tabs.length - 1; i >= 0; i--) {
            if (tabs[i].isMouseOver) { //check if any buttons 
                tabs[i].startDrag(mouse);
                if (i === 0) whichPlot = 1;
                else if (i === 1) {
                	whichPlot = 2;
                	loadModel();
                }
                return;
            }
        }
        
        for (var i = pipeSelect.length - 1; i >= 0; i--) {
            if (pipeSelect[i].isMouseOver) { //check if any buttons 
                pipeSelect[i].startDrag(mouse)
            	return;
            }
        }
        
        mouseDown = true;
        if (buttons[0].selected && nodes.length) {
        
			startRotate.x = mouse.x; // save coordinates at click
			startRotate.y = mouse.y;
			
			var n = m = nodes[0].z; // find centre vector for z axis
			for (var z, i = 0; i < nodes.length; i++) {
				z = nodes[i].z;
				if (z > m) m = z;
				if (z < n) n = z;
			}
			centre.z = (m-n)/2 + n;
			
			copyNodes = []; // save copy of original node set
			for (var m, i = 0; i < nodes.length; i++) {
				var n = nodes[i];
				copyNodes.push(new Vector(n.x,n.y,n.z));
				m = copyNodes[i];
				m.sub(centre);

			}
			if 		(mouse.x > screenWidth*0.75) 	axis = 'za';
			else if (mouse.x < screenWidth*0.25) 	axis = 'zb';
			else 									axis = 'xy';
			
		}
        plot();
    }

    function mouseUp(e) {
    	var c, n, i, g, p, len;
    	piper = null;
    	
    	if (crosshairs.dragging) crosshairs.endDrag();
     	if (slider.dragging) slider.endDrag();
    	
        for (i = nodes.length - 1; i >= 0; i--) {
        	n = nodes[i];
            if (n.dragging) {
                n.endDrag();
                break;
            }
        }
        
        for (i = 0, len = buttons.length; i < len; i++) {
        	g = buttons[i];
            if (g.dragging) {
                g.endDrag(buttons);
                break;
            }
        }
        
        for (i = 0; i < tabs.length; i++) {
        	g = tabs[i];
            if (g.dragging) {
                g.endDrag(tabs);
                break;
            }
        }
		
        for (i = 0, len = printing.length; i < len; i++) {
        	g = printing[i];
            if (g.dragging) {
                g.endDrag(printing);
                break;
            }
        }
        
        for (i = 0; i < pipeSelect.length; i++) {
        	g = pipeSelect[i];
            if (g.dragging) {
                g.endDrag(pipeSelect);
                break;
            }
        }
        for (i = 0; i < pipeSelect.length; i++) {
        	g = pipeSelect[i];
            if (g.selected === true) {
            	piper = pipes[i].id;
            }
        }
        
        
		if (buttons[3].selected) {
			add();
			buttons[3].selected = false;
		}
		
		if (buttons[4].selected) {
			load();
			buttons[4].selected = false;
		}
		
		if (buttons[5].selected) {
			save();
			buttons[5].selected = false;
		}
		
		if (tabs[0].selected) {
			tabs[1].selected = false;
		}		
		
		if (tabs[1].selected) {
			tabs[0].selected = false;
			for (i = 0; i < buttons.length; i++) { 		// shifting to model, deselect any arrangement buttons
				buttons[i].selected = false;
			}
			for (i = 0; i < pipes.length; i++) { 		// update the pipes and calc lengths
				p = pipes[i]
				
				p.update();
				p.totalLength();
			}
		}	

		if (printing[0].selected) {
			printHgl();
			printing[0].selected = false;
		}
		
		if (printing[1].selected) {
			printBar();
			printing[1].selected = false;
		}
		
		c = currentRotation;
		_rotation.add(c);
		c.x = c.y = c.z = 0;	
		
        mouseDown = false;
        plot();
    }

    function doubleClick(e) {
    	var n, i, g, s, r;
        for (i = nodes.length - 1; i >= 0; i--) {
        	n = nodes[i];
            if (n.isMouseOver) {
                if (buttons[1].selected) {
                	_last = n.previous;
                	n.previous.selected = true;
                	n.selected = n.piped = false;
                	n.previous = n;
                }
                
                else if (buttons[2].selected) {
                	n.stope = 0;
                }
                else if (tabs[1].selected) {
                	s = prompt("loop length: " + n.choke + " m. Enter new", "");
                	n.choke = parseInt(s) || 0;
                	for (i = 0; i < routes.length; i++) {
                		r = routes[i];
                	    r.updateArrgt();
    					r.updatePressure();
						gr.update(1);
    				} 
                }
                break;
            }
        }
        
        for (i = 0; i < pipeSelect.length; i++) {
        
        	g = pipeSelect[i];
            if (g.isMouseOver) {
                s = prompt("which pipe? \n4s40\n4s80\n6s40\n6s80\n6s120\n8s40\n8s80\n8s120\n10s80", "");
                updatePipes(i, s);
                break;
            }
        }
        
        if (slider.isMouseOver) pumping();
        
        plot();
    }
    
	function mouseWheel(e) {
		var m, i, c, n, s;
	
	    mouse.set(e.clientX, e.clientY);
		mouse.z = 0;

		
		if (e.wheelDelta > 0) s = 1.2;
		else s = 0.8;

		startZoom.x = mouse.x; // save coordinates
		startZoom.y = mouse.y;
		
		copyNodes = []; // save copy of original node set
		for (i = 0; i < nodes.length; i++) {
			n = nodes[i];
			
			n.sub(mouse);
			n.scale(s);
			n.add(mouse);
		}
		_scale *= s;
		plot();
	}



    // ** Functions **
    
    function plot() {
    	c = whichPlot;
    	plotFirst();
    	if (c === 1) plotArrange();
    	else if (c === 2) plotModel();
    }
    
    function addRoute(s) {
    	var r = new Route(s);
    	routes.push(r);
    	r.updateArrgt();
    	r.updatePressure();
    }

    function addNode(x, y, z, i) {
        var n = new Node(x, y, z, nodes.length);
        nodes.push(n);
    }
    
    function rotateNodes(x, y, z) {
        for (var n, m, c, i = 0; i < nodes.length; i++) {
        	n = nodes[i]; 
        	m = copyNodes[i];	
        	c = centre;
        	n.rotate(m, c, x, y, z);
		}
	}

	function colorNodes() {
		var m, x, n, d, i;
		
		m = nodes[0].oz;
		x = 0;
		
		for (i = 0; i < nodes.length; i++) { // find extent of depth
			n = nodes[i].oz;
			if (n > x) x = n;
			if (n < m) m = n;
		}
		
		t = x - m;
		
		for (i = 0; i < nodes.length; i++) {
			n = nodes[i];
			d = parseInt((n.oz - m) / t * 230);
			n.COLOR = 'rgb(' + 230 + ',' + d + ',' + d + ')';
		}
	}
	
	function load() {
		var s, i, n, p, error;
		
		whichPlot = 1;
		tabs[0].selected = true;
		s = prompt("This will load saved data. Alternatively, to add nodes use \'add\' button", "");
		
		if (s != null) {
			s = s.replace(/[\[\]& ]+/g, '');
			s = s.replace(/\r?\n|\r/g, ',');
			s = s.split(',');

			input = [];
			nodes = [];
			routes = [];
			
			for (i = 0; i < s.length; i+=6) {
				input.push([
				parseInt(s[i]), 	// x coordinate
				parseInt(s[i+1]), 	// y coordinate
				parseInt(s[i+2]), 	// z coordinate
				parseInt(s[i+3]), 	// node id
				parseInt(s[i+4]), 	// previous node id
				parseInt(s[i+5]), 	// is stope		
				]);
			}

			for (i = 0; i < input.length; i++) {
				for (j = 0; j < 6; j++) {
					if (isNaN(input[i][j])) {
						error = true;
						console.log('load error');
						break;
					}
				}
			}

			if (input != null && !error) {
				newInput(input);
				for (i = 0; i < nodes.length; i++) {
					n = nodes[i];
					p = input[i];
					
					coordinates.push([
					p[0], p[1], p[2]
					]);
				
					n.previous = nodes[p[4]];
					n.stope = p[5];

					if (p[3] != p[4]) n.piped = true;
					else n.piped = false;
				/*
					n.stope = p[5];
					n.previous = nodes[p[4]];
					if (p[3] != p[4]) n.piped = true;
					else n.piped = false;*/
				}
			}
		}
		console.log(nodes);
	}
	
	function startup(d) {
		var k, n, p;
		
		whichPlot = 1;
		tabs[0].selected = true;
		
		input 	= d;
		nodes 	= [];
		routes 	= [];
		
		if (input != null) newInput(input);
		
		for (i = 0; i < nodes.length; i++) {
			n = nodes[i];
			p = input[i];
			
			coordinates.push([
			p[0], p[1], p[2]
			]);
		
			n.previous = nodes[p[4]];
			n.stope = p[5];

			if (p[3] != p[4]) n.piped = true;
			else n.piped = false;
		}
	}

	function add() {
		var s, i, p, len, error;
		
		whichPlot = 1;
		tabs[0].selected = true;
		
		input = [],
		
		len = nodes.length;
		if (len != 0) {					// reset existing nodes
			for (i = 0; i < len; i++) {
				n = nodes[i];
				n.x = n.ox;
				n.y = n.oy;
				n.z = n.oz;
				n.sub(setupVector)
			}
			r =_rotation
			r.x = r.y = r.z = 0;
		}
		
		s = prompt("Enter nodes", "[0,0,0],[0,0,0]");
		
		if (s) {
			s = s.replace(/[\[\]&]+/g, '');
			s = s.replace(/\r?\n|\r/g, ',');
			s = s.split(',');

			for (i = 0; i < s.length; i+=3) {
				input.push([parseInt(s[i]),parseInt(s[i+1]),parseInt(s[i+2])]);
			}
			
			for (i = 0; i < input.length; i++) {
				for (j = 0; j < 3; j++) {
					if (isNaN(input[i][j])) {
						error = true;
						console.log('load error');
						break;
					}
				}
			}
			if (input != null && !error) {
				for (i = 0; i < input.length; i++) {
					p = input[i];
					coordinates.push([
					p[0], p[1], p[2]
					]);
				}
				newInput(input);
			}
		}
	}
	
	function printHgl() {
		var n, i, j, k;
		printText = '';
		
		for (i = 0; i < routes.length; i++) {

			r = routes[i];
			if (r.selected) {
				for (j = 0; j < r.a.length; j++) {
					k = r.a.length-j-1;
					printText +=
					String(parseInt(r.d[j])) + ',' + 
					String(parseInt(r.e[k])) + ',' +
					String(parseInt(r.p[k])) + ',' +
					String(parseInt(r.r[k])) + '<br>'
					;
				}
			}
		}
		var myWindow = window.open("", "MsgWindow", "width=500, height=700");
		myWindow.document.write(printText);
	}
	
	function printBar() {
		var n, i;
		printText = '';
		
		for (i = 0; i < gr.y.length; i++) {
		
			printText +=
			String(routes[i].s.id) + ',' + 
			String(parseInt(gr.y[i])) + '<br>'
			;
		}
		var myWindow = window.open("", "MsgWindow", "width=500, height=700");
		myWindow.document.write(printText);
	}

	function save() {
		var n, i;
		saveText = '';
		
		for (i = 0; i < nodes.length; i++) {

			n = nodes[i];
			saveText +=
			String(n.ox) + ',' + 
			String(-n.oy) + ',' +
			String(n.oz) + ',' +
			String(n.id) + ',' +
			String(n.previous.id) +',' +
			String(n.stope) + '<br>'
			;

		}
		var myWindow = window.open("", "MsgWindow", "width=500, height=700");
		myWindow.document.write(saveText);
	}
	
	function newInput(n) {
		var j, i, c, m, o;	

		if (nodes.length === 0) { // if this is the first lot of nodes will have new setup vector
			m = 1;
			s = 0;
		}
		else {
			m = 0;
			s = nodes.length;
		}
				
		for (var i = 0; i < n.length; i++) {
			addNode(n[i][0], screenHeight-n[i][1], n[i][2], i);
		}

		if (m) { // if this is the first lot of nodes, find new max and min	
			
			o = nodes[0];
			setupVector = new Vector(o.x-screenWidth/2, o.y-screenHeight/2, o.z);

		}
				
		for (i = s; i < nodes.length; i++) {
			j = nodes[i];
			j.sub(setupVector);

		}
		
		colorNodes();
		_last = nodes[0];
	}
	
	function loadModel() {
		var n, g, i, r;
		routes = [];
		g = [];
		
		for (i = 0; i < nodes.length; i++) {
			n = nodes[i];
			if (n.stope) addRoute(n);
		}
		gr = new Graph();
		gr.update(1);
	}
	
	function checkArray(n, a) {
		var i;
		
		for (i = 0; i < a.length; i++) {
			if (n === a[i]) return true;
		}
	}
	function returnIndex(n, a) {
		var i;
		for (i = 0; i < a.length; i++) {
			if (n === a[i]) return i;
		}
	}
	
	function colorPressure(pa, pb, ctx, d, n, m, e, f) { // a press, b press, ctx, distance a-b , node a, node b, elevation a, elevation b
		var a, b, r1, r2, g1, g2, nr, mr, 
			b1, b2, aCol, bCol, grad;
		
		nr = pipes[n._pipe]._rating*1000/9.81/DENSITY;			// node a rating
		mr = pipes[m._pipe]._rating*1000/9.81/DENSITY;			// node b rating

		
		a = (pa-e)/nr || 0;													// % of rating
		b = (pb-f)/mr || 0;													// % of rating
		
		
		if (a > 1) {
			r1 = '255';
			g1 = '0';
			b1 = g1;
		}
		else if (a > 0.5) {
			r1 = String(Math.round((a - 0.5)/0.5 * 255));
			g1 = '255';
			b1 = '0';
		}
		else if (0 <= a) {
			r1 = '0';
			g1 = String(Math.round(a * 255));
			b1 = String(Math.round(255 - (a * 255)));
		}
		else if (a < 0) {
			r1 = b1 = '200';
			g1 = '0';
		}
			
		if (b > 1) {
			r2 = '255';
			g2 = b2 = '0';
		}
		else if (b > 0.5) {
			r2 = String(Math.round((b - 0.5)/0.5 * 255));
			g2 = '255';
			b2 = '0';
		}
		else if (0 <= b) {
			r2 = '0';
			g2 = String(Math.round(b * 255));
			b2 = String(Math.round(255 - (b * 255)));
		}
		else if (b < 0) {
			r2 = b2 = '200';
			g2 = '0';
		}
			
		aCol = 'rgb('+r1+','+g1+','+b1+')';
		bCol = 'rgb('+r2+','+g2+','+b2+')';
		
		grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, d);
		grad.addColorStop(0, aCol);
		grad.addColorStop(1, bCol);
		return grad;
	}

	function setOrientation() {
		o = orientation;
		al = 8;	// arrow length
		aw = 3;	// arrow width
		o[0] = new Vector(screenWidth-70, screenHeight-70, 0);
		o[1] = new Vector(OS, 0, 0);
		o[2] = new Vector(OS-al, 0, aw);
		o[3] = new Vector(OS-al, -1*aw, 0);
	
		o[4] = new Vector(0, -1*OS, 0);
		o[5] = new Vector(aw, -1*OS+al, 0);
		o[6] = new Vector(0, -1*OS+al, aw);
	
		o[7] = new Vector(0, 0, OS);
		o[8] = new Vector(0, -1*aw, OS-al);
		o[9] = new Vector(aw, 0, OS-al);
	}
	
	function updateRecipe(pf,st) {
		var a, b, i, f, t, sg, sf, wf, wt, pt;
		
		FLOW_RATE = pf;				// paste flow
		TONNAGE = st;				// solids tonnage
		
		sf = st / SG;   			// solids flow
		wf = wt = pf - sf; 			// water flow and tonnage
		pt = wt + st; 				// paste tonnage
		
		DENSITY = pt / pf;			// paste tonnage / paste flow
		CONCENTRATION = st / pt;	// solids tonnage / paste tonnage
		
		updateRheology();
	}
		
	function updateRheology() {
		a = 895696;
		b = 27.019;
									// from lab data:
		YIELD_STRESS = a * Math.pow(CONCENTRATION, b);
		VISCOSITY = YIELD_STRESS / 1000;
		
		for (i = 0; i < pipes.length; i++) pipes[i].update();
		
	}
		
	function updateRecipeB(c) {
		var i, st, pt, wt, c, wf, sf, pf;

		c = c;
		st = TONNAGE;				// constant solids throughput with changing density, variable flow rate
				
		pt = st / c;				// paste tonnage
		wt = wf = pt - st;			// water flow and tonnage
		sf = st / SG;				// solids flow
		pf = sf + wf;				// paste flow
		

		FLOW_RATE = pf;
		CONCENTRATION = c;
		DENSITY = pt / pf;
		
		updateRheology();
		
	}
	
	function updatePipes(id, s) {
		var i, j, p;

		for (j = 0; j < PIPE_TYPES.length; j++) {
			if (PIPE_TYPES[j][0] === s) {
				p = PIPE_TYPES[j];
				pipes[id] = new SteelPipe(j, p[1], p[2], p[3], p[4], 1.5);
				break;
			}
		}
		for (i = 0; i < pipes.length; i++) {
			pipes[i].update();
			this.totalLength();
		}
	}
	
	function pumping() {
		var i, r, c, lo, hi, mid, p;
		for (i = 0 ; i < routes.length; i++){
		
			r = routes[i];
			
			if (Math.abs(r.p[r.p.length-1] - MAX_PUMP/9.81/DENSITY - r.e[r.e.length-1]) < 0.4) break; // don't repeat analysis on same setting

			c = 0;
			lo = 0;
			hi = 1;
			
			while (Math.abs(r.p[r.p.length-1] - MAX_PUMP/9.81/DENSITY - r.e[r.e.length-1]) > 0.4){
			
				c++;
				var mid = (lo + hi) / 2;
				
				updateRecipeB(mid);
				r.updatePressure();
				
				if ((r.p[r.p.length-1] - MAX_PUMP/9.81/DENSITY - r.e[r.e.length-1]) > 0.4){
					hi = mid;
				}
				if ((r.p[r.p.length-1] - MAX_PUMP/9.81/DENSITY - r.e[r.e.length-1]) < -0.4){
					lo = mid;
				}
				if (c > 1000){
					console.log("pump error " + mid);
					break
				}
			}
			r.a[0].yield = YIELD_STRESS;
		}
		gr.update(0);
	}
	
		
    // ** Init **

	canvas = document.getElementById('c');
	context = c.getContext("2d");

    bufferCvs = document.createElement('canvas');
	tCvs = document.createElement('canvas');
	cCvs = document.createElement('canvas');
	hCvs = document.createElement('canvas');
	gCvs = document.createElement('canvas');
	pCvs = document.createElement('canvas');

	window.addEventListener('resize', resize, false);
    resize(null);
    
    slider.x = MAX_PUMP/sliderScale;
    slider.y = screenHeight/4 - 15;
    
    crosshairs.x = FLOW_RATE;
	crosshairs.y = TONNAGE;
		
	updateRecipe(crosshairs.x, crosshairs.y);
    
    for (var i = 0; i < 6; i++) {
    	var p = PIPE_TYPES[i];
    	pipes.push(new SteelPipe(i, p[1], p[2], p[3], p[4], 1.5));
    }
 
    for (var i = 0; i < BUTTONS_A.length; i++) {
    	var y = i * 30 + 60;
    	buttons.push(new Button(screenWidth - 50, y, BUTTONS_A[i], 'a'));
	}
	
    for (var i = 0; i < SELECT_PIPE.length; i++) {
    	var y = i * 18 + 84;
    	pipeSelect.push(new Button(75, y, SELECT_PIPE[i], 'c'));
	}
	
	for (var i = 0; i < TABS.length; i++) {
    	var x = screenWidth- (i+1) * TAB_WIDTH;
    	var y = TAB_HEIGHT;
    	tabs.push(new Button(x, y, TABS[i], 'a'));
	}
    for (var i = 0; i < BUTTONS_B.length; i++) {
    	var y = i * 30 + 100;
    	printing.push(new Button(screenWidth - 50, y, BUTTONS_B[i], 'a'));
	}

		
	//startup(DATA);

	setOrientation();								// creates original arrows
	whichPlot = 1;
	
    canvas.addEventListener('mousemove', mouseMove, false);
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('dblclick', doubleClick, false);
	canvas.addEventListener('mousewheel', mouseWheel, false);
	

    
    // ** Start Update **

    var plotFirst = function() {
        var i, g, choke, textA, h;
		
        context.save();
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(0, 0, screenWidth, screenHeight);
        context.fillStyle = grad;
		context.fillRect(0, 0, screenWidth, screenHeight);
        context.restore();
		
		context.fillStyle = context.strokeStyle = '#ccc';
		
		if (hover != null) {
			choke 	= nodes[hover].choke
			
			if (choke > 0) choke = ",  choke: " + nodes[hover].choke + ' m ';
			else choke = '';
			
			if (hoverData[0] === hoverData[1] && hoverData[2] === 0) h = '';
			else {
				h = 
				', distance: '  + 
				hoverData[0] + ' m, elevation: ' +
				hoverData[1] + ' m, pressure: ' +
				hoverData[2] + ' kPa, rating: ' +
				hoverData[3] + ' kPa'
				;
			}
			
			textA = 
				"node " + 
				hover + ': ' + 
				coordinates[hover][0] + ', ' + 
				coordinates[hover][1] + ', ' + coordinates[hover][2] + 
				choke + h
				;
				
		 	context.fillText(textA, screenWidth/2, screenHeight - 20);
		}
		
        for (i = 0; i < tabs.length; i++) {
			g = tabs[i];
			g.render(context);
		}	
    };


    var plotArrange = function() {

        var i, n, g;
		len = nodes.length;
        
        bufferCtx.save();
        bufferCtx.globalCompositeOperation = 'destination-out';
        bufferCtx.globalAlpha = 0.7;
        bufferCtx.fillRect(0, 0, screenWidth, screenHeight);
        bufferCtx.restore();

        bufferCtx.save();
        bufferCtx.lineCap = bufferCtx.lineJoin = 'round';
        bufferCtx.lineWidth = 1;
		bufferCtx.strokeStyle = bufferCtx.fillStyle = '#ccc';        
		
		
		o = orientation;
		setOrientation();
	
		bufferCtx.beginPath();
				
		rA = currentRotation;
		rB = _rotation;
		
		r = new Vector(rA.x+rB.x,rA.y+rB.y,rA.z+rB.z);
		
		for (i = 1; i < 10; i+=3) {
			m = o[i];
			o[i].rotate(m, o[0], r.x, r.y, r.z);

			m = o[i+1];
			o[i+1].rotate(m, o[0], r.x, r.y, r.z)

			m = o[i+2];
			o[i+2].rotate(m, o[0], r.x, r.y, r.z)			
			bufferCtx.moveTo(o[0].x, o[0].y);
			bufferCtx.lineTo(o[i].x, o[i].y);
			bufferCtx.lineTo(o[i+1].x, o[i+1].y);
			bufferCtx.moveTo(o[i].x, o[i].y);
			bufferCtx.lineTo(o[i+2].x, o[i+2].y);			
			bufferCtx.fillText(OT[i], o[i].x+2, o[i].y-2);
		}
			
		bufferCtx.strokeStyle = '#fff';
		bufferCtx.stroke();
		
        for (i = 0; i < len; i++) {
            n = nodes[i];
			if (n.dragging) n.drag(mouse, nodes); // if rotate or pan active
        }

        for (i = 0; i < len; i++) {
			n = nodes[i];
			n.render(bufferCtx);
		}
												//draw buttons on bufferCtx
        for (i = 0; i < buttons.length; i++) {
			g = buttons[i];
			g.render(bufferCtx);
		}	
		
		bufferCtx.restore();
		
        context.drawImage(bufferCvs, 0, 0);
    };
    
    var plotModel = function() {
        var i, j, n, a, p, d, e, r, t, g,
			len = nodes.length, grad;

        bufferCtx.save();
        bufferCtx.globalCompositeOperation = 'destination-out';
        bufferCtx.globalAlpha = 0.7;
        bufferCtx.fillRect(0, 0, screenWidth, screenHeight);
        bufferCtx.restore();

        bufferCtx.save();
        bufferCtx.lineCap = bufferCtx.lineJoin = 'round';
        bufferCtx.lineWidth = 1;
        

		// model plot
		for (i = 0; i < len; i++) {
			if (nodes[i].selected) console.log(i);
		}
		if (piper != null) {								// color selected pipe type

			for (i = 0; i < len; i++) {
			
				n = nodes[i];
				
				if (n._pipe === piper) {
					n.highlighted = true;
				}
				else n.highlighted = false;
				n.render(bufferCtx, 1);
			}
		}
		
		else {
		
			a = [];
			p = [];
			e = [];

			for (j = 0; j < routes.length; j++) {			// deselect all routes
				r = routes[j]
				r.selected = false;
			}
		
			for (i = 0; i < len; i++) {						// find selected stope
				n = nodes[i];
				
				n.highlighted = false;						//un-highlight in case just switched from piper
				
				if (n.selected && n.stope) {
					for (j = 0; j < routes.length; j++) {	// find route terminating in selected stope
						r = routes[j]
						if (n === r.s) {
							r.selected = true;
							a = r.a;
							p = r.p;
							e = r.e;
						}
					}
				}
			}

			for (i = 0; i < len; i++) {						// color pipelines
				n = nodes[i];
				if(checkArray(n, a)) {				// if node in array
					j = returnIndex(n, a);
					m = a[j+1];						// j = index of node in array
					if (!m) {						// if last node in array, move on
						continue;
					}
					t = n.distanceTo(m);		// t = distance from node to next node in array
					r = colorPressure(p[j], p[j+1], bufferCtx, t, n, m, e[j], e[j+1]); // node and previous

					n.render(bufferCtx, 2, r);  //colour pressure
				}
				else n.render(bufferCtx, 1);  //colour grey
			}
		}
		
        for (i = 0; i < printing.length; i++) {
			g = printing[i];
			g.render(bufferCtx);
		}	
																	// pressure legend
		grad = bufferCtx.createLinearGradient(15,30,50,150);
		grad.addColorStop(0,"rgb(255,0,0)");
		grad.addColorStop(0.2,"rgb(255,150,0)");
		grad.addColorStop(0.4,"rgb(255,255,0)");
		grad.addColorStop(0.6,"rgb(0,255,0)");
		grad.addColorStop(0.8, "rgb(0,0,255)");
		grad.addColorStop(1, "rgb(200,0,200)");
		bufferCtx.strokeStyle = grad;
		bufferCtx.lineWidth = 5;
		bufferCtx.beginPath();
		bufferCtx.moveTo(40, 30);
		bufferCtx.lineTo(40, 150);
		bufferCtx.stroke();
		/*pressure legend text*/
		bufferCtx.lineWidth = 1;
		bufferCtx.textAlign = 'center';
		bufferCtx.fillStyle = '#ccc';
		bufferCtx.fillText("over limit",40,24);	
		bufferCtx.fillText("slack",40,162);	
		
		context.drawImage(bufferCvs, 0, 0);
		
		plotT();
		plotC();
		plotH();
		plotG();
		plotP()
	}
	
	var plotT = function() {
		var i, w, h, t;
		
		w = tCvs.width;
		h = tCvs.height;
		t = [
		'solids SG:          ' + SG,
		'density:              ' + parseInt(DENSITY*100)/100 + ' t/m3',
		'concentration:    ' + parseInt(CONCENTRATION*1000)/10 + ' %m',
		'yield stress:        ' + parseInt(YIELD_STRESS) + ' Pa',
		'viscosity:             ' + parseInt(VISCOSITY*1000)/1000 + ' Pa.s',
		'range:                  ' + parseInt(RANGE_UPPER * 100) + ' - ' + parseInt(RANGE_LOWER * 100) + ' %m'
		];
		
		tCtx.clearRect(0, 0, w, h);
		for (i = 0; i < t.length; i++) {
			tCtx.fillText(t[i],10, i*15+50)
		}
		tCtx.fillStyle = '#ccc';
		tCtx.restore();
		
		if (slider.dragging) {
			slider.drag(mouse);
		
			MAX_PUMP = slider.x * sliderScale;
		}
		
		slider._draw(tCtx);
		
		context.drawImage(tCvs, screenWidth - w, 0);
	}
	
	var plotC = function() {			// CROSSHAIRS
		var i, f, t, w, 
		h, x, y, textC, xc, nc, max;
		
		w = cCvs.width;
		h = cCvs.height;
		
		cCtx.clearRect(0, 0, w, h);
		
		xc = RANGE_UPPER;
		nc = RANGE_LOWER;
		
		cCtx.beginPath();
		cCtx.moveTo(0,h);
		y = (xc*w)/(1+(xc/SG)-xc);
		cCtx.lineTo(w, h-y);
		y = (nc*w)/(1+(nc/SG)-nc);
		cCtx.lineTo(w, h-y);
		cCtx.closePath();
		cCtx.fillStyle = '#267';
		cCtx.fill();			
			
		cCtx.beginPath();	
		for (i = 0.5; i < w; i += 20) {
			cCtx.moveTo(i, 0);
			cCtx.lineTo(i, h);
			cCtx.moveTo(0, i);
			cCtx.lineTo(w, i);
		}
		cCtx.strokeStyle = '#333';
		cCtx.lineWidth = 1;
		cCtx.stroke();
		
		if (crosshairs.dragging) {
			crosshairs.drag(mouse);
		
			f = crosshairs.x;
			t = h - crosshairs.y;
			
			updateRecipe(f,t);
			
			for (i = 0; i < routes.length; i++) {
				r = routes[i];
				r.updatePressure();	
			}
			gr.update(1);
			
			max = 0;
			for (i = 0; i < gr.y.length; i ++) {
				y = gr.y[i];
				if (y > max) max = y;
			}
			MAX_PUMP = max;
			slider.x = max / sliderScale;
			
		}
			
		crosshairs._draw(cCtx);

		context.drawImage(cCvs, screenWidth - w, h)
	}
		
    var plotH = function() {				// HGL

		var w, h, sx, sy, textA;
		
		w = hCvs.width;
		h = hCvs.height;
		
		hCtx.clearRect(0, 0, w, h);
		
		for (i = 0; i < routes.length; i++) {
			if (routes[i].selected) {
				routes[i]._draw(hCtx, w, h);
			}
		}
		context.drawImage(hCvs, screenWidth - w, 2 * h);
    };
    
    var plotG = function() {				//GRAPH
		var i, w, h;
		
		w = gCvs.width;
		h = gCvs.height;
		
		gCtx.clearRect(0, 0, w, h);
		
		gr._draw(gCtx);
		context.drawImage(gCvs, screenWidth - w, 3 * h);
		
    }
    
    var plotP = function() {
		var i, w, h, t, p;
		
		w = pCvs.width;
		h = pCvs.height;
			
		pCtx.clearRect(0, 0, w, h);
		
		
		for (i = 0; i < pipeSelect.length; i++) {
			p = pipeSelect[i];
			p.render(pCtx);
		}	

		pCtx.fillStyle = '#ccc';
		pCtx.textAlign = 'center';
				
		for (i = 0; i < PIPE_TABLE.length; i++) pCtx.fillText(PIPE_TABLE[i], i*75+70,70);		
		
		for (i = 0; i < pipes.length; i++) {
			p = pipes[i];
			for (j = 0; j < p._text.length; j++) {
				pCtx.fillText(p._text[j],j*75+70, i*18+90);
			}
		}
		
		context.drawImage(pCvs, 0, screenHeight - h);
    }
    
    plot();
    

	
})();
