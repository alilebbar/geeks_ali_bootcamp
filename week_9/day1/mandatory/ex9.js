"use strict";
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet("Ali"));
