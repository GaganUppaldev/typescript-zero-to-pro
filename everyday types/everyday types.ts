//Any 
//meaning of any is very similar to its real life meaning 
//It let variable to have any value without defining them

//By default in typescript non impliment any option is disabled
//we can enable this opiton from JSON making it 
// *go to json file -> inside compilor option -> paste this ->  "noImplicitAny": true, 
// no make above option false means Any is active now you need to define all or :any infront of variable 

//when we enable it we need to add :any in front of variable to let it hold any value without defining it
/*
let object:any = {
  a : 1, 
}
console.log(object.a)
*/ 

//this make us to get more errors during development time but reduce runtime errors


let object = {
  a : 1, 
}
console.log(object.a) //this code will run on both if we have NoimplementAny option true or false

//here you will see the diffrence 
function greet(name:string){   //here you can use string and then no number will be expeted in function
  console.log("welcome" + name);
  console.log("converted to uppercase  " + name.toUpperCase() + "  !|")//added this to show example of function in ts
}
greet("developer"); //use any if you want to send numbers or other types also
//if option was true means you can go without defining anything like :string , :any but now we need to do that because option is false and any is active

//return type
function test1():number{
  return 24;   //if you will try to return any things else than number typescript will throw error
}

test1(); //this is just calling function
console.log(test1()); //print value retuned by function in terminal

function test2(){
  
  return 24 + ("abc");

}
console.log(test2());



async function outt(): Promise<number> {
  return 26;
}
console.log(outt());


const names = ["alexa" , "siri" ,"jarves"];
//Anonymus function
names.forEach(function (s){
  console.log(s.toUpperCase());
})
//arrow function
names.forEach((s=>{
  console.log(s.toUpperCase());
})) 

//object type
function obj(pt :{x:number,y:number} , ct :{z:number,y:number}){   //here is object named pt  and ct
  console.log("sum of ", pt.x ,"and",pt.y,"is",pt.x+pt.y);
  console.log("sum of ", ct.z ,"and",ct.y,"is",ct.z+ct.y);
}

obj({x:2,y:2},{z:40,y:40}); //sending values inside object pt and ct

//optional properties
function printname(x:string , y?:string ){ //here while calling function  x is compulsary while y is optional
  console.log(x);
  console.log(x+"&"+y);
  

}
printname("yes","sir");
printname("no sir") //it can only with this and show undefined
//this can't be called with only y because it is optional 

//optional properties
function printnamehere(obj :{x:string , y?:string} ){ //here while calling function  x is compulsary while y is optional
  console.log(obj.x);
  console.log(obj.x+"&"+obj.y);
  if(obj.y !== undefined){
    console.log(obj.y.toUpperCase());
  }
}
printnamehere({ x:"smart",y:"programmer"})

//union type is | 
//used to allow variable to accept multiple values 
function union(x:number|string|object){ //means x variable can accept number , string and object also
  console.log(x);
}
union(31);
union('c');
union({ id : 243});

//take example of property toUppercase that we can only use in string not numbers so it will throw error so we will use if and else

function eg(x:string|number){
  if(typeof x == "string"){
   console.log(x.toUpperCase());
  }
  else{
    console.log(x);
  }
}
eg("example");
eg(12);

function greet0(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and ")); 
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
greet0(["lol","call","pall"]);//here this is a string input
greet0("james")//simple string in input

//Aliases
//Type aliases 

type Point = { //type is used
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

type data = {
  x:number|string;
}

function print1(d :data){
  console.log(d.x+ " ||| type |||")
}
print1({x:"import topic is "});

type UserInputSanitizedString = string;

function sanitize(str: string): string {
  // Example sanitize function
  return str.trim().toLowerCase();
}

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

let userInput = sanitizeInput("  Hello World!  ");
console.log(userInput); // Outputs: "hello world"

// Re-assigning with a new string
userInput = "new input";
console.log(userInput); // Outputs: "new input"

//interface 
// another way to name type of object


interface Point0 { //interface used here instead of type
  x: number;
  y: number;
}
 
function printCo(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCo({ x: 25, y: 30 });

//difference between Type aliases and interfaces
//main differnce is that a type cannot be re-opened to add new properties vs an interface which is always extendable
type User = {
  name: string;
  age: number;
};

// This will cause an error because you cannot reopen a type alias
// type User = {
//   email: string;
// };
interface User0 {
  name: string;
  age: number;
}

// Extending an interface
interface User0 {
  email: string;
}

const user: User0 = {
  name: "John",
  age: 30,
  email: "john@example.com"
};
