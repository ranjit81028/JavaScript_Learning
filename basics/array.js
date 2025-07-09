let myArr = [];
myArr.push(4);
console.log(myArr[0]);
let removed = myArr.pop();
console.log(myArr, removed);
myArr = [1, 2, 3, 4, 5];
myArr.unshift(7); // ye starting me 7 add kr dega
console.log(myArr);
myArr.shift();// this will remove the first element
console.log(myArr);
myArr.shift();// this will remove the first element
console.log(myArr);
console.log(myArr.includes(8)); // gives true/false of elemnt is there or not
console.log(myArr.indexOf(8));// if elemnt is not there -1 will be the index

const newArr = myArr.join();
console.log(newArr); // this joins the array also converts newArr to string

const arr1 = myArr.slice(1, 3); // it takes value from index 1 to index (3-1)
// it does not modifies the original array
console.log(`A: ${arr1}`);
const arr2 = myArr.splice(1, 3);// does same but modifies the original arra
console.log(`sliced array is: ${myArr}`);
console.log(`resulted array is: ${arr2}`);
// contacting of two arrays
let marvelHeros = ["spiderman", "ironman", "antman"];
let dcHeros = ["batman", "superman", "aquaman"];
// 1way
// marvelHeros.push(dcHeros);
// console.log(`marvel heros become: ${marvelHeros}`);
// // other way
// marvelHeros.concat(dcHeros);
// console.log(`another way: ${marvelHeros}`);
// another way
const allHeros = [...marvelHeros, ...dcHeros];
console.log(`new way of array is: ${allHeros}`);

let anotherArray = [1, 2, [4, 5, 6], 8, 9, [3, 5, 90,[5,7,9,0]], 9];
// we can flat this type of array
const newAnother_Array = anotherArray.flat(Infinity);
console.log(newAnother_Array);
let str = `ranjit`;
const strArray = Array.from(str);
// this converts the string into array
console.log(strArray);
let score1 = 100;
let score2 = 200;
let score3 = 300;
const scoreArray = Array.of(score1, score2, score3);// stores some input in array form
console.log(scoreArray);