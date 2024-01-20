//Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
let text1 = `Hello World!`;
console.log(text1)

//Template Strings allow both single and double quotes inside a string
let text2= `He's often called "Johnny"`;
console.log(text2)

//Template Strings allow multiline strings
let text3 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text3)

//Template Strings allow variables in strings called variable interpolation
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;