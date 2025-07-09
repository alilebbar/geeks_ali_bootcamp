var getDetails = function (userName, age) {
    var result = [userName, age, "Hello, ".concat(userName, "! You are ").concat(age, " years old.")];
    return result;
};
console.log(getDetails("Alice", 25));
