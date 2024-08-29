// function route(pathname){
//     console.log('About to route a request for ' + pathname);
// }

// exports.route = route;

//(same) handling the route()
function route(handle, pathname) {
    console.log('About to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log('No request handler found for ' + pathname);
        return "404 Not found";
    }
}

exports.route = route;
