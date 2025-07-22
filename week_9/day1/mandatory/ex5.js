"use strict";
const getDetails = (userName, age) => {
    let result = [userName, age, `Hello, ${userName}! You are ${age} years old.`];
    return result;
};
console.log(getDetails("Alice", 25));
