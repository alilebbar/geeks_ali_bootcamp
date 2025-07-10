const describeValue = (value: string | number): string => 
    typeof value === "string" 
        ? "Ceci est une chaîne de caractères" 
        : "Ceci est un nombre";

console.log(describeValue("Hello"));
console.log(describeValue(10));
