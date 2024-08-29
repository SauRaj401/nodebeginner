// // var http = require('http');
// // // var fs = require('fs');

// // function onRequest(request, response) {
// //   response.writeHead(200, { 'Content-Type': 'text/html' });
// //   response.write('<h1>Hello World</h1>');
// //   response.end();
// // }

// // http.createServer(onRequest).listen(8000);
// // console.log('Server is now running...');



// //working on creating the server and used the http module to create the server and listen to the port 8000

// // var http = require('http');

// // function start() {
// //   function onRequest(request, response) {
// //     console.log('Request received.');
// //     response.writeHead(200, { 'Content-Type': 'text/plain' });
// //     response.write('Hello World');
// //     response.end();
// //   }

// //   http.createServer(onRequest).listen(8000);
// //   console.log('Server has started.');
// // }

// // exports.start = start;


// //creating the server and use the route too
// var http = require('http');
// var url = require('url');

// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for ' + pathname + ' received.');

//     route(pathname);

//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write('Hello World');
//     response.end();
//   }

//   http.createServer(onRequest).listen(8000);
//   console.log('Server has started.');
// }

// function start(){
//     console.log('Request handler start was called');
// }

// function upload(){
//     console.log('Request handler upload was called');
// }


// exports.start = start;
// exports.upload = upload;


// (same) workign with the route , request handlers and the server
var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');

  

    response.writeHead(200, { 'Content-Type': 'text/plain' });

    var content = route(handle, pathname);
    response.write(content);
    
    response.end();
  }

  http.createServer(onRequest).listen(8000);
  console.log('Server has started.');
}

exports.start = start;

