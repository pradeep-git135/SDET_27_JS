
var employe = new Object();
console.log(employe);
employe.fname = "nitheesh"
employe.lname = "Gowda"
employe.adress = "India"

console.log(employe);

// to iterate over the object
for (var property in employe) {
    console.log(property +" : "+ employe[property]);
}