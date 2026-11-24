const prompt = require("prompt-sync")();
let number = prompt("Enter a number: ");
let count = 0;
let total = 0;
while(number != -1){
count =  count + 1;
total = total + number;
let average = total / count;
number = prompt("Enter a number: ");

console.log("The average of the number you entered is " + average);
}



