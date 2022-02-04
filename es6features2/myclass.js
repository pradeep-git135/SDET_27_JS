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

    static display1() {
        console.log("display method");
    }
   static display2(){
       //this.nonStaticmethod()   //typeError: not a function
       A.display1()
        // console.log(obj_ref.a);
        // console.log(A.b);
        // console.log(msg);


    }
    nonStaticmethod(){
        A.display2()
        console.log("it is a non static method");
    }
}
var obj_a = new A();
// A.display2()

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
        super.display2()
        // super.nonStaticmethod()     //typeError : not a fxn
        console.log("this method is from class b");
    }
    anotherNonStaticmethod(){
        super.nonStaticmethod()
    }

}

// B.displayParentMethod()
module.exports = new B()
var obj_b = new B()
obj_b.anotherNonStaticmethod()

// B.displayParentMethod()



// obj_b.displayParentMethod("msg from b")

// console.log(obj_b.value1, obj_b.value2);

