console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, " + removedGuest + ", I can't invite you to dinner.");
}
guests.forEach(function (guest) {
    console.log("Dear " + guest + ", you're still invited to dinner.");
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
