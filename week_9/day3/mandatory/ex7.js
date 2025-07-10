function formatInput(input) {
    var str = input.toString();
    return "Formatted: ".concat(str.toUpperCase());
}
console.log(formatInput(123));
console.log(formatInput("hello"));
console.log(formatInput(true));
