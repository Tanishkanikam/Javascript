
// //A promise in Javascript ia an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// function main(){

// }
// setTimeout(main , 3000); // call back the main function

// function wait(ms) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// async function demo() {
//   console.log("Timer starting...");
//   await wait(5000); // wait 5 seconds
//   console.log("5 seconds are up!");
// }
// demo();

// function promiseCallback(resolve){
//   setTimeout(resolve, 3000)
// }

// function main(){
//   console.log("main is called");
  
// }

// promiseCallback(main);

// function setTimeoutPromisified(){

// }

// function random(resolve){ // resolve is also a function
//   setTimeout( resolve, 3000); // when resolve function is called, only then jo bhi .then() me pass hota hai that gets called.. if resolve funtions is not called then after execution thing will return.

// }

// let p = new Promise(random) // supposed to return u something eventually

// // using the  eventual value returned by the promise
// function callback(){
//   console.log("promise succeded");
  
// }
// p.then(callback);
// // promise in a proxy for a value  not necessarily known when the proise is created.
// // the asynchronous method  returns a promise to suppky the value at some point to the future.
// // whenever you are calling a promise
// function readthefile(resolve) { // there must be some function and inside it there must be another randome function(or parameter or arguemnent) ..you can name it anything. here we are using 'resolve'

// }



// the real syntax / operation that we want to promisify

function readnewfile(resolve){
  setTimeout(resolve,5000)
}

function setTimeoutPromisified(){
return new Promise(readnewfile)
}

const p = setTimeoutPromisified();

function callback(){
  console.log("3 seconds have passed");
  
}

p.then(callback)

// function setTimeoutPromisified() {
//   return new Promise(doAsyncOp)
// }
// function callback(){
//   console.log("resolved");
  
// }

// function callback2(){
//   console.log("resolved2");
  
// }
// const p = setTimeoutPromisified();

// p.then(callback);
// p.then(callback2;)