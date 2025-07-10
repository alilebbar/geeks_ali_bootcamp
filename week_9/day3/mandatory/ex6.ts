type Person2 = {
    name: string;
    age: number;
}
type Job = {
    department: string;
    position: string;
}

type Employee = Person2 & Job;

const describeEmployee = (employee: Employee): string => {
    if (employee.position === "Manager") return "Manager";
    if (employee.position === "Developer") return "Developer";
    return "Autre poste";
}

const emp1: Employee = {
    name: "Alice",
    age: 30,
    department: "Informatique",
    position: "Manager"
};

const emp2: Employee = {
    name: "Bob",
    age: 25,
    department: "Développement",
    position: "Developer"
};

const emp3: Employee = {
    name: "Charlie",
    age: 40,
    department: "RH",
    position: "HR"
};

console.log(describeEmployee(emp1)); 
console.log(describeEmployee(emp2)); 
console.log(describeEmployee(emp3)); 