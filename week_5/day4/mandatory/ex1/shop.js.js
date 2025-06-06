const data = require("./products")

console.log(data)

let affiche = (nomProduit)=>data.filter((e)=>e.name===nomProduit)

console.log(affiche("Laptop")[0].price,affiche("Laptop")[0].category)
console.log(affiche("Book")[0].price,affiche("Book")[0].category)
console.log(affiche("Table")[0].price,affiche("Table")[0].category)