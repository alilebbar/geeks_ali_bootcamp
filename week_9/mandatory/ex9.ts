function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

console.log(greet());       
console.log(greet("Ali"));   