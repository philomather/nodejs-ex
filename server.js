#!/bin/env node
//  OpenShift sample Node application
var express = require('express'),
    io      = require('socket.io'),
    http    = require('http');
    mongojs = require('mongojs');

/**
 *  Define the sample application.
 */
var SampleApp = function() {

    //  Scope.
    var self = this;

    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;
        self.didconnect = false;
        // MONGODB STUFF
        if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
            self.connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' + 
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
            self.db = mongojs(self.connection_string, ['shelf']);
            self.didconnect = true;
        }
        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };

    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };

    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };

    self.initialize = function() {
        self.setupVariables();
        self.setupTerminationHandlers();
    };

    self.start = function() {

        self.app     = express(),
        self.server  = http.createServer(self.app);

        //deploy
        self.server.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });

        //local
        //self.server.listen(8080);

        self.app.get('/', function (req, res) {
            res.sendfile('/index.html', {root:__dirname });
        });

        self.app.get('/*', function(req, res, next) {
            self.file = req.params[0];
            res.sendfile(__dirname + '/assets/' + self.file);
        });

        var server_code = require('./server_code.js');
        var objects = require('./objects.js');
        var head;
        self.client_list = [];


        self.sio     = io.listen(self.server);

        self.sio.configure(function (){
            self.sio.set('log level', 0);
            self.sio.set('authorization', function(handshakeData, callback) {
                callback(null, true);
            });
        });

        self.sio.sockets.on('connection', function (client) {

            client.userid  = Math.round((new Date).getTime())
        
            if(!self.client_list.length){ 
                head = client.userid
                // start new project
                self.project = server_code.Newproject(client.userid);  //project is 
                client.emit("message", self.project.nodes);

                // Database stuff
                var shelf = self.db.collection('shelf');
                self.myDocs = shelf.find().forEach(function(err, doc) {
                    if(doc != null){
                        client.emit('message', doc.value);
                        self.project.total = doc.value;
                        client.emit('totalled', self.project.total);
                    }
                });       
            };

                // add to client list and send id
            self.client_list[self.client_list.length] = client.userid;
            client.emit('newid', client.userid);
            
            client.on('mouseaction', function (data) {
                
                if(data.dragging){
                    self.project.total += data.x;
                    client.emit('totalled', self.project.total);
                }
                // This line sends the event (broadcasts it)
                // to everyone except the originating client.
                if(head === client.userid) {
                    // differentiate head from other clients
                    client.broadcast.emit('moving', data);
                } else {
                    client.broadcast.emit('moving', data);
                }
            });
            client.emit('message', self.didconnect);

            client.on('load_data', function() {

                //self.myDocs = shelf.findAndModify({query:{name:"count"},update:{ $set: {value: project.total}}})
            })

            client.on('disconnect', function(){

                if(head === client.userid){
                    var killhead = true

                    var shelf = self.db.collection('shelf');
                    shelf.update({name:"count"},{$set: {value: self.project.total}});

                } else {
                    var killhead = false
                };

                self.index = self.client_list.indexOf(client.userid);
                if (self.index > -1){
                    self.client_list.splice(self.index, 1)
                };

                if(killhead){
                     head = self.client_list[0] || null;

                };
            });
        });
    };
};   

var zapp = new SampleApp();
zapp.initialize();
zapp.start();

