const letters = ['x', 'y', 'z', 'z'];
let nombreRepeter = (char="",tab=[])=>{
    let cont=0
    tab.forEach((e)=>{
        if(e===char){
            cont++
        }
    })
    return cont
}
let dec = {}
for (let i=0;i<letters.length;i++){
        dec[letters[i]] = nombreRepeter(letters[i],letters)
}
console.log(dec)



const result = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(result); // { x: 1, y: 1, z: 2 }
