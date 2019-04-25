//Event Emitters 

var events = require('events');
var eventEmitter = new events.EventEmitter();
//Assign the eventhandler to an event:
eventEmitter.on('myevent1', function() {
                  console.log('myevent1 was triggered!');
                });
eventEmitter.on('myevent2', function() {
                  console.log('myevent2 was triggered!');
                });
eventEmitter.on('myevent3', function() {
                  console.log('myevent3 was triggered!');
                });
//Fire the  event:
eventEmitter.emit('myevent1');
eventEmitter.emit('myevent2');
eventEmitter.emit('myevent3');




// Asychronous event examples
var events = require('events');
var eventEmitter = new events.EventEmitter();
//Callbacks
//Assign the eventhandler to an event:
eventEmitter.on('myevent1', function() {
                  console.log('myevent1 was triggered!');
                });
eventEmitter.on('myevent2', function() {
                  console.log('myevent2 was triggered!');
                });
eventEmitter.on('myevent3', function() {
                  console.log('myevent3 was triggered!');
                });
//Fire the  event:
setTimeout(function(){eventEmitter.emit('myevent1');},Math.round(Math.random()*5000));
setTimeout(function(){eventEmitter.emit('myevent2');},Math.round(Math.random()*5000));
setTimeout(function(){eventEmitter.emit('myevent3');},Math.round(Math.random()*5000));


//subscribe an event there is no difference betwee addListener and on
var emitter = require('events').EventEmitter;
var em = new emitter();
//Subscribe FirstEvent
em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});
//Subscribe SecondEvent
em.on('SecondEvent', function (data) {
    console.log('Second subscriber: ' + data);
});

//Subscribe FirstEvent
em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});
//Subscribe SecondEvent
em.on('SecondEvent', function (data) {
    console.log('Second subscriber: ' + data);
});
// Raising FirstEvent
em.emit('SecondEvent', 'This is my second Node.js event '+
                            'emitter example.');
// Raising SecondEvent
em.emit('FirstEvent', 'This is my first Node.js event'+ 
                        'emitter example.');
						
						
						
var emitter = require('events').EventEmitter;
var em = new emitter();
//Subscribe FirstEvent
em.addListener('FirstEvent', function () {
    console.log('First subscriber of FirstEvent '  );
});
em.addListener('FirstEvent', function () {
    console.log('Second subscriber of FirstEvent '  );
});
em.addListener('FirstEvent', function () {
    console.log('third subscriber of FirstEvent '  );
});
//Subscribe SecondEvent
// Raising SecondEvent
em.emit('FirstEvent');



var emitter = require('events').EventEmitter;
var em = new emitter();
//Subscribe FirstEvent
em.on('FirstEvent', function () {
    console.log('First subscriber of FirstEvent '  );
});
em.on('FirstEvent', function () {
    console.log('Second subscriber of FirstEvent '  );
});
em.on('FirstEvent', function () {
    console.log('third subscriber of FirstEvent '  );
});
//Subscribe SecondEvent
// Raising SecondEvent
em.emit('FirstEvent');

// addListener once
// em.once

var emitter = require('events').EventEmitter;
var em = new emitter();
//Subscribe FirstEvent
em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});
//Subscribe FirstEvent
em.once('FirstEvent', function (data) {
    console.log('Second subscriber: ' + data);
});
console.log('Did you like event Emitter class?!!');
// Raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event '+
                            'emitter example.');
// Raising FirstEvent again
em.emit('FirstEvent', 'This is my another Node.js event'+ 
                        'emitter example.');
						


//remove listeners onces.
//em.removeAllListeners

var emitter = require('events').EventEmitter;
var em = new emitter();
//Subscribe FirstEvent
em.on('FirstEvent', function () {
    console.log('First subscriber of FirstEvent '  );
});

//Subscribe SecondEvent
// Raising SecondEvent
em.emit('FirstEvent');
em.removeAllListeners("FirstEvent")
em.emit('FirstEvent');


						
						