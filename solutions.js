

// ============================================================================
// Exercise 1 of 13: Warm up
// Basic setTimeout to understand async behavior
// ============================================================================

// const TimeOutFunction = () => {
//     setTimeout(() => {
//         console.log("TIMED OUT!")
//     }, 300);
// }
// TimeOutFunction()


// ============================================================================
// Exercise 2 of 13: Fulfill a Promise
// Create a promise and fulfill it with a value
// ============================================================================

// const FulfillPromise = () => {
//     var promise = new Promise(function (fulfill, reject) {
//             setTimeout(() => {
//                 fulfill("FULFILLED!")
//             }, 300);
//     }).then(results=>console.log(results))
// }
// FulfillPromise()


// ============================================================================
// Exercise 3 of 13: Reject a Promise
// Create a promise and reject it with an error
// ============================================================================

// const RejectPromise = () => {
//     var promise = new Promise(function (fulfill, reject) {
//         setTimeout(() => {
//             reject(new Error("REJECTED!"))
//         }, 300);
//     })
//     promise.then(null, function (error) {
//         console.log(error.message)
//     });
// }
// RejectPromise()


// ============================================================================
// Exercise 4 of 13: To reject or not to reject
// Prove that a promise can only be fulfilled OR rejected, not both
// ============================================================================

// const ProvePromise = () => {
//     var promise = new Promise(function(fulfill,reject){
//         fulfill("I FIRED");
//         reject(new Error("I DID NOT FIRE"))
//     })
//     function onReject(erorr){
//         console.log(erorr.message)
//     }
//     promise.then(console.log, onReject)
// }
// ProvePromise()


// ============================================================================
// Exercise 5 of 13: Always async
// Prove that promises are always resolved asynchronously
// ============================================================================

// const AsyncPromise = () => {
//     let promise = new Promise(function (fulfill, reject) {
//         fulfill("PROMISE VALUE");
//     }).then(console.log)
//     console.log("MAIN PROGRAM")
// }
// AsyncPromise()


// ============================================================================
// Exercise 6 of 13: Shortcuts
// Use Promise.resolve() and Promise.reject() shortcuts
// ============================================================================

// const Shortcuts = () => {
//     let promise = Promise.resolve("VALUE");
//     let promise1 = Promise.reject(new Error("Error"));
//     let promise2 = new Promise(function (fulfill, reject) {
//         reject(new Error("wow"));
//     })
//     promise2.catch(err=>console.log(err.message))
// }
// Shortcuts()


// ============================================================================
// Exercise 7 of 13: Promise after promise
// Chain promises using .then() - uses global first() and second() functions
// ============================================================================

// first().then(second).then(console.log)

// const attachTitle = (name) => {
//     return "DR. " + name;


// }
// Promise.resolve("MANHATTAN").then(attachTitle).then(console.log)




// const parsePromised = (jsonData) => {

//     return new Promise(function (fulfill, reject) {

//         try {
//             var result = JSON.parse(jsonData);
//             fulfill(result);

//         }
//         catch (error) {
//             reject(error.message);

//         }
//     })
// }

// parsePromised(process.argv[2]).then(null, console.log)

// const AlwaysThrow = () => {
//     throw new Error("OH NOES");

// }
// const iterate = (number) => {
//     console.log(number);
//     return number + 1

// }
// Promise.resolve(1).then(iterate).then(iterate).then(iterate).then().then(iterate).then(iterate).then(AlwaysThrow).then(iterate).then(iterate).then(iterate).then(null, function (error) {
//     console.log(error.message);
// })

// const all = (promise1, promise2) => {

//     return new Promise(function (fulfill, reject) {
//         let counter = 0;
//         let results = [];

//         promise1.then(function (value) {
//             results[0] = value;
//             counter++;
//             if (counter == 2) {
//                 fulfill(results)
//             }
//         })
//         promise2.then(function (value) {
//             results[1] = value;
//             counter++;
//             if (counter == 2) {
//                 fulfill(results)
//             }
//         })
//     })

// }
// all(getPromise1(), getPromise2()).then(console.log);


// ============================================================================
// Exercise 12 of 13: Fetch JSON
// Fetch JSON over HTTP using q-io/http
// ============================================================================

// var qhttp = require('q-io/http');

// qhttp.read("http://localhost:1337/")
//     .then(JSON.parse)
//     .then(console.log)
//     .done();


// ============================================================================
// Exercise 13 of 13: Do some work
// Chain HTTP requests - get user ID from session cache, then fetch user data
// ============================================================================

var qhttp = require('q-io/http');

// Step 1: Get user ID from session cache (port 7000)
// Step 2: Use ID to fetch user object from database (port 7001)
// Step 3: Parse and log the user object
qhttp.read("http://localhost:7000/")
    .then(function (id) {
        return qhttp.read("http://localhost:7001/" + id);
    })
    .then(function (data) {
        console.log(JSON.parse(data));
    })
    .done();
