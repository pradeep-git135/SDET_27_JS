var person1 = {
    fname:"adarsh",
    lname:"kumar",
    address:"europe",
    fulname: function () {
        console.log(this.fname+" "+this.lname);
    }
}
// person1.fulname()

var person2 = {
    fname:"nitheesh",
    lname:"Gowda",
    address:"USA",
}
function brief(a,b,c) {
    console.log("hello all myself "+this.fname+" and i a'm from "+this.address);
    console.log(a,b,c);
}
// brief.call(person1)
brief.call(person2, 1, true, "info")


// person1.fulname.call(person2);  // function barrowing
