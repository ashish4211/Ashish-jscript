
// array in  js is resizeable
// element of array is of any type of data structure (number , string  , boolean , bigint  , array)
// 0 based indexing 
// it will be pass by reference

const myarr = [2, 4, 56, 78 , 0, 52]
const myhero = ["papa", "mummy" , "bhaiya"]

// array method
// myhero.push(" ");
// myarr.pop();
// myhero.pop()

// myarr.unshift(4) // it will shift every element of array by 1 and add 4 at the begininig of the array it provides a costly 
// operation and time taking 
// if any where it is neccessary to do that we will take use of that

//myarr.shift() // remove element at index 0

//console.log(myarr);
// console.log(myarr.includes(9))
// console.log(myarr.indexOf(2))

//console.log(myhero)

const newarr = myarr.join() // it will change the into a string type by concatinating the elements of array

// console.log(typeof newarr);
// console.log(newarr)

console.log(newarr)
console.log("A" , myarr)

// It will return the portiong of array with index 1 and 2
const myn1 = myarr.slice(1,3);
console.log(myn1)

console.log("B" , myarr);
// It will return the portion of array with index 1 2 and 3
// But it also change the original array and 
// remove the element of index 1 2 and 3 from original array leaving remaining part of array
const myn2 = myarr.splice(1,3);

console.log(myn2);
console.log("c", myarr)
