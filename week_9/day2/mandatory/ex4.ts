class Calculator {
    static add = (a: number, b: number): number => {
        return a + b;
    }
    static subtract = (a: number, b: number): number => {
        return a - b;
    }
    
}
console.log(Calculator.add(10, 20));
console.log(Calculator.subtract(10, 20));
