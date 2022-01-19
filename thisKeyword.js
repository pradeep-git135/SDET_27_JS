console.log(this); //window

function thisDemo() {
    console.log(this);   //window
}
thisDemo()

var object1 = {
    fname:"jdnjw",
    lname:"dfqwe",
    intro: function () {
        console.log(this);  //object 
        var self = this  
        function inner() {
            console.log("==================");
            console.log(self);   //expected shuld point to object 
        }
        inner()
    }
}
object1.intro()