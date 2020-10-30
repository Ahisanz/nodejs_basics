const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');

// console.log(uuidv4())

class Logger extends EventEmitter{
    log(msg) {
        // call event
        this.emit('message', { id: uuidv4(), msg })
    }
}

module.exports = Logger;

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('called listener:',  data));

// logger.log('Hello world');