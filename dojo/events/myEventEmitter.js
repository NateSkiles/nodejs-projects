const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Adds the listener function to the end of the listeners array for the event named eventName.
// No checks are made to see if the listener has already been added.
myEmitter.on('foo', () => console.log('foo'));
// Multiple calls passing the same combination of eventName and listener will result in the listener
// being added, and called, multiple times.

// Adds the listener function to the beginning of the listeners array for the event named eventName.
myEmitter.prependListener('foo', () => console.log('bar'));

// Synchronously calls each of the listeners registered for the event named eventName, 
// in the order they were registered, passing the supplied arguments to each.
myEmitter.emit('foo');