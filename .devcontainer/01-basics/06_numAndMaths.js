const score=400;
console.log(score);

const balance=new Number(10045);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const float=23423.7423;
console.log(float.toPrecision(5));
//===================================
const hundreds=10000000;
console.log(hundreds.toLocaleString());

//for indian style
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++++++++++++++++++
//  MATHS
let x=4;
console.log(Math.sqrt(x));
console.log((Math.random()*10) + 1)   //for values between 0 and 1
//
let max=90;
let min=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));
