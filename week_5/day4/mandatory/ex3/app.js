let {lireFichier,ecrireFichier} = require("./fileManager")
lireFichier("./hello_world.txt").then((e)=>{
console.log(e)
})
ecrireFichier("./by_world.txt","Writing to the file")
