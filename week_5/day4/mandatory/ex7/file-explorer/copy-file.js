import fs from 'fs';

let lire = fs.readFileSync('./source.txt', 'utf8');
console.log(lire);
fs.writeFileSync('./destination.txt',lire,'utf8')