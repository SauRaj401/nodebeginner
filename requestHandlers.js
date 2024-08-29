function start() {
    console.log('Request handler start was called');
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000);
    return "Hello Start";
}

function upload() {
    console.log('Request handler upload was called');
    return "Hello Uplolllad";
}

//returning the functions liks above is bad approach because and run into problems.
//if one the request halndlers wants to make use of a non-blocking operation in the future means that the return value will not be available when the operation completes.
//This is because the request handlers are not supposed to return the value directly, but instead pass the value to the response object.
//for example:
// function start() {
//     console.log('Request handler start was called');
//     return "Hello Start";
// }
// function upload() {
//     console.log('Request handler upload was called');
//     return "Hello Uplolllad";
// }
//
// exports.start = start;
// exports.upload = upload;
//
// The above code will not work as expected when we start using non-blocking operations.
//non-blocking operations means that the operations will not be completed immediately, but instead will be completed in the future.
//example of non-blocking operations are reading a file, making a request to a database, etc.

//affects both the method start and upload... the sleep() function is a blocking operation that will prevent the request handlers from processing any other requests until it completes.
// function start() {
//     console.log('Request handler start was called');
//     function sleep(milliSeconds) {
//         var startTime = new Date().getTime();
//         while (new Date().getTime() < startTime + milliSeconds);
//     }
//     sleep(10000);
//     return "Hello Start";
// }
exports.start = start;
exports.upload = upload;
