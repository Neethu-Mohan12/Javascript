//indexof
const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple") + 1)

//lastIndexOf()
const fruits2 = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits2.lastIndexOf("Apple") + 1)

//includes()
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.includes("Mango"))

//find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} 
console.log("first number over 18 is" +first)

//firstIndex
const numbers2 = [4, 9, 16, 25, 29];
let first2 = numbers2.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log