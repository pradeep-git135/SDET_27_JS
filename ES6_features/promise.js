
// var result_promise = new Promise((resolve,reject)=>{
//     //when to invoke resolve fxn  //when to invoke reject fxn
//     var a = "promise"
//     let b = "promise23"
//     if (a==b) {
//         resolve("a and b are equal")
//     }else{
//         reject("a and b are not equal")
//     }
// })



// result_promise.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})


//    async  function fun1() {
//          console.log(1);
//          setTimeout(() => {
//              console.log(2);
//          }, 300);
//          console.log(3);
//      }
//      fun1()

// async function synchronize() {
//     console.log("downloaded started");
//     var waiting = new Promise((resolve, reject)=>{setTimeout(() => {
//         resolve("download in progress....")
//     }, 3000);})
//    await waiting.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
//       console.log("download completed");
// }
// synchronize()

//promise chaining

function sample1() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("this promise is returning from sample1")
        }, 10000);
    })
}
function sample2() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("this promise is returning from sample2")
        }, 2000);
    })
}
function sample3() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("this promise is returning from sample3")
        }, 3000);
    })
}

//callback hell
// sample1().then((msg)=>{
//     console.log(msg);
//     return sample2()
// }).catch().then((msg)=>{console.log(msg);
// return sample3()}).catch().then((msg)=>{console.log(msg);
// console.log("all the promises are resolved successfully");}).catch()

//promise chaining
Promise.all([sample1(),sample2(),sample3()]).then((msg)=>{console.log(msg);console.log("all the promises got resolved");}).catch()


//promise racing
// Promise.race([sample1(),sample2(),sample3()]).then((msg)=>{console.log(msg);}).catch()