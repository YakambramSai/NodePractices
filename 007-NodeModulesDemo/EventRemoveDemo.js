var emitter = require('events').EventEmitter;
var em = new emitter();
 function listener1() {
                console.log('First subscriber of FirstEvent '  );
            }
//Subscribe FirstEvent
em.on('FirstEvent',listener1);
em.emit('FirstEvent');
em.emit('FirstEvent');
em.removeListener("FirstEvent",listener1);
em.emit('FirstEvent');