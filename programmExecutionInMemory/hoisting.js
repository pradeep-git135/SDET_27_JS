const { builtinModules } = require("module");

console.log(a);  // undefined  //ReferenceError: a is not defined
var a
a=10;
console.log(a); //10

//window == this

console.log(this);

// window is not a javascript/nodejs  object but, window is an instense of browser


console.log(display);
display()
function display(){
    var a = 100;
    console.log("this is a local variable "+a);
    console.log("this is a global variable "+window.a);

}

