// // console.log(a);  //undefined
// // var a = 10;

// // var b = 20;


// // let a1 = 100;

// // const c1 = 200;

// //block scop
// let a1 = 400
// var a1 = 300
// var a = 25;
// {
//     var a = 10;
//     let a1 = 100;
//     const a2 = 200;
// }
// console.log(a);

// for (let index = 0; index < 3; index++) {
//     console.log(index);   //0, 1, 2
    
// }
// console.log(index);   //ReferenceError: index not defined

// for (const index = 0; index < 3; index++) {
//     console.log(index);    //TypeError: Assignment to constant variable.
    
// }


// a1()

// function a1() {
//     console.log("i am a1function");
// }



// var b1 = function () {
//     console.log("i am b1 function");
// }

// b1()

var a = 20;
let b = 30;

function a1() {
    console.log(this.a);
    console.log(window.a);
    var a = 10
    console.log(a);
}
a1()
console.log(a);  //Resference erro