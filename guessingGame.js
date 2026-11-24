const prompt = require("prompt-sync")();
let value_assigned = 50;
let guessValue = prompt("Guess the correct number by choosing any number(1- 100): ");
let count = 0
while (guessValue != value_assigned){

let guess = prompt("Enter the correct number: ");
count = count + 1;
if (guess == value_assigned){
console.log("You attempted the wrong answer " + count + " times");
break
}


}

