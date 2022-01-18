// var values = new Array("avlue1", "value2", 20, 200, undefined, null)  //declaration and initialization
// console.log("the length of the array is "+values.length); 

// // console.log(values);

// var result = new Array();  //declared
// console.log("the length of the array is "+result.length); 
// result[0] = "fname";   //initialization
// result[1] = "lname"
// result[2] = "address";
// console.log("the length of the array is "+result.length); 


// // console.log(result);

// var numberArray = new Array(5,10,15,20)
// console.log(numberArray);

// var numberArray2 = new Array(2)
// console.log(numberArray2);     //[2]

// var singleElemnetArray = [2]
// console.log(singleElemnetArray);

var intArray = [10,20,,30,,40,,50,null]

// intArray.forEach((element,index,ref)=>{
//     console.log(element,index,ref);
    
// });
console.log("foreach====================foreach");
//for loop   return the index of an array
for (var index = 0; index < intArray.length; index++) {
    console.log(index);
    console.log(intArray[index]); 
}
console.log("=============================================");
//for of  return the element of an array
for (var element of intArray) {
    console.log(element);
    // console.log(intArray[element]); 
}
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

//for in loop returns the index of the given array
for (var element in intArray) {
    console.log(intArray[element]);
}