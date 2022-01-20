var employe1 = new Object();
employe1.fname = "nitheesh"
employe1.lname = "Gowda"
employe1.adress = "India"

var employe2 = {};

employe2.__proto__ = employe1

console.log(employe2);

