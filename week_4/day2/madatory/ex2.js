const colors = ["Bleu", "Vert", "Rouge", "Orange", "Violet", "Indigo", "Jaune"];
const ordinal = ["th", "st", "nd", "rd"];
let char=""
colors.forEach((color,index)=>{
    char=index===0? ordinal[1] : index===1? ordinal[2] : index === 2? ordinal[3] : ordinal[0]
    console.log(`${index+1}${char} choice is ${color} `)
})