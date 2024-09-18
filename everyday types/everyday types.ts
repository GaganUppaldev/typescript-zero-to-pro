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
}
greet("developer"); //use any if you want to send numbers or other types also
//if option was true means you can go without defining anything like :string , :any but now we need to do that because option is false and any is active
