//find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log("first number over 18 is" +first)

//findIndex
const numbers2 = [4, 9, 16, 25, 29];
let first2 = numbers2.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log("first number over 18 has index" +first2)

//findLast()
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high)

//findLastIndex()
const temp2 = [27, 28, 30, 40, 42, 35, 30];
let pos = temp2.findLastIndex(x => x > 40);
console.log(pos)
