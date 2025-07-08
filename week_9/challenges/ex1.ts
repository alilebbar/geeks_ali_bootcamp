function validateUnionType(value: any, allowedTypes: string[]): boolean{
    return allowedTypes.includes(typeof value);
}

console.log(validateUnionType(10, ["number", "string"]));
console.log(validateUnionType(10, ["number"]));
console.log(validateUnionType(10, ["string"]));