//Q16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
// Creating a Guest List Array
var guestList = ["Aina", "Anabiya", "Hashir", "Salar"];
// Making variable for those guest who cant come
var canNotAttend = guestList[0];
// Print the name of guest who cant come
console.log(canNotAttend, "can not attend the dinner.");
// Add or Remove values from guest list Array
guestList.splice(0, 1, "Haya");
// Message print for bigger table
console.log("Good News ! I found a bigger dinner table.");
// Adding a new guest at starting index of array
guestList.unshift("Aman");
// Adding a new guest at ending index of array
guestList.push("Fatima");
// Making a variable for storing a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Usman");
//Print message of Updated list
console.log("Updated list of our Guests");
//Sending a invitation message to our guest one by one with their name
guestList.forEach(function (oneguest) { return console.log("Dear ".concat(oneguest, ", You are invited to the dinner.")); });
