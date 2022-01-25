class A {
    constructor(prop1){
        this.prop1 = prop1
    }

    static x = 100;
    static x = 200

    static displaystatic(){
        // console.log(x);  //ReferenceError: x is not defined
        console.log(this.x);
    }
    static displaystatic(obj_ref){
        obj_ref.nonstatic_2()    //TypeError: this.nonstatic_2 is not a function
        console.log("overrided method");
    }

    nonstatic(){
        A.displaystatic()
    }

    nonstatic_2(){
        console.log("i am a non static method");
    }
    // constructor(prop1,prop2){
    //     this.prop1 = prop1          //SyntaxError: A class may only have one constructor
    //     this.prop2 = prop2
    // }
     a = 10;  //do not use keywords inside class to declare a veriable
    #data = "confidential"   //declaring private variable [scope is limited inside the class]

    get getData(){   //readable access
        return this.#data
    }
    set setData(newValue){     //writable access
        this.#data = newValue
    }
      fun1() {                //do not use function keywords inside class to declare a function
         console.log("inside fun1");
     }

    //  fun1(msg){
    //      console.log(msg);
    //  }
     fun1(){
         console.log("this is a overrided method");
     }
     
}
// var obj_a = new A("value")
// obj_a.nonstatic()

// A.displaystatic(obj_a)

// obj_a.displaystatic()   //TypeError: obj_a.displaystatic is not a function


// console.log(obj_a.fun1());

// const obj_a = new A("value1")


// obj_a.fun1("no concept of method overloading")


// obj_a.setData()      //TypeError: obj_a.setData is not a function
// obj_a.setData = "binary_data"
// obj_a.getData()     // //TypeError: obj_a.setData is not a function
// console.log(obj_a.getData);

// console.log(obj_a.accessprivateData());

// obj_a = new A()

// console.log(obj_a.#data);  //syntaxError: Private field '#data' must be declared in an enclosing class

// console.log(obj_a.a);
// obj_a.fun1()

module.exports =   class B extends A {
    
    constructor(prop1, prop2){
        super(prop1)     //constructor chaining    this.prop1 = prop1
        this.prop2 = prop2
    }

    displayParentMethod(){
        super.fun1()
        console.log("displaying parent method");
    }

    fun1(){
        console.log("this is from class B");
    }
}

// obj_b = new B("value1", "value2")
// obj_b.displayParentMethod()
// obj_b.fun1()