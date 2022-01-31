let importedClass = require("./myclass")

class External   {

    external(){
        // importedClass.displayParentMethod()

        console.log(importedClass.z);
    }
}
var obj_external = new External()
obj_external.external()