const marvelHeros=["thor", "Ironman", "spiderman"];
const dcHeros=["superman", "Flash", "Batman"];
// marvelHeros.push(dcHeros);
console.log(marvelHeros);
//push ,pushes the array to the previous array and not each element of the array to be pushed indidually
//so we use concat
// const newHeros=marvelHeros.concat(dcHeros);//conacat return new array so we need to store it first before using it
// console.log(newHeros);

// //spread operator
// const allNewHeros=[...marvelHeros,...marvelHeros];
// console.log(allNewHeros);

//flat method
// const arr=[1,2,3,[4,5,6],6,7,[8,1,2]];
// console.log(arr);
// const newUpdatedArray=arr.flat(Infinity);
// console.log(newUpdatedArray);

console.log(Array.isArray("bharat"));
console.log(Array.from("Bharat"));

//creating array by adding all the discrete elements
let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));