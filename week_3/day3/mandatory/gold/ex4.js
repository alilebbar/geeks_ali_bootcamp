const tab = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]

function op(item){
    let count = 0
    tab.forEach((e)=>{
        if (e.includes(item)){
            count++
        }
    })
    if(count === tab.length){
        return true
    }
    return false
}

console.log(op(3))
console.log(op(6))