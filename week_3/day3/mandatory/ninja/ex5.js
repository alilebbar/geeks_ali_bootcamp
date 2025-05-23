function unique(tab = [3,3,3,5,8,5,8,5,8,8]){
    let tab2=new Set(tab)
    tab = Array.from(tab2)
    return tab
}
console.log(unique())
