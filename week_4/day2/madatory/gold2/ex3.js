const tab = [NaN, 0, 15, false, -22, '', undefined, 47, null]
const rendrePropre = (array=[])=>{
    const newArray = array.filter(
        (e) => e !== undefined && e !== 0 && e !== null && e !== "" && e !== false && !Number.isNaN(e)
    )
    return newArray
}
const a = rendrePropre(tab)
console.log(a)