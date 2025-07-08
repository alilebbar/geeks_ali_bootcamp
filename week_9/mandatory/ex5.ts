
const getDetails = (userName: string, age: number) : [string, number, string] => {
    let result : [string , number , string] = [userName, age,`Hello, ${userName}! You are ${age} years old.`];
    return result;
}

console.log(getDetails("Alice", 25));