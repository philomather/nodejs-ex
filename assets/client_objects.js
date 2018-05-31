// Vector, Node, Crosshairs, Button, Graph


// set up vector with dimensions as required
Vector = function(x, y, z) {
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

Node = function(x, y, c, px, py, pc) {
	this.x = x;
	this.y = y;
	this.c = c;
	this.px = px;
	this.py = py;
	this.pc = pc;
}

// give node vector methods	
Node.prototype = {

    update: function(d) {
        this.x = d[0];
		this.y = d[1];
		this.c = d[2];
		this.px = d[3];
		this.py = d[4];
		this.pc = d[5];
    },
    
    _draw: function(ctx) {
        var grad, d;

        d = Math.sqrt((this.x - this.px) * (this.x - this.px) + (this.y - this.py) * (this.y - this.py));

        grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, d);
        grad.addColorStop(0, this.c);
        grad.addColorStop(1, this.pc);

        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.px, this.py);
        ctx.stroke();
        ctx.closePath();
    }
};
