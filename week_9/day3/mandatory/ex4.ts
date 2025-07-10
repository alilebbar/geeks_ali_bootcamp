function getFirstElement(arr: (number | string)[]): string {
    return arr[0] as string;
}

console.log(getFirstElement(["bonjour", 42])); 
console.log(getFirstElement([100, "hello"]));  
