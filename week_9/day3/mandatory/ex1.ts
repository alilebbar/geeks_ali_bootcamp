

type Person = {name: string, age: number};
type Address = {street: string, city: string};

const PersonWithAddress : Person & Address = {
    name: "John",
    age: 25,
    street: "123 Main St",
    city: "Anytown",
};
console.log(PersonWithAddress);