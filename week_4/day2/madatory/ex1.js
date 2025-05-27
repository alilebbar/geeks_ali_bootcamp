const colors = ["Bleu", "Vert", "Rouge", "Orange", "Violet", "Indigo", "Jaune"];
colors.forEach((color, index) => {
    if(index === 0){
        console.log(`${index+1}er choix est ${color}.`)
    }else{
        console.log(`${index+1}ème choix est ${color}.`)
    }
})
if (colors.some(color=> color ==="Violet")) {
    console.log("Il y a du violet dans le tableau.");
}else {
    console.log("Il n'y a pas de violet dans le tableau.");
}