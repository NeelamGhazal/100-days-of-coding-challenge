var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a array of Contries and Print its Orignal Orderings
var contriesToVisite = ["China", "Denmark", "Bahrain", "Australia"];
console.log("Orignal Order:", contriesToVisite);
// Print the Array Alphabetical order without modifying the Actual Array List
console.log("Alphabetical order:", __spreadArray([], contriesToVisite, true).sort());
//Show that the array is still in its Orignal Order
console.log("Still in Orignal Oder:", contriesToVisite);
//Print the Array in Reversed Order without  modifying the ACtual Array List
console.log("Reverse Order:", __spreadArray([], contriesToVisite, true).reverse());
//Show that the array is still in its Orignal Order
console.log("Still in Orignal Oder:", contriesToVisite);
//We have Changed the Orignal Array Order Now
console.log("Orignal Array Reversed:", contriesToVisite.reverse());
//Print the array to show that it's back to orignal order
console.log("Back to Orignal Order", contriesToVisite.reverse());
//print the Array to show that its order has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:", contriesToVisite.sort());
//We have Changed again the Orignal Array Order Now in reverse again
console.log("Orignal Array Reversed:", contriesToVisite.reverse());
