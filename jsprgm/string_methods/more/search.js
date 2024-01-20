//search strings

//indexOf()
let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.indexOf("locate");
console.log(index1)

//lastIndexof():The indexOf() method accepts a second parameter as the starting position for the search:
let text2 = "Please locate where 'locate' occurs!";
let index2= text2.lastIndexOf("locate");
console.log(index2)

//search():The search() method returns the position of the first occurrence of a string in a string.
let text = "Please locate where 'locate' occurs!";
let index = text.search("locate");
console.log(index)

//includes()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango")) 
