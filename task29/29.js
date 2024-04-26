"use strict";
/*Q29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
Object.defineProperty(exports, "__esModule", { value: true });
//Array of favorite fruits
let favoriteFruits = ["Apple", "Mango", "Strawberry"];
// Check if "apple" is in the array
if (favoriteFruits.includes("Apple")) {
    console.log("I really like Apples!");
}
// Check if "Mango" is in the array
if (favoriteFruits.includes("Mango")) {
    console.log("I really like Mango!");
}
// Check if "Strawberry" is in the array
if (favoriteFruits.includes("Strawberry")) {
    console.log("I really like Strawberry!");
}
// Check if "Orange" is in the array
if (favoriteFruits.includes("Orange")) {
    console.log("I really like Orange!");
}
// Check if "kiwi" is in the array
if (favoriteFruits.includes("kiwi")) {
    console.log("I really like kiwis!");
}
