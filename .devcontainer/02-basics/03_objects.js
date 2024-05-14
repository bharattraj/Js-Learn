//singleton
//object literals
// object can be created by object.create and also by below method
const mySym = Symbol("key1")
const jsUser={
    name:"Bharat",
    age: 21,
    location: "bhopal",
    email:"kumarsomu321@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Moday","Saturday"],
    [mySym]: "symbol1"

    //in oder to store symbols the syntax of key value pair is different
//is we will store as=>     mySym: "symbol1"    //then it will treat mysym as string and not symbol
//so the correct syntax is:  [mysym]: "symbol2" //then it will be treated as symbol
}
//both below ways are valid.
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser.name);
console.log(jsUser["location"]);
console.log(typeof jsUser[mySym]);
//if you want some keypairs to be not change or to be freezed 

//DEBUG HERE if Freeze is no t commented then comment it
// Object.freeze(jsUser);
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello everyone!!");
}
console.log(jsUser.greeting());
