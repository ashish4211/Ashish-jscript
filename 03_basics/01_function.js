
function Saymyname(){
    console.log("s");
    console.log("u");
    console.log("r")
    console.log("a");
    console.log("j")
}

// num1 and num2 are called parameter 
function addtwono(num1, num2){
   // console.log(num1+num2)
   return num1+num2;
}
// Saymyname();
// 2 and 3 are parameters 

const result = addtwono(2,3);
// console.log("Result :-", result)

// here suraj is bydefault value it is taken when undefined value is given as input 
function loginuserMessage(username = "suraj"){
    if(!username ) {
        console.log("please enter the username")
        return ;
    }

    return `${username} just logged in `
}
console.log(loginuserMessage())

// when we give no any name in function then it return undefined 