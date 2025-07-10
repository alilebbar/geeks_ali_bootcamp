const logLength = <T extends { length: number }>(input: T): number => {
    return input.length;
};

console.log(logLength("Hello"));      
console.log(logLength([1, 2, 3, 4]));  
