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
// var http = require('http');
// var url = require('url');

// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for ' + pathname + ' received.');

  

//     response.writeHead(200, { 'Content-Type': 'text/plain' });

//     var content = route(handle, pathname);
//     response.write(content);
    
//     response.end();
//   }

//   http.createServer(onRequest).listen(8000);
//   console.log('Server has started.');
// }

// exports.start = start;


//before the approach was request handelr -> router -> server
//new appraoch is instead of bring the content to the server, we will bring the server to the content.

// var http = require('http');
// var url = require('url');

// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log('Request for ' + pathname + ' received.');

//     route(handle, pathname, response);
//   }

//   http.createServer(onRequest).listen(8000);
//   console.log('Server has started.');
// }

// exports.start = start;


//working wit POST data and need to parse the data that is sent to the server
var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var postData = '';
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');

    request.setEncoding('utf8');

    request.addListener('data', function(postDataChunk) {
      postData += postDataChunk;
      console.log('Received POST data chunk ' + postDataChunk + '.');
    });

    request.addListener('end', function() {
      route(handle, pathname, response, postData);
    });
  }

  http.createServer(onRequest).listen(8000);
  console.log('Server has started.');
}

exports.start = start;

//in the above code we have did three things:
//1. We set the encoding of the received data to UTF-8.
//2. We listened to the 'data' event, accumulating all the received data to the postData variable.
//3. We listened to the 'end' event, so that when all the data has been received, we call the route() function, passing both the handle and the postData to it.