const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// using concat it will give a new array with all the element of marvel heros and dc_heroes

// console.log(allHeros);

// The advantage of using spread operater  is  we can concate more than one array at a time 
// but in using concat it only two array was concate at a time

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1,, [4, 6], 7, [6, 7, [4, 5]]]

// it will give all the element in the  a one array array inside array is converted in only one array

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// checking the given array is array or not 
console.log(Array.isArray("Hitesh"))
// converting it into array

console.log(Array.from("Hitesh"))

console.log(Array.from({name: "hitesh"})) // interesting   // it will return an empty array because converting into array is not 
// possible because there is name and hitesh two identities is present


let score1 = 100
let score2 = 200
let score3 = "dsfd"
 
// returns a new arrays from a set of elements(array , element , string)
console.log(Array.of(score1, score2, score3));