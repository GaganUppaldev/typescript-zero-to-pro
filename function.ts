//type defining and arrow function use
type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// A function that takes two numbers and returns their sum
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 10);
console.log(result); // Output: 15
