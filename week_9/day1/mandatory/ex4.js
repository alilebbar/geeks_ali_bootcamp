"use strict";
const testNumber = (num) => {
    let result;
    if (num > 0) {
        result = "positive";
    }
    else if (num < 0) {
        result = "negative";
    }
    else {
        result = "zero";
    }
    return result;
};
console.log(testNumber(10));
console.log(testNumber(-10));
console.log(testNumber(0));
