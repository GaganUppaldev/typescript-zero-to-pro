/*Narrowing is a TypeScript concept where the type of a variable is refined to a more specific type within a 
certain scope. This is typically done using type guards like typeof, instanceof, or custom type predicates.*/

//repeat
//return a new string with multiple copy of variable value we defined inside it 
let str: string = "hello";
console.log(str.repeat(3)); // Output: "hellohellohello" 


function start(a: number | string | object, b: number) {
    if (typeof a === "string") {
        console.log("we cannot get sum because a is string");
        return " ".repeat(b); // Corrected to repeat spaces 'b' times
    } else if (typeof a === "number") {
        console.log(a + b, " is sum of ", a, " and ", b);
    } else {
        console.log("Invalid input: a is an object");
    }
}

start({ key: 10 }, 2); // Corrected object declaration
start("lol",1);
start(1,2);
