interface Person  {
    name: string;
    age: number;
}

const createPerson=(userName: string, age: number) : Person => {
    let person: Person = {name: userName, age: age};
    return person;
}
console.log(createPerson("John", 25));