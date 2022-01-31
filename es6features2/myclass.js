class A {
    // var , let , const, not valid

    constructor(value1){
        this.value1 = value1
    }

    a = 10;
    static b = 20

    //private veriable
    #data = "cofidential";

    get data(){
        return this.#data
    }
    set newdata(newValue){
        this.#data = newValue
    }

    static display() {
        console.log("display method");
    }
   static display(obj_ref, msg){
        console.log(obj_ref.a);
        console.log(A.b);
        console.log(msg);
    }
}
var obj_a = new A();

// console.log(obj_a.value1);

//static for methods
// obj_a.display()   //TypeError: obj_a.display is not a function
// A.display(obj_a,"info")

//static  for veriables
// console.log(obj_a.b);  //undefined
// console.log(A.b);  //20


//overloading   not possible
// obj_a.display("info")

//encapsulation
// console.log(obj_a.data);
// console.log("after modify");
// obj_a.newdata = "new confidential_data"
// console.log(obj_a.data);

// console.log(obj_a.data);



// console.log(obj_a.#data);  //SyntaxError: Private field '#data' must be declared in an enclosing class

// console.log(obj_a.a);
// obj_a.display()

class B extends A {

    z = "data"
    
   static displayParentMethod(){
        //super.display(obj_b,"info")
        console.log("this method is from class b");
    }
}
module.exports = new B()
// var obj_b = new B("info1", "info2")

// B.displayParentMethod()



// obj_b.displayParentMethod("msg from b")

// console.log(obj_b.value1, obj_b.value2);

