/*
DATATYPES
=========
1.PRIMITIVE
2.NON=PRIMITIVE/REFERENCE


PRIMITIVE
--------
7 TYPES : sTRING,NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL

REFERENCE(NON-PRMITIVE)
------------------------
ARRAY,OBJECTS,FUNCTIONS



javascript is dynamically typed
===============================

JavaScript is a dynamically typed language. This means that variables in JavaScript can hold values of any data type, and the data type of a variable is determined at runtime rather than at compile time. You can assign a value of one type to a variable and later assign a value of a different type to the same variable without any issues.



*/

const score=100;
const scoreValue = 100.3;

//ARRAYS
const heroes=["shaktiman", "Nagraj", "doga"];
//OBJECT: stored as key:value pairs.
let myObj={
    name: "Bharat",
    age: 21
}

//function
const myfunction=function(){
    console.log("hello world");
}

console.log(typeof myObj);