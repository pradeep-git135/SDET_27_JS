function outer(a) {
    return function inner(b) {
        return a+b
    }
}

var add5to = outer(5)
console.log(add5to(7));
// var result = add5to(7)
// console.log(result);