function abbrevName(txt){
    let first = txt.slice(0,txt.indexOf(" "))
    let seconde = txt.slice(txt.indexOf(" ")+1,txt.length)
    chaine = `${first} ${seconde[0].toUpperCase()}.`
    return chaine
 
}
console.log(abbrevName("Abdelali Lebbar"))