let color = ["red", "blue", "green", "yellow", "purple"]
for (let i = 0; i < color.length; i++) {
    console.log(`Mon choix n°${i+1} est ${color[i]}`)
}
/*« Mon 1er choix », « Mon 2e choix », « Mon 3e choix », en choisissant le bon suffixe pour chaque nombre.
(Indice : crée un tableau de suffixes pour faire le bonus.)*/
console.log("---------------------------------------")
let suffixes = ["er", "e"]
for (let i = 0; i < color.length; i++) {
    if (i === 0) {
        console.log(`Mon ${i + 1}${suffixes[i]} choix est ${color[i]}`)
    }
    else 
        console.log(`Mon ${i + 1}${suffixes[1]} choix est ${color[i]}`)
    
}
