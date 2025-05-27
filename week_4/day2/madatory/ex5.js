const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const star = epic.reduce((Acc,Val)=>Acc+Val+" ","")
console.log(star)