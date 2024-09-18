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
