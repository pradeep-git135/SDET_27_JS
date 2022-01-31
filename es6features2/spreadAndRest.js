let arr1 = [10, 20, 30, 40]

let [x,,,y] = arr1  //destructuring

let [a,...b] = arr1
console.log(a,b);

function rest(a,b,...c) {
    console.log(a,b,c);
}
rest(1,2,3,4,5,6,7)

console.log("=====================");

function spread(x,y,z) {
    console.log(x,y,z);
}
spread(...arr1)