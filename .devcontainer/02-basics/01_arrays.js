//  ARRAYS
//=================
/*
Concept of shallow copy and deep copy
+++++++++++++++++++++++++++++++++++++++++
javascript array copy operations follows shallow copies i.e references aare shareed with the copied object.
while in deep copy the coies doesnt share the same reference from the heap.
*/
const myArr=[0,1,2,3,4];
const myHero=["shaktiman", "naagraj", "doga"];
const myArr2=new Array(1,2,3,4);
// //inside there is property or mtehod prototype and inside that there is also one method with same name i.e. prototype.
// console.log(myArr);
// console.log(myArr2);
// console.log(myHero);

// myArr.push(5);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// console.log(myArr.shift());
// console.log(myArr.unshift());
// console.log(myArr);
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(2));

//converting all array elements to string values separated by comma
// const newArr=myArr.join();
// console.log(myArr);
// console.log(newArr);
//slice and splice
console.log(`${"Initial Array: "}`);
console.log(myArr);
const my1=myArr.slice(1,3);
console.log(my1);
console.log(`${"After Slicing: "}`);
console.log(myArr);
const my2=myArr.splice(1,3);
console.log(my2);
console.log(`${"After Splicing: "}`);console.log(myArr);
