class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): string {
        return `Miaow!`;
    }
}
class Dog extends Animal {
    makeSound(): string {
        return `Woof!`;
    }
}
const myDog = new Dog("Rex");
console.log(myDog.makeSound()); 
