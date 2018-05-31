var server_code = module.exports;
var objects = require('./objects.js');

var DATA = [[777615,9583388,1436,0,0,0],[777652,9583395,1420,1,0,0],[777684,9583382,1410,2,1,0],[777708,9583364,1400,3,2,0],[777730,9583361,1396,4,3,0],[777740,9583365,1396,5,4,0],[777785,9583380,1270,6,5,0],[778092,9583380,1270,7,6,0],[778092,9583167,1270,8,256,0],[778092,9583295,1270,9,10,0],[778102,9583310,1270,10,11,0],[778102,9583325,1270,11,12,0],[778092,9583355,1270,12,7,0],[778132,9583097,1257,13,13,0],[778125,9583097,1258,14,15,0],[778118,9583099,1259,15,16,0],[778112,9583102,1260,16,17,0],[778106,9583106,1261,17,18,0],[778101,9583111,1262,18,19,0],[778097,9583117,1263,19,20,0],[778094,9583123,1264,20,21,0],[778093,9583130,1265,21,22,0],[778092,9583137,1266,22,23,0],[778092,9583157,1270,23,8,0],[778092,9583167,1270,24,24,0],[778132,9583097,1257,25,25,0],[778125,9583096,1257,26,26,0],[778118,9583094,1258,27,14,0],[778112,9583091,1258,28,27,0],[778106,9583087,1258,29,28,0],[778101,9583082,1258,30,29,0],[778097,9583077,1259,31,30,0],[778094,9583070,1259,32,31,0],[778093,9583064,1259,33,33,0],[778092,9583057,1260,34,32,0],[778092,9583047,1260,35,34,0],[778092,9582980,1250,36,35,0],[778082,9582815,1245,37,38,1],[778102,9582882,1245,38,39,0],[778102,9582987,1245,39,40,0],[778092,9583010,1245,40,41,0],[778092,9583167,1245,41,257,1],[778092,9583280,1245,42,257,0],[778100,9583310,1245,43,42,0],[778100,9583355,1245,44,43,0],[778055,9582860,1245,45,46,0],[778055,9582980,1245,46,47,0],[778067,9583010,1245,47,40,0],[778067,9583032,1245,48,47,0],[778072,9583070,1220,49,61,0],[778082,9583167,1220,50,259,0],[778082,9583287,1220,51,50,0],[778092,9583305,1220,52,51,0],[778092,9583340,1220,53,52,0],[778085,9583372,1220,54,53,0],[778085,9583410,1220,55,54,0],[778085,9583487,1220,56,55,0],[778082,9583137,1220,57,50,0],[778020,9583137,1220,58,57,0],[778020,9583085,1220,59,58,0],[778137,9583087,1220,60,62,0],[778082,9583087,1220,61,57,0],[778117,9583087,1220,62,61,0],[778110,9583010,1220,63,66,0],[778110,9582935,1220,64,63,0],[778085,9582815,1220,65,64,0],[778117,9583025,1220,66,62,0],[778055,9582860,1220,67,68,0],[778055,9582905,1220,68,69,0],[778047,9582927,1220,69,70,0],[778047,9582957,1220,70,71,0],[778057,9582980,1220,71,72,0],[778057,9583025,1220,72,66,0],[778057,9583055,1220,73,72,0],[778117,9582815,1195,74,85,0],[778117,9583272,1195,75,260,0],[778117,9583337,1195,76,75,0],[778105,9583347,1195,77,76,0],[778062,9583347,1195,78,77,0],[778062,9583385,1195,79,78,0],[778077,9583272,1195,80,75,0],[778077,9583302,1195,81,80,0],[778077,9583265,1195,82,80,0],[778070,9583235,1195,83,82,0],[778070,9583160,1195,84,83,0],[778117,9583122,1195,85,260,0],[778080,9583122,1195,86,85,0],[778035,9583122,1195,87,86,0],[778027,9583137,1195,88,87,0],[778080,9583025,1195,89,86,0],[778045,9583002,1195,90,89,0],[778045,9582935,1195,91,90,0],[778027,9582890,1195,92,91,0],[778117,9582815,1170,93,94,0],[778117,9582912,1170,94,113,0],[778117,9583192,1170,95,261,0],[778117,9583205,1170,96,95,0],[778065,9583205,1170,97,96,0],[778065,9583257,1170,98,97,0],[778065,9583302,1170,99,98,0],[778100,9583302,1170,100,99,0],[778100,9583340,1170,101,100,0],[778067,9583385,1170,102,101,0],[778060,9583182,1170,103,97,0],[778060,9583160,1170,104,103,0],[778117,9583107,1170,105,261,0],[778090,9583107,1170,106,105,0],[778067,9583122,1170,107,106,0],[778027,9583122,1170,108,107,0],[778027,9583145,1170,109,108,0],[778085,9583100,1170,110,106,0],[778085,9583055,1170,111,110,0],[778075,9583032,1170,112,111,0],[778117,9583032,1170,113,105,0],[778060,9583032,1170,114,112,0],[778060,9583025,1170,115,114,0],[778042,9583002,1170,116,115,0],[778042,9582905,1170,117,118,0],[778042,9582912,1170,118,116,0],[778117,9583205,1155,119,262,0],[778055,9583205,1155,120,119,0],[778055,9583265,1155,121,120,0],[778082,9583310,1155,122,121,0],[778082,9583370,1155,123,122,0],[778055,9583152,1155,124,120,0],[778062,9583137,1155,125,124,0],[778062,9583085,1155,126,131,0],[778040,9583055,1155,127,126,0],[778040,9582950,1155,128,127,0],[778032,9582920,1155,129,128,0],[778117,9583122,1155,130,262,0],[778062,9583122,1155,131,125,0],[778117,9583025,1155,132,130,0],[778125,9583010,1155,133,132,0],[778125,9582965,1155,134,133,0],[778100,9582920,1155,135,134,0],[778100,9582860,1155,136,135,0],[778100,9582860,1130,137,138,0],[778100,9582920,1130,138,139,0],[778127,9582965,1130,139,140,0],[778127,9583040,1130,140,141,0],[778117,9583055,1130,141,142,0],[778117,9583130,1130,142,143,0],[778117,9583205,1130,143,263,0],[778065,9583212,1130,144,143,0],[778065,9583280,1130,145,144,0],[778095,9583310,1130,146,145,0],[778095,9583400,1130,147,146,0],[778070,9583130,1130,148,142,0],[778037,9582890,1130,149,150,0],[778042,9582912,1130,150,151,0],[778042,9582965,1130,151,152,0],[778037,9582980,1130,152,153,0],[778037,9583017,1130,153,154,0],[778047,9583032,1130,154,155,0],[778047,9583070,1130,155,156,0],[778070,9583085,1130,156,148,0],[778070,9583152,1130,157,148,0],[778050,9583167,1130,158,157,0],[778050,9583197,1130,159,158,0],[778122,9582935,1105,160,161,0],[778122,9583040,1105,161,162,0],[778117,9583065,1105,162,264,0],[778117,9583150,1105,163,264,0],[778117,9583205,1105,164,171,0],[778060,9583205,1105,165,164,0],[778060,9583265,1105,166,165,0],[778092,9583300,1105,167,166,0],[778105,9583325,1105,168,167,0],[778105,9583370,1105,169,168,0],[778092,9583400,1105,170,169,0],[778117,9583172,1105,171,163,0],[778077,9583152,1105,172,171,0],[778060,9582860,1105,173,174,0],[778060,9582895,1105,174,175,0],[778040,9582912,1105,175,176,0],[778040,9582970,1105,176,177,0],[778030,9582980,1105,177,178,0],[778030,9583002,1105,178,179,0],[778050,9583025,1105,179,180,0],[778050,9583062,1105,180,181,0],[778077,9583062,1105,181,172,0],[778055,9583152,1105,182,172,0],[778055,9583182,1105,183,182,0],[778042,9583197,1105,184,183,0],[778020,9583167,1080,185,186,0],[778030,9583192,1080,186,187,0],[778030,9583205,1080,187,194,0],[778030,9583220,1080,188,187,0],[778047,9583250,1080,189,188,0],[778080,9583280,1080,190,189,0],[778107,9583325,1080,191,190,0],[778107,9583370,1080,192,191,0],[778092,9583400,1080,193,192,1],[778117,9583205,1080,194,265,0],[778117,9583152,1080,195,265,0],[778117,9583062,1080,196,195,0],[778117,9582980,1080,197,196,0],[778125,9582965,1080,198,197,0],[778125,9582935,1080,199,198,0],[778075,9583152,1080,200,195,0],[778055,9583152,1080,201,200,1],[778075,9583062,1080,202,196,0],[778075,9583107,1080,203,202,0],[778045,9583062,1080,204,202,0],[778045,9583040,1080,205,204,0],[778025,9583025,1080,206,205,0],[778010,9582965,1080,207,206,0],[778115,9583190,1060,208,224,0],[778091,9583213,1060,209,208,0],[778044,9583260,1050,210,209,0],[778115,9583160,1060,211,266,0],[778091,9583183,1060,212,211,0],[778067,9583207,1055,213,212,0],[778034,9583207,1050,214,214,0],[778115,9583150,1060,215,266,0],[778103,9583118,1060,216,215,0],[778092,9583087,1055,217,216,0],[778058,9583087,1050,218,217,0],[778115,9583130,1060,219,223,0],[778115,9583096,1060,220,219,0],[778115,9583063,1055,221,220,0],[778091,9583039,1050,222,221,0],[778117,9583134,1060,223,215,0],[778117,9583165,1060,224,211,0],[778117,9583190,1060,225,225,0],[778117,9583134,1030,226,236,0],[778117,9583165,1030,227,267,0],[778117,9583190,1030,228,228,0],[778114,9583189,1030,229,227,0],[778091,9583213,1030,230,229,0],[778044,9583260,1030,231,230,0],[778114,9583159,1030,232,267,0],[778091,9583183,1030,233,232,0],[778067,9583207,1025,234,233,0],[778034,9583207,1020,235,234,0],[778114,9583149,1030,236,232,0],[778103,9583118,1030,237,236,0],[778092,9583087,1025,238,237,0],[778058,9583087,1020,239,238,0],[778114,9583129,1030,240,226,0],[778114,9583096,1030,241,240,0],[778114,9583063,1030,242,241,0],[778091,9583039,1030,243,242,0],[778117,9583134,1000,244,251,0],[778117,9583165,1000,245,247,0],[778117,9583190,1000,246,245,0],[778114,9583159,1000,247,267,0],[778091,9583183,1000,248,247,0],[778067,9583207,995,249,248,0],[778034,9583207,990,250,249,0],[778114,9583149,1000,251,247,0],[778103,9583118,1000,252,251,0],[778092,9583087,995,253,252,0],[778058,9583087,990,254,253,0],[778087,9583182,1270,255,256,0],[778092,9583178,1270,256,9,0],[778092,9583177,1245,257,255,0],[778116,9583167,1245,258,257,0],[778109,9583167,1220,259,258,0],[778117,9583162,1195,260,259,0],[778117,9583155,1170,261,260,0],[778117,9583153,1155,262,261,0],[778117,9583143,1130,263,262,0],[778117,9583145,1105,264,263,0],[778117,9583154,1080,265,264,0],[778117,9583159,1060,266,265,0],[778117,9583164,1030,267,266,0]];

