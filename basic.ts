//static type checking 
//non-exception failures
let naam:string = "hello world";
console.log(naam);

const user = {
    name : "raman",
    age : "18 + ",
};

console.log(user.name);

//here typescript will thow an error that location does not exist in user while javascript will one provide an error 
//javascript error -> undefined , this will make problem for programmer in big code project to spot the  error
//console.log(user.location);

//Typescript will throw error during time of development and don't run the code  which will prevent runtime errors
//But javascript will run the code and which will cause runtime errors
