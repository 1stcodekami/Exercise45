"use strict";
/*24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
let names = ["Moin", "Hasnain", "Imtiaz", "Umair", "Kashif", "Abrar"]; // From Excercies 17.
// Tests for equality and inequality with strings
console.log("Abrar" == names[5]); //true
console.log("IMTIAZ" == names[4]); //false
//  Tests using the lower case function
console.log(names[5].toLowerCase() == "Abrar"); //false
console.log(names[3].toLowerCase() != "Kashif"); //ture
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age = 26;
console.log(age == 26); //true
console.log(age != 26); //false
console.log(age > 26); //false
console.log(age > 25); //true
console.log(age < 27); //true
console.log(age < 26); //false
console.log(age >= 26); //true
console.log(age >= 24); //true
console.log(age <= 26); //true
console.log(age <= 23); //false
// Tests using "and" and "or" operators
let x = 10;
let y = 22;
console.log(x > 9 && y < 24); //ture
console.log(x < 10 && y < 24); //false
console.log(x > 11 || y < 24); //ture
console.log(x < 10 || y > 22); //false
// Test whether an item is in a array
// Test whether an item is not in a array
console.log(names.includes("Abrar")); //true
console.log(names.includes("abrar")); //false
