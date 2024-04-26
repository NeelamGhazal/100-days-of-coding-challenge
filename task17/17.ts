//Q17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program


// Creating a Guest List Array
let guestList = ["Aina","Anabiya","Hashir","Salar"];

// Making variable for those guest who cant come
let canNotAttend = guestList[0];

// Print the name of guest who cant come
console.log(canNotAttend, "can not attend the dinner.");

// Add or Remove values from guest list Array
guestList.splice(0, 1, "Haya");

// Message print for bigger table
console.log("Good News ! We have found a bigger table for dinner.");

// Adding a new guest at starting index of array
guestList.unshift("Aman");

// Adding a new guest at ending index of array
guestList.push("Fatima");

// Making a variable for storing a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Usman");

//Print message of Updated list
console.log("Updated list of our Guests");

//Sending a invitation message to our guest one by one with their name
guestList.forEach(oneguest => console.log(`Dear ${oneguest}, You are invited to the dinner.`));


//Inform that only two guests can be invited for dinner
console.log("\nDue to the delayed arrival of the new dinner table, I regret to inform that I can only accommodate two guests for dinner.");

//Using while-loop to remove guests from the array until only two names remain
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`Apologies, ${removedGuest} I'm unable to extend an invitation to you for dinner.`);
}
//Sending a invitations to the last two guest on the list
console.log("\nInvitations for the remaining two guests.")

guestList.forEach(twoGuest => console.log(`Fortunately, ${twoGuest} you are still warmly invited to join us for dinner.`));

//Removing last two guest from the list
guestList.pop();
guestList.pop();

console.log("\nEmpty List:", guestList);
