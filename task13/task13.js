/* Q13:Your Own Array: Think of your favorite mode of transportation,
 such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items, such as
“I would like to own a Honda motorcycle.*/
var favoriteTransportation = ['motorcycle', 'car', 'bicycle', 'plane'];
favoriteTransportation.forEach(function (transport) { return console.log("I would like to own a ".concat(transport, ".")); });
