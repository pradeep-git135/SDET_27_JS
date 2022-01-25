
var arr = [50,-20,40,-30,-10]

// console.log(arr.reduce((positiveArr,element)=>{
//     if (element>0) {
//         positiveArr.push(element)
//     }
//     return positiveArr
// },[]));

// var info = [{fname:"pradeep", lname:"cr", age:25},{fname:"nitheesh", lname:"Gowda", age:24},{fname:"adarsh", lname:"m", age:24},{fname:"prakash", lname:"B K", age:27}]
// console.log(info.reduce((nameArr,element)=>{
//     if (element.age>24) {
//         nameArr.push(""+element.fname+" "+element.lname)
//     }
//     return nameArr
// },[]));        //[ 'pradeep cr', 'prakash B K' ]


// console.log(info.reduce((refobj, element)=>{
//     if (!(refobj[element.age])) {
//         refobj[element.age] = 1
//     }else{
//         refobj[element.age]++
//     }
//     return refobj
// },{}));
// console.log(info.filter((element)=>{
//     return element.age==24
// }));
// console.log(arr.slice(2));

// console.log(arr.splice(1,2,[2,4]));
// console.log(arr);

// console.log(arr.reverse());
// console.log(arr instanceof Array);
// array inbuilt methods:

// toString():eturns a string representation of an array
// console.log(typeof(arr.toString()))


// console.log(arr);
// arr.reduse():Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// console.log(arr.reduce((a,b,currentindex)=>{
//     console.log(a,b,currentindex);
//     return a-b
// }));
// console.log("===============================");
// console.log(arr.reduceRight((a,b,currentindex)=>{
//     console.log(a,b,currentindex);
//     return a-b
// })
// );


// console.log(arr.filter((element)=>{
//     return element>20
// }).map((item)=>{
//     return item*1.5
// }));
// arr.filter(): Returns the elements of an array that meet the condition specified in a callback function.
// console.log(arr.filter((element)=>{
//     return element>20
// })
// );



// arr.map(callbackfn):Calls a defined callback function on each element of an array, and returns an array that contains the results.
// console.log(arr.map((element)=>{
//     return element*element
// }));

// forEach(): Performs the specified action for each element in an array.
// arr.forEach(function (element) {
//     console.log(element*element);
// })
// console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
// arr.forEach( (element, index, xyz)=>{
//     console.log(element,index,xyz);
// } )

// console.log(arr.sort());
//sort()
// console.log(arr.sort( (a,b) => {
//     return b-a
// }));


//shift:Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log("removing first element by using shift() "+arr.shift());
// console.log("after shifting "+arr);
// console.log("removing first element by using shift() "+arr.shift());
// console.log("after shifting "+arr);
// console.log("removing first element by using shift() "+arr.shift());
// console.log("after shifting "+arr);
// console.log("removing first element by using shift() "+arr.shift());
// console.log("after shifting "+arr);
// console.log("removing first element by using shift() "+arr.shift());
// console.log("after shifting "+arr);
// console.log("removing first element by using shift() "+arr.shift());
// console.log("after shifting "+arr);


// pop: Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log("the pop value = "+arr.pop()); 
// console.log("after pop : "+arr);
// console.log("the pop value = "+arr.pop()); 
// console.log("after pop : "+arr);
// console.log("the pop value = "+arr.pop()); 
// console.log("after pop : "+arr);
// console.log("the pop value = "+arr.pop()); 
// console.log("after pop : "+arr);
// console.log("the pop value = "+arr.pop()); 
// console.log("after pop : "+arr);
// console.log("the pop value = "+arr.pop()); 
// console.log("after pop : "+arr);
// arr.push(100,200)
// console.log("adding by push "+arr);
// push :Appends new elements to the end of an array, and returns the new length of the array.
// console.log(arr.push(100,90,80));



//unshift(): Inserts new elements at the start of an array, and returns the new length of the array.
// console.log("new length of of the array after unshift "+arr.unshift(1,2,3,4,5)); 
// console.log("new array after unshift "+arr); 



// console.log(arr[0] instanceof Object); 

// console.log(arr.length); //5


    // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// var newarr = [60,70,80]
// console.log(arr.concat(newarr,[1,2,3]));
// console.log(arr);
// var comined_arr = arr.concat(newarr)
// console.log(comined_arr);

// array.every() :Determines whether all the members of an array satisfy the specified test.

// Determines whether all the members of an array satisfy the specified test.
// console.log(arr.every(function (element,index,self) {
//    return element>10                                 //[10, 20, 30, 40, 50]
//                                                          //[true,true,true,true,true]  ==>true
//                                                         // [false,true,true,true,true] ==> false
// })
// );

// array.some(): Determines whether the specified callback function returns true for any element of an array.

// console.log(arr.some(function (element) {
//     return element>10                                    //[10, 20, 30, 40, 50]
//                                                         //[true,true,true,true,true]  ==>true
//                                                         // [false,true,true,true,true] ==> false
// }));

//to iterate over an array, use 1)for 2)for_of 3) for_in 4) while 5) do_while

// for (let index = 0; index < arr.length; index++) {
//     console.log(index +" : "+arr[index]);
// }
// console.log("=============for_of_loop=================");
// for (const value of arr) {
//     console.log(value);
// }
// console.log("+++++++++++++++++for_in_loop+++++++++++++++");

// for (const value in arr) {
//     console.log(value +" : "+arr[value]);
// }
// console.log("+++++++++++++++++whiel_loop+++++++++++++++");

// var i = 0;
// while (i<arr.length) {
//     console.log(i+" : "+arr[i]);
//     i++
// }
// console.log("+++++++++++++++++do_whiel_loop+++++++++++++++");
// var j = 0;
// do {
//     console.log(j+": "+arr[j]);
//     j++ 
// } while (j<arr.length);

