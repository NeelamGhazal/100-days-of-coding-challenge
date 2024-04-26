//Q21:They think of something you could store in a TypeScript Object. Write a program that 
//creates Objects containing these items.


// Define TypeScript object for technology
interface technology { 
    name: string, 
    category: string, 
    year: number, 
    description: string
 } 
 let technology = {
    name: "JavaScript",
    category: "Programming Language",
    year: 1995,
    description: "A high-level, interpreted scripting language primarily used for web development."
};

// Print information about the technology object
console.log(technology);
// console.log("Information about Technology:");
// console.log("Technology:", technology);


