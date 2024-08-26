let score = null;

//console.log(typeof(score));
//console.log(typeof score)

let valueinNumber = Number(score)
//console.log(typeof valueinNumber) // it will convert it into number
//console.log(valueinNumber)  // It gives NAN as output

// When score is given null it will give a value of 0 as as an output a
// and also it gets converted into number

// "33" => 33
// "33f" => NaN (not a number)
// true => 1
// false => 0

// let isLoggedIn = ""; // gives false;
let isLoggedIn = "ashish" // gives true as it get converted into boolean
let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(typeof booleanIsLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// ""  => false
//"ashish" => true

let someNumber = 33
let stringNo = String(someNumber)
console.log(typeof stringNo)
console.log(stringNo)
