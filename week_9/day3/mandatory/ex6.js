var describeEmployee = function (employee) {
    if (employee.position === "Manager")
        return "Manager";
    if (employee.position === "Developer")
        return "Developer";
    return "Autre poste";
};
var emp1 = {
    name: "Alice",
    age: 30,
    department: "Informatique",
    position: "Manager"
};
var emp2 = {
    name: "Bob",
    age: 25,
    department: "Développement",
    position: "Developer"
};
var emp3 = {
    name: "Charlie",
    age: 40,
    department: "RH",
    position: "HR"
};
console.log(describeEmployee(emp1));
console.log(describeEmployee(emp2));
console.log(describeEmployee(emp3));
