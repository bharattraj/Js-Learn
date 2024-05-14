console.log(2<=3);
// console.log(a<3); //this gives error 
//Error also comes when compare values with different datatypes like 
console.log(+true);  //the output is 1 i.e boolean value for true;
console.log("");
console.log(+"");//the output is false or 0

console.log(null<0);  //gives false
console.log(null==0); //gives false
console.log(null>=0); //gives true
//In JavaScript, null is loosely considered "less than" (or "smaller than") any number when doing comparisons, but it's not equal to 0, and null is considered "greater than or equal to" 0 due to the way type coercion works. This behavior is part of JavaScript's quirky nature, and it's important to be aware of it when writing code to avoid unexpected behavior.

console.log(undefined>=0);
console.log(undefined==0);
console.log(undefined<0);
//no such type of behavior as with null is seen with undefined.

//using === for strict comparison

