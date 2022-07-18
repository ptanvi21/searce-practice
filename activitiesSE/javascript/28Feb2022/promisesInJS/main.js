// const a = new Promise(function(resolve, reject) {
//     const randomNumber = Math.random()*100;
//     console.log("Random number is ", randomNumber);
//     if(randomNumber < 50){
//         (resolve('Number less than 50.'));
//     }
//     else{
//         reject("Number greater than 50");
//     }
// });
// a
    // // handle success
    // .then(message => {
    //     console.log("Resolved! " + message);
    // })
    // // handle failure
    // .catch(message => {
    //     console.log("Rejected! " + message);
    // })

// PROMISE CHANING
// Execute two or more related  operations, 
// where the next operation starts with the result 
// from the previous step. 

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3000);
// });
// p
//     .then((result) => {
//         console.log(result);    //10
//         return result * 2;
//     })
    // .then((result) => {
    //     console.log(result);    //20
    //     return result * 3;
    // })
    // .then((result) => {
    //     console.log(result);    //60
    //     return result * 4;
    // });

// WAITING FOR MULTIPLE CONCURRENT MESSAGES
// (Promise all)

// wait "milliseconds" ms, then resolve with "value"
// function resolve(value, milliseconds) {
//     return new Promise(resolve => setTimeout(() => resolve(value), milliseconds));
// }

// // wait "milliseconds" ms, then reject with "reason"
// function reject(reason, milliseconds) {
//     return new Promise((_, reject) => setTimeout(() => reject(reason), milliseconds));
// }

// Promise.all([
//     resolve(1, 3000),
//     resolve(2, 5000),
//     resolve(3, 7000)    
// ]).then(values => console.log(values)); // outputs "[1, 2, 3]" after 7 seconds.

// Promise.all([
//     resolve(1, 5000),
//     reject('Error!', 6000),
//     resolve(2, 7000)
// ]).then(values => console.log(values)) // does not output anything
// .catch(reason => console.log(reason)); // outputs "Error!" after 6 seconds.

// Promise.all([
//     resolve(1, 5000),
//     resolve(2, 6000),
//     { hello: 3 }
// ])
// .then(values => console.log(values)); // outputs "[1, 2, { hello: 3 }]" after 6 seconds

// REDUCE AN ARRAY TO CHAINED PROMISES 

// "then" reduction builds a chain that continues as
//  long as the chain experiences success

// [1, 3, 5, 7, 9].reduce((seq, n) => {
//     return seq.then(() => {
//         console.log(n);
//         return new Promise(res => setTimeout(res, 1000));
//     });
// }, Promise.resolve()).then(
//     () => console.log('done'),
//     (e) => console.log(e)
// );
// will log 1, 3, 5, 7, 9, 'done' in 1s intervals

// the "catch" reduction builds a chain that
//  continues as long as the chain experiences error. 

// var working_resource = 5; // one of the values from the source array
// [1, 3, 5, 7, 9].reduce((seq, n) => {
//     return seq.catch(() => {
//         console.log(n);
//         if(n === working_resource) { // 5 is working
//             return new Promise((resolve, reject) => setTimeout(() => resolve(n), 1000));
//         } else { // all other values are not working
//             return new Promise((resolve, reject) => setTimeout(reject, 1000));
//         }
//     });
// }, Promise.reject()).then(
//     (n) => console.log('success at: ' + n),
//     () => console.log('total failure')
// );
// will log 1, 3, 5, 'success at 5' at 1s intervals'

// var working_resource = 15; // value is not from the source array
// [1, 3, 5, 7, 9].reduce((seq, n) => {
//     return seq.catch(() => {
//         console.log(n);
//         if(n === working_resource) { // 15 is working
//             return new Promise((resolve, reject) => setTimeout(() => resolve(n), 1000));
//         } else { // all other values are not working
//             return new Promise((resolve, reject) => setTimeout(reject, 1000));
//         }
//     });
// }, Promise.reject()).then(
//     (n) => console.log('success at: ' + n),
//     () => console.log('total failure')
// );
// will log 1, 3, 5,7,9 'total failure' at 1s intervals

// WAITNG FOR THE FIRST OF MULTIPLE CONCURRENT PROMISES
// Promise.race() - returns a new Promise which 
// resolves or rejects as soon as the first of the
//  promises in the iterable has resolved or rejected. 

// wait "milliseconds" milliseconds, then resolve with "value"
function resolve(value, milliseconds) {
    return new Promise(resolve => setTimeout(() => resolve(value), milliseconds));
}

// wait "milliseconds" milliseconds, then reject with "reason"
function reject(reason, milliseconds) {
    return new Promise((_, reject) => setTimeout(() => reject(reason), milliseconds));
}

// Promise.race([
//     resolve(1, 5000),
//     resolve(2, 3000),
//     resolve(3, 1000)
// ])
// .then(value => console.log(value)); // outputs "3" after 1 second.

// Promise.race([
//     reject(new Error('Bad things!'), 1000),
//     resolve(2, 2000)
// ])
// .then(value => console.log(value)) // does not output anything
// .catch(error => console.log(error.message)); // outputs "bad things!" after 1 second

// Using the static Promise.resolve method
// returns a Promise object that is resolved with 
// a given value

// Promise.resolve('Success').then(function(value) {
//     console.log(value); // "Success"
//   }, function(value) {
//     // not called
//   });

// Resolving an array

// var p = Promise.resolve([1,2,3]);
// p.then(function(v) {
//   console.log(v[0]); // 1
// });

// promise.reject()
// returns a Promise object that is rejected with
//  a given reason.

// const p1 = new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         reject('Promise failed!');
//     }, 1000);
// });

// // handle the promise using catch() method if something goes wrong
// p1.catch(error => { 
//     console.log(error);
// });

// const promise = new Promise((resolve, reject) => {
//     reject(Error('Some error occurred'));
//   })
//   promise.catch(error => console.log(error.message));
//   promise.catch(error => console.log(error.message));

  const promise = new Promise((resolve, reject) => {
    reject(Error('Some Error Occurred'));
  })
  .catch(error => console.log(error))
  .then(error => console.log(error));