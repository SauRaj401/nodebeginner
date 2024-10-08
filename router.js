// function route(pathname){
//     console.log('About to route a request for ' + pathname);
// }

// exports.route = route;

//(same) handling the route()
// function route(handle, pathname) {
//     console.log('About to route a request for ' + pathname);
//     if (typeof handle[pathname] === 'function') {
//         return handle[pathname]();
//     } else {
//         console.log('No request handler found for ' + pathname);
//         return "404 Not found";
//     }
// }

// exports.route = route;

//handling the route with the response object
// function route(handle, pathname, response) {
//     console.log('About to route a request for ' + pathname);
//     if (typeof handle[pathname] === 'function') {
//         return handle[pathname](response);
//     } else {
//         console.log('No request handler found for ' + pathname);
//         response.writeHead(404, { 'Content-Type': 'text/plain' });
//         response.write('404 Not found');
//         response.end();
//     }
// }

// exports.route = route;


//to show the POST data in /upload
function route(handle, pathname, response, postData) {
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log('No request handler found for ' + pathname);
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('404 Not found');
        response.end();
    }
}

exports.route = route;