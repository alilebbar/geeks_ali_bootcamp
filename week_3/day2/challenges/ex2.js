etoile = "* "
for (let i = 0; i < 6; i++) {
    console.log(etoile)
    etoile += "* "

}
etoile = "*"

for(let i = 0; i<6;i++){
     for(let j = 0; j<i;j++){
        process.stdout.write(etoile + " ")
    }
    console.log("")
}