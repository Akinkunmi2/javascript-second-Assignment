const prompt = require("prompt-sync")();
let number = prompt("Enter any number: ")
let reversed = "";
while(number > 0){
let value = number % 10;
reversed = reversed + value;
number = (number - value) /10;
}
if(reversed == number){
console.log("The number you entered is a palindrone");


}
else{
console.log("The number you entered is not a palindrone")


}


