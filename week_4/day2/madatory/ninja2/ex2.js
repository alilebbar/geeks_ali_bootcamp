let string_shop = (chaine="",nmb=0)=>{
    let tab=[]
    for(let i=0;i<=chaine.length;i++){
        if(i%nmb===0&&i>=nmb){
            let str=""
            for(let j=i-nmb;j<i;j++){
                
                    console.log(j)
                    str+=chaine[j]
            }
            if(str!==undefined)
            tab.push(str)
        }

    }
    return tab
}
console.log(string_shop('developers', 2));  
// Résultat attendu : ["de", "ve", "lo", "pe", "rs"]
