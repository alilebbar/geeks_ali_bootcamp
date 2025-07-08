function greet(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello, ".concat(name, "!");
}
console.log(greet());
console.log(greet("Ali"));
