import sum from 'lodash/sum.js';
import reduce from 'lodash/reduce.js';
import { addition,multiplication } from "./math.js"

console.log(addition(5,6))
console.log(multiplication(5,6))
console.log(sum([5,6]));
console.log(reduce([5,6], (total, n) => total * n, 1))