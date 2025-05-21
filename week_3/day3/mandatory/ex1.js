function displayNumbersDivisible(diviseur){
    let somme = 0
    for (let i = 0; i <= 500; i++){
        if (i%diviseur == 0){
            process.stdout.write(i + " ")
            somme += i
        }
    }
    console.log(`\nLa somme des nombres divisibles par ${diviseur} entre 1 et 500 est : ${somme}`)

}
displayNumbersDivisible(3)
displayNumbersDivisible(45)