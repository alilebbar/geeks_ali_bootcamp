const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
let index = startLine.indexOf("<")
turtle=(" ".repeat(index)+turtle)
rabbit=(" ".repeat(index)+rabbit)
turtle = turtle.trim().padEnd(9, '=')
//ajout = jusqu'a atteindre 9 
console.log(startLine);
console.log(turtle);
console.log(rabbit);

