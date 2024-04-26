/*Q24:More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try 
more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
 and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/


// Variables
let apple = "apple";
let uppercaseAPPLE = "APPLE";
let five = 5;
let ten = 10;
let twenty = 20;
let colors = ["red" , "green" , "blue"];

// Tests Equality and inequality tests with strings
console.log ("Is 'cherry' is equal to 'cherry'?");
console.log('apple' == 'apple');

console.log ("\nIs 'cherry' is not equal to 'cherry'?");
console.log('apple' != 'apple');

// Tests using the lower case function
console.log("\nIs'APPLE' is equal to 'apple' after lowercasing?");
console.log('APPLE'.toLowerCase() == 'apple'); 

console.log("\nIs'APPLE' is not equal to 'apple' after lowercasing?");
console.log('APPLE'.toLowerCase() != 'apple'); 

// Numerical tests
// Equality
console.log("\nIs five is equal to ten");
console.log(five == ten);

// InEquality
console.log("\nIs five in not equal ten?");
console.log(five != ten);

// Greater than
console.log("\nIs five is greater than zero");
console.log(five > 0);

// Less than
console.log("\nIs ten is less than five");
console.log(ten < 5 );

// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\nIs ten is less than or equal to 5?");
console.log(ten <= 5);

// Tests using "and" and "or" operators

// Using && (and)
console.log("\ntwenty is not equal to ten and twenty is greater than ten?");
console.log(twenty != 10 &&  twenty > 10); 

console.log("\ntwenty is not equal to ten and twenty is greater than thirty?");
console.log(twenty != 10 &&  twenty > 30); 

// Using || (0R)
console.log("\ntwenty is greater than thirty OR twenty is equal to twenty");
console.log(20 > 30 || 20 == 20);

console.log("\ntwenty is greater than thirty OR twenty is not equal to twenty");
console.log(20 > 30 || 20 != 20);

// Test whether an item is in an array
console.log("Is 'blue' in the colors array?");
console.log(colors.includes("blue"));

 console.log("Is 'red' not in the colors array?");
 console.log(colors.includes("red"));

