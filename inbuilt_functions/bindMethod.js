var person1 = {
    fname:"adarsh",
    lname:"kumar",
    address:"europe",
    fulname: function () {
        console.log(this.fname+" "+this.lname);
    }
}
var person2 = {
    fname:"nitheesh",
    lname:"Gowda",
    address:"USA",
}
function brief(a,b,c) {
    console.log("hello all myself "+this.fname+" and i a'm from "+this.address);
    console.log(a,b,c);
}
var result = brief.bind(person2,"this","is","bind()")
// result()

var fulname = person1.fulname.bind(person2)
// fulname()

function sum(a,b) {
    return a+b
}
// console.log(sum(3, 5)); 

var addition = sum.bind(this,5)

console.log(addition(3));        //function currying