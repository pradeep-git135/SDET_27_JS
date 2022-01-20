var employe = new Object();
// console.log(employe);
employe.fname = "nitheesh"
employe.lname = "Gowda"
employe.adress = "India"

// console.log(employe);

// for (var property of employe) {
//     console.log(employe[property]);     //typeError
// }

var employe2 = Object.create(employe); //create an empty object with the prototype of the given object
employe2.skillset = ["java", "selenium", "api"];
// console.log(employe2);

for (var property in employe) {
    console.log(property +" : "+employe[property]);
}
console.log("=================================");
for (var property in employe2) {
    console.log(property +" : "+employe2[property]);
}
console.log("===============hasOwnProperty==================");
for (var property in employe2) {
    if (employe2.hasOwnProperty.call(employe2, property)) {
        console.log(property +" : "+employe2[property]);
        
    }
}


// for (var property in employ2) {
//     // console.log(employ2[property]);

//     if (employ2.hasOwnProperty.call(employ2, property)) {
//         console.log(employ2[property]);
        
//     }
// }