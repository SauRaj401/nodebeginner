// var server = require('./server');
// var router = require('./router');
// var requestHandlers = require('./requestHandlers');


// server.start(router.route);


//(same) working  with putting the object together in the index.js
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');


//defining the object that will be used to handle the request
var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);

