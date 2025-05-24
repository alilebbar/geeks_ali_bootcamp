const prompt = require('prompt-sync')();
let motsEntrer=prompt("entrer les mots separer par virgule : ");
function splitByComma(str) {
    str+=","
    let ar = [];
    let char = "";
    for (let i of str) {
        if (i !== ",") {
            char += i;
        } else {
            ar.push(char);
            char = "";
        }
    }
    return ar;
}
function plusLong(tab=[]){
    let cont = 0
    for(e of tab){
        if(cont<e.length){
            cont=e.length
        }
        }
   return cont
}
function affichage(tab = [], longeur = 0) {
    let etoile = "*".repeat(longeur + 2);
    console.log(etoile);
    tab.forEach((e) => {
        let espaces = " ".repeat(longeur - e.length);
        console.log(`*${e}${espaces}*`);
    });
    console.log(etoile);
}

let ar = splitByComma(motsEntrer);
let count = plusLong(ar)
console.log(ar);
console.log(count)
affichage(ar,count)