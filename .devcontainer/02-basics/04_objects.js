// const tinderUser1=new Object();
// const tinderuser2={};
// // both the above objects is empty object and there is no difference in both of them at all, the only differnce in both of them is that the first one is singleton object while the later one is non-singleton object.
// tinderUser1.id="123abc";
// tinderUser1.name="Hitesh";
// tinderUser1.isLoggedIn=false;
// console.log(tinderUser1);

// const regularUser={
//     email: "some@gmailcom",
//     fullname: {
//         firstName:null,
//         lastName:"Gupta"
//     }
// }
// console.log(regularUser.fullname.firstName);

// //there is also a syntax in which qn mark is used in case there is nothing present as value for the key it is used there, used when response come from API

// const obj1={
//     1:"a",2:"b"
// }
// const obj2={
//     3:"c",4:"d"
// }
// const obj3={
//     obj1,obj2
// }
// console.log(obj3);

// //the way to concat two objects
// const obj4=Object.assign({},obj1,obj2);// the syntax is object.assign(target,source1,source2,source3)
// //                               we can also do object.assign({},sorce1,source2,source3..etc)
// //                                   in this a new array is taken as object and all other are stored in it sequencially

// console.log(obj4);

// //this can be done by use of spread operator, which is easy and latest. i.e ...
// const obj5={...obj1,...obj2};
// console.log(obj5);
// // value from database comes in the form of array of objects i.e.

// console.log(Object.keys(tinderUser1));
// //we can see the output comes in the form of array
// //simliarly for object.value(objectname) is present
// //entries
// console.log(Object.entries(tinderUser1));
// // we can clearly see the entries are returned in form of array of arrays(this array has size 2 i.e key pair)

const course ={
    coursename: "js-in-hindi",
    price: "999",
    courseInstructor: "hitesh"
}
const {courseInstructor: instructor}=course;
console.log(instructor);

//Json
//when data come form backend iy used to come in form of xml format but now it comes in form of json which is easy
//it looks something like object without name as:
/*
{
    "name": "bharat",
    "age":"not applicable"
}
we can see here that key is also saved in the form of strings

this is one of the way that can be recieved but data can also be fetched in form of array of objects or array of json
e.g [
    
     {},
     {},
     {},     

    ]



*/
//
//
//
//
