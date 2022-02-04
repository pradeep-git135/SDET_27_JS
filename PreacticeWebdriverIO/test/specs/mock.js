var amazon = [{peoductName:"iphone", productPrice : 50000},
                {peoductName:"mackBook", productPrice : 150000},   //[50000, 150000, 10000]
                {peoductName:"earpods", productPrice : 10000}]

                //get the sum of productprice

                //for of loop
    // var sum ;
//                 for (var element of amazon) {
//                     // console.log(element);
//                     // console.log(element.productPrice);
//                     sum = sum +element.productPrice
//                 }
// console.log(sum);


// var sum = 0;
// amazon.forEach((element)=>{
//     sum  = sum + element.productPrice
// })
// console.log(sum);

// console.log(amazon.reduce((sum, element)=>{
//     return sum = sum + element.productPrice
// },0));

console.log(amazon.reduce((priceArr, element)=>{
        // return sum = sum + element.productPrice
        priceArr.push(element.productPrice) 
        return priceArr
    },[]));
