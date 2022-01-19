
// function normal(param) {
//     param()
//     console.log("i am a normal function");
// }

// function callback() {
//     console.log("i am a callback function");
// }
// // 

// normal(callback)

// normal(function callback2() {
//     console.log("i am a callback2 function");
// })

// //payment scenario in ecommerse application

function status1(paymentStatus) {
    var result = paymentStatus()
    if (result == "payment Success") {
        console.log("your product is booked successfully");
    }else{
        console.log("your product is can't book bcz of insufficient balence");
    }
}
// status1(paymentResult)
// status1(paymentResult)
status1(function paymentResult() {
    return "payment UNSuccess"
})