/* Q6: Stripping Names: Store a person’s name, and include some whitespace characters 
 at the beginning and end of the name. Make sure you use each character combination, 
 "\t" and "\n", at least once. Print the name once, so the whitespace around 
 the name is displayed. Then print the name after striping the white spaces.*/

//This saves the name with whitespace
let Person_Name: string = "\t\n  Aina Khan \n\t";
//Show the name with whitespace
 console.log(Person_Name);

 //Show the name without whitespace
 console.log( Person_Name.trim());

 
