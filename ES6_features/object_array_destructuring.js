// const arr = [1,2,3,4,5]

// // let a = arr[0];
// // let b = arr[4];

// // console.log(a,b);

// //array destructuring 

// let [a,b] = arr
// console.log(a,b);

// //skipping the inbetween values
// console.log("===========skipping values===========");

// let[x,,,,y] = arr
// console.log(x,y);

// //rest operator
// console.log("===========rest operator===========");


// let [p,...q] = arr
// console.log(p,q);


// //object destructuring

let person = {
    fname:"pradeep",
    lname: "c r",
    address : "India"
}

// let firstname = person.fname
// let location = person.address
// console.log(firstname,location);

// let{fname,address} = person
// console.log(fname,address);


// /renaming the property
let{fname:firstName, address:location} = person
console.log(firstName,location);

