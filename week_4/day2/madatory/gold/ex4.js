const array = [[1],[2],[3],[[[4]]],[[[5]]]].flat(2);
console.log(array); 
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
const newArray = greeting.map((subArray) => subArray.join(' '));
console.log(newArray);
const newArray2 = newArray.join(' ');
console.log(newArray2);
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const unTrapped = trapped.flat(Infinity);
console.log(unTrapped);