function capitalize(char = "jhbjvbh"){
    let tab =[]
    let a="" ,b=""
    console.log(char[0])
    for(let i=0;i<char.length;i++){
        if(i%2===0){
            a += char[i].toUpperCase()
            b +=char[i]
        }else{
            b += char[i].toUpperCase()
            a += char[i]
        }
        
    }
    tab=[a,b]
    return tab
}
console.log(capitalize())