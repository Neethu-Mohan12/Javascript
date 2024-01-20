//Extracting String Parts

//string slice()
let text = "Apple, Banana, Kiwi";
let part = text.slice(15, 17);
console.log(part)

//substring()
let str = "Apple, Banana, Kiwi";
let part2= str.substring(15, 17);
console.log(part2)

//substr()
let str2= "Apple, Banana, Kiwi";
let part3= str2.substr(7, 6);  //second parameter is length of the string
console.log(part3)