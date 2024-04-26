/*Q23:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

//Making a Variebles
let four = 4;

let eight =  8;

/* True answers */

// Test 1
console.log("Test 1: four is equal to 4?");
console.log(four == 4); 

//Test 2
console.log("\nTest 2: eight is equal to 8?");
console.log(eight == 8);

//Test 3
console.log("\nTest 3: 4 is not equal to 8?");
console.log(four != eight);

//Test 4
console.log("\nTest 4: 8 is greater than 4?");
console.log(eight > four);

//Test 5
console.log("\nTest 5: 4 is smaller then 8?");
console.log(four < eight);

/* False answers */

// Test 6
console.log("\nTest 6: four is not equal to 4?");
console.log(four != 4); 

//Test 7
console.log("\nTest 7: eight is not equal to 8?");
console.log(eight != 8);

//Test 8
console.log("\nTest 8: 4 is equal to 8?");
console.log(four == eight);

//Test 9
console.log("\nTest 9: 4 is greater than 8?");
console.log(four > eight);

//Test 10
console.log("\nTest 10: 8 is smaller then 4?");
console.log(eight < four);
