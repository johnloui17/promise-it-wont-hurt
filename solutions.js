"use strict"

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

first().then(second).then(console.log)
