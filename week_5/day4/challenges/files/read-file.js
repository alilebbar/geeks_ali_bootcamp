import fs from 'fs'

export function readFileR() {
    let read = fs.readFileSync("./files/file-data.txt", "utf8");
    console.log(read);
} 