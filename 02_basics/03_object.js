// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
     name : "ashish",
     "full name" : "ashish kumar",// it can only be access by jsUser[full name] not using by dot
     age : 20,
     [mySym] : "myke1y",  // adding a key in object as a symbol is done by taking it in square brackets
     location : "jaipur",
     email : "ashish@4211",
     islogedin : false,
     lastLoginDays : ["monday", "Saturday"]
}

// if any key in object is defined as string then it can not be access using .(dot) 
console.log(jsUser.name)
console.log(jsUser["full name"])
console.log(jsUser[mySym])


jsUser.email = "ashishkr@gmail.com"
//Object.freeze(jsUser)  // freezing the object such that no one changes the values of object key
jsUser.email = "ashishkum@gmail.com" // it will not change the value of email because it will get freeze that no one change 
// key values in the object jsUser Although it will not give any type of errors
console.log(jsUser.email)

jsUser.greeting= function(){
    console.log("hello from jsWorld")
}
jsUser.greetingtwo = function(){
    console.log(`hello from js, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())