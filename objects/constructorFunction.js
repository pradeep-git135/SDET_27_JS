//create object by using constructor function

function Car(make,model,spec,color) {
    this.make = make
    this.model = model
    this.spec = spec
    this.color = color
}

var c1 = new Car("Maruti Suzuki","800",["800cc","2wd", "frontEngine", "50BHP"],"white");
// console.log(c1);
var c2 = new Car("Tata", "harrier", {cc:2.5, driveType: "4wd", BHP:"100"}, "Black")
console.log("===============================");
// console.log(c2);
console.log(c2.fuelCapacity); 

//prototype keyword, it is property each and every javascript object has that property but it is accessed only 
// the object that had been created from the constructor function
// using prototype_property one can modify the constuctor function

Car.prototype.fuelCapacity = "30l"
console.log(c2.fuelCapacity); 
console.log(c2);