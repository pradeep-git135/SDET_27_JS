var employe = {
    id : "tyc01",  //string
   Name : "Nitheesha",
    Address:"INDIA",
    email: "nitheesha.gowda.testyantra.com",
    pay: 1234,  //number
    experience:5,
    skillset:["java", "selenium", "api"], //array
    introduction: function (){
        console.log("hello all my name is "+this.Name);  //function
    },
    biodata:{     //object
        id : "tyc01",
        Name : "Nitheesha",
        Address:"INDIA",
        email: "nitheesha.gowda.testyantra.com",
        pay: 1234,
        experience:5,
        skillset:["java", "selenium", "api"],
        introduction: function (){
            console.log("hello all my name is "+this.Name);
        }
    }
}
var data = employe.biodata
console.log(data.email);
// console.log(employe.biodata);
// by using .(dot) notation
// console.log(employe.email);
// console.log(employe.Address);

// console.log("using bracket notation");

// //by using [](bracket) notation
// console.log(employe["Name"]);
// console.log(employe["id"]);

// console.log("using for in loop");

// for (var property in employe) {
//     console.log(property);
//     console.log(employe[property]);
// }

// console.log("+++++++++++++++++++++++++++++++++++++");

// employe.introduction()
// // for (const key in object) {
// //     if (Object.hasOwnProperty.call(object, key)) {
// //         const element = object[key];
        
// //     }
// // }

// for (let index = 0; index < employe.length; index++) {
//     console.log(employe[index]);
    
// }