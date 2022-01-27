var b = 700;
let a = 10;

// outer()
// function outer() {
    
//     function inner() {
//         console.log(b);
//         console.log(a);
//     }
//     inner()
// }

{
    console.log(a);
    let n = "name"
    {
        console.log(b);
        let m = "lname"
        console.log(n);
    }
}
// console.log(n); // in global levell

{
    //block
}