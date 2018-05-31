var objects = module.exports;

// Vector, Node, Route, SteelPipe

// *** Vector ***

// set up vector with dimensions as required
objects.Vector = function(x, y, z) {
	this.x = this.ox = x || 0;
	this.y = this.oy = y || 0;
	this.z = this.oz = z || 0;
}

objects.Vector.prototype = {
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

objects.Node = function(x, y, z, i, p) {
	objects.Vector.call(this, x, y, z);
	this.id = i;
	this._pipe = p || 3;
	this.previous = this;
};

// give node vector methods	
objects.Node.prototype = (function(o) {
	var s = new objects.Vector(0, 0, 0), p;
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
	}
});

// *** Route ***

objects.Route = function(s) {
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

objects.Route.prototype = {
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
    }
};
    
objects.SteelPipe = function(id, diameter, rating, OD, wall, wear) {
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

objects.SteelPipe.prototype = {
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
	
	/*
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
		*/
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