const prompt = require("prompt-sync")();
let string = prompt("Enter a word: ");
let reverse = " "
for(let count = 0; count < string.length; count ++ ){
 reverse = string[count] + reverse 

}
console.log(reverse)

