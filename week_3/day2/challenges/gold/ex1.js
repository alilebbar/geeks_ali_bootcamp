const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
let numberString = numbers.toString();
console.log(numberString);
let numberChar1 = numbers.join(" ")
let numberChar2 = numbers.join(" + ")
let numberChar3 = numbers.join("")
console.log(numberChar1)
console.log(numberChar2)
console.log(numberChar3)

let changable = 0
for (let i = 0; i < numbers.length; i++) {
   for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            changable = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = changable
        }
   }
}
console.log(numbers)