// testing
server_code.node_list = [[20,40,"rgb(255,0,0)",100,300,"rgb(255,0,0)"],[200,400,"rgb(255,0,0)",10,300,"rgb(255,0,0)"]];
server_code.pipe_list = 'pipe list data!';
server_code.fluid_list = 'fluid data!';

//example
var vector = new objects.Vector();
server_code.vector = [vector.x, vector.y];0


// When called to create a new project, we make the client the head and start a list of players
// At the same time we create a Project object called "project.core" using the Project function
// Then we run the Project.start() function to arrange all the details ready to sent to client
server_code.Newproject = function(client){
	var projectLive = {
		//id: 
		head: client,  // socket.userid
		player_client: null,
		player_count:1,
		total:0
	};

	// create new variable called project, project.core is a new project object
	project.core = new server_code.Project(projectLive);
	project.core.start(DATA);
	return project.core;
}

// PROJECT OBJECT **

server_code.Project = function(instance){
	this.instance = instance;
	this.total = 0;

	// Configs
	this.FLOW_RATE 			= 100;

	// Vars
	this.variableA = 1;
	this.nodes 	= [];
	this.routes = [];
	this.coordinates = [];
}

		    // Event Listeners
server_code.Project.prototype = {
	    

    // add or load nodes
    start: function(input) {
		
		this.input 	= input;
		
		// check for new input, create a list of node objects with newInput and addNode
		if (this.input != null) this.newInput(this.input);
		
		// setup the correct arrangement by modifying each node object 
		//in the node list according to the data in the input list
		for (i = 0; i < this.nodes.length; i++) {
			var n = this.nodes[i];
			var p = this.input[i];
		
			n.previous = this.nodes[p[4]];
			n.stope = p[5];

			if (p[3] != p[4]) n.piped = true;
			else n.piped = false;

			this.coordinates.push([
				p[0], p[1], p[2]
			]);
		}
	},

	// create new nodes
	newInput: function(n) {

		// run through the input and add a node for each
		for (var i = 0; i < n.length; i++) {
			this.addNode(n[i][0], n[i][1], n[i][2], i);
		}
	},

    addNode: function(x, y, z, i) {
        var n = new objects.Node(x, y, z, this.nodes.length);
        this.nodes.push(n);
    },

    send: function() {
    	// send nodes to the client!


    }
}