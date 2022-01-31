// //syntax 

const { async } = require("rxjs");



// var promise = new Promise( function (resolve, reject) {
//     let x = "equal"
//     let y = "equal"
//     if (x === y) {
//         resolve("x and y are equal")
//     }else{
//         reject("x and y are not equal")
//     }
//     //when to invoke resolve()
//     //when to invoke reject()
// })

// promise.then(function (msg) {
//     console.log(msg);
// }).catch(function (msg) {
//     console.log(msg);
// })


// async function synchronus() {
//     console.log(1);
//     await new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             resolve("2")
//         },3000)
//     }).then( (info) => {console.log(info);}).catch((info) => {console.log(info);})
//     console.log(3);
// }
// synchronus()

// promise chaining

function promise1() {
    return new Promise((resolve, reject) => {setTimeout(() => {
        resolve("promise 1 got resolved")
    }, 3000);})
}
function promise2() {
    return new Promise((resolve, reject) => {setTimeout(() => {
        resolve("promise 2 got resolved")
    },  000);})
}

function promise3() {
    return new Promise((resolve, reject) => {setTimeout(() => {
        resolve("promise 3 got resolved")
    }, 1000);})
}

// promise1().then( (info) => {
//     console.log(info);
//     return promise2()}).catch().then((info) => {console.log(info);
//     return promise3()}).catch().then((info) => {console.log(info);console.log("all promises got resolved");}).catch()

//promise chaining
Promise.all([promise1(), promise2(), promise3()]).then((info) => {console.log(info);console.log("all promises got resolved");})


//promise racing
// Promise.race([promise1(), promise2(), promise3()]).then((info) => {console.log(info);}) 