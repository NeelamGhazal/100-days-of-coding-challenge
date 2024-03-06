 /*Q3:Name Cases: Store a person’s name in a variable, 
 and then print that person’s name in lowercase, uppercase, and titlecase.*/


let personName: string = "Aina Khan";

//Show the name in all small letters
console.log("lowercase:", personName.toLowerCase());

//Show the name in all big letters
console.log("uppercase:", personName.toUpperCase());

//Show the name with the first letter big
console.log("titlecase:", personName.replace(/\b\w/g,(char) => char.toUpperCase()));
