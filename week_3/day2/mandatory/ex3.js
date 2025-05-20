const prompt = require('prompt-sync')();
number = parseInt(prompt("Enter a number"));
console.log(typeof(number));
while (number <10){
    number = prompt("Enter a number");
}    