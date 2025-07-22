"use strict";
const createPerson = (userName, age) => {
    let person = { name: userName, age: age };
    return person;
};
console.log(createPerson("John", 25));
