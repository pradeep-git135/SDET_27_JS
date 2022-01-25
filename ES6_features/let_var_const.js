// console.log(a);  //undefined
// var a;

// console.log(b);  //ReferenceError: b is not defined

// console.log(x);    //ReferenceError: Cannot access 'x' before initialization
// let x = 10;
// // x = 20;
// let x = "20"   //SyntaxError: Identifier 'x' has already been declared
// console.log(x);


// console.log(y);  //SyntaxError: Missing initializer in const declaration
// const y;


// console.log(p); //ReferenceError: Cannot access 'y' before initialization
// const p = "message"
// p = "jhbdchbv"   //TypeError: Assignment to constant variable.

// let x
// {
//     var a;
//     let x;
//     // const z
//     x = "info"
//     console.log(x); //undefined
//     // console.log(z);  //SyntaxError: Missing initializer in const declaration
// }
// a = 5
// x = "message"
// console.log(a);
// console.log(x);                 //ReferenceError: x is not defined


// for (var index = 0; index < 5; index++) {
//     console.log(index);
// }
// console.log("===================================");
// console.log(index);

// for (let index = 0; index < 5; index++) {
//     console.log(index);
// }
// console.log("===================================");
// console.log(index);   //ReferenceError: index is not defined


// for (const index = 0; index < 5; index++) {          //TypeError: Assignment to constant variable
//     console.log(index);
// }
// console.log("===================================");
// console.log(index);

// console.log(a);

var a = 5;

let x;
console.log(x);
function fun1() {
    let x= 100
}
fun1()
console.log(this.a);