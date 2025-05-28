let search_word=(char="",word="")=>{
    let a = char.split(" ")
    let c=0
    a.forEach((e)=>{
        if(e===word)c++
    })
    return c
}

console.log(search_word('The quick brown fox', 'fox')); 
// Résultat attendu : "'fox' a été trouvé 1 fois."
