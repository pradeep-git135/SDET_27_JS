
var importClass = require("./demo_class")
var other_inst = require("./oneMoreClass")
class External_demo extends importClass {
    externlMethod(){
        // super.displayParentMethod()
        console.log("external method");
        other_inst.othermethod()
    }
}
inst_external = new External_demo()
inst_external.externlMethod()