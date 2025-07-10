function formatInput<T extends { toString(): string }>(input: T): string {
  const str = input.toString();
  return `Formatted: ${str.toUpperCase()}`;
}

console.log(formatInput(123));           
console.log(formatInput("hello"));       
console.log(formatInput(true));          
