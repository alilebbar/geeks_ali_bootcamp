function lePlusGrandNombre(tab=[5,9,5,"a",4,8]){
    let g = 0
    for(let i in tab){
        if(g<tab[i] && isNaN(tab[i])===false){
            g=tab[i]
        }
    }
    return g
}
console.log(lePlusGrandNombre())