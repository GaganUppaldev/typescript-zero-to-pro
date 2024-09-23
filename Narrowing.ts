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

//Truthiness narrowing 
//$,||,$$ etc
function getusers(user: string) {
    // Check if 'user' is truthy
    if (user) {
        // If 'user' is truthy, log the user's name
        console.log(`user found and its name is ${user}`);
        // Return the user ID
        return `user id is ${user}`; // Using backticks (`) for template literals, not single quotes (')
    } else {
        // If 'user' is falsy, log that the user is not found
        console.log("user not found");
    }
}

// Call the function with a truthy value
getusers("alexa");

/*In JavaScript, when you use conditions in constructs like if, JavaScript automatically converts (or “coerces”) 
the condition to a boolean value (true or false). This helps JavaScript decide which branch of code to execute.
*/
//some values are false like 0,NaN (Not-a-Number) ,"" (empty string),0n(bigint zero),null,undefined
//All other values are considered truthy, meaning they convert to true when coerced.

Boolean(0); // false
Boolean("hello"); // true

function printAll(strs: string | string[] | null) {
    // Check if 'strs' is an array of strings
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } 
    // Check if 'strs' is a single string
    else if (typeof strs === "string") {
        console.log(strs);
    } 
    // Handle the case where 'strs' is null
    else {
        console.log("No strings to print");
    }
}

printAll(["hello", "world"]); // Prints each string in the array
printAll("hello"); // Prints the single string
printAll(null); // Prints "No strings to print"


function multiplyAll(
    values: number[] | undefined,
    factor: number
  ): number[] | undefined {
    if (!values) {
      return values;
    } else {
      return values.map((x) => x * factor);
    }
  }


console.log(multiplyAll([1, 2, 3], 2)); // Output: [2, 4, 6]
console.log(multiplyAll(undefined, 2)); // Output: undefined

//Equality narrowing
function example2(x:string|number , y:string|boolean){
    if(x==y){
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    }else{
        console.log(x);
        console.log(y);
    }

}
example2("name","test");

type fish = {swim:() => void};
type bird = {fly:() => void};

function move(animal: fish | bird){
    if("swim" in animal){
        return animal.swim();
    
    }else{
        return animal.fly();
    }
}
