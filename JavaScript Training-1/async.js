// // a promise
// let promise = new Promise(function (resolve, reject) {
//     console.log("start");
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
   
// });
// console.log("hello")

// // async function
// async function asyncFunc() {
//     try {
//         // wait until the promise resolves 
//         let result = await promise; 

//         console.log(result+ "check");
//     }   
//     catch(error) {
//         console.log(error);
//     }
// }

// // calling the async function
// asyncFunc(); // Promise resolved


// let promise1="hello";
// let promise2="hema";
// let promise3="pirya";

// async function asyncFunc() {
//     let result1 = await promise1;
//     let result2 = await promise2;
//     let result3 = await promise3;

//     console.log(result1);
//     console.log(result2);
//     console.log(result3);
// }

// asyncFunc();


// let promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 2000); // Delay of 2 seconds (adjust as needed)
//   });
//   let promise2 = Promise.resolve("hema");
//   let promise3 = Promise.resolve("priya");
  
//   async function asyncFunc() {
//     let result1 = await promise1;
//     let result2 = await promise2;
//     let result3 = await promise3;
  
//     console.log(result1);
//     console.log(result2);
//     console.log(result3);
//   }
  
//   asyncFunc();



// let promise1 = Promise.resolve("hello");
// let promise2 = Promise.resolve("hema");
// let promise3 = Promise.resolve("priya");

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function asyncFunc() {
//   await delay(2000); // Delay of 2 seconds (adjust as needed)
  
//   let result1 = await promise1;
//   let result2 = await promise2;
//   let result3 = await promise3;

//   console.log(result1);
//   console.log(result2);
//   console.log(result3);
// }

// asyncFunc();
// let promise1= Promise.resolve("hello")
// let promise2 = Promise.resolve("hema");
// let promise3 = Promise.resolve("priya");

// function delay(ms) {
//   return new promise1((resolve) => setTimeout(resolve, ms));
// }

// async function asyncFunc() {
//   let result1 = await (async () => {
//     await delay(2000); // Delay of 2 seconds for promise1
//     return promise1;
//   })();
  
//   let result2 = await promise2;
//   let result3 = await promise3;

//   console.log(result1);
//   console.log(result2);
//   console.log(result3);
// }

// asyncFunc();



// let promise1 = Promise.resolve("hello");
// let promise2 = Promise.resolve("hema");
// let promise3 = Promise.resolve("priya");

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
  
// }

// async function asyncFunc() {
//   await Promise.all([delay(2000), promise1]);
//   let result1;
//   console.log(result1);

// }
// let result2 = await promise2;
// let result3 = await promise3;
// console.log(result2);
// console.log(result3);

// asyncFunc();



  