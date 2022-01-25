let myarr = [2,4,6,8]

let [x,...y] = myarr
console.log(y);

console.log("==================rest==================");   //array
function fun1(a,b,...c) {
    console.log(a,b,c);  //1 2 [ 3, 4, 5, 6 ]
}
fun1(1,2,3,4,5,6)
console.log("==================spread==================");  //elements 
function fun2(x,y,z,p) {
    console.log(x,y,z,p);
}
fun2(...myarr)