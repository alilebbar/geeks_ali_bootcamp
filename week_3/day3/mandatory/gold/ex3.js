function changer(txt){
    let a=""
    for (i=0;i<txt.length;i++){
        if(txt[i] === txt[i].toUpperCase()){
            a += txt[i].toLowerCase()
        }else{
            a += txt[i].toUpperCase()
        }

    }
    return a
}

console.log(changer("A fin a "))