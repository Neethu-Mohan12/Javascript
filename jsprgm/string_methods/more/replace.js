//The replace() method replaces a specified value with another value in a string:
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText)

//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
let text2= "I love cats. Cats are very easy to love. Cats are very popular."
text2 = text2.replaceAll("Cats","Dogs");
text2 = text2.replaceAll("cats","dogs");
console.log(text2)

//split:return first array element
let text3 = "a,b,c,d,e,f";
const myArray = text3.split(",");
console.log(myArray[0])