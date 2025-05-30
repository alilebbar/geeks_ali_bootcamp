let anagramme = (char1="",char2="")=>{
   let sansEspace1= char1.replaceAll(" ","").toLowerCase()
   let sansEspace2= char2.replaceAll(" ","").toLowerCase()
   if(sansEspace1.length!==sansEspace2.length)return false
   let trie1=sansEspace1.split("").sort()
   let trie2=sansEspace2.split("").sort()
   console.log(trie1)
   console.log(trie2)
   for(let i=0;i<trie1.length;i++){
    if(trie1[i]!==trie2[i])return false
   }
   return true
}
console.log(anagramme("Astronomer","Moon starer"))