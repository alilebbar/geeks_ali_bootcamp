let reverseArray = (tab=[])=>{
    return tab.reverse()
}


reverseArray([1,2,3,4,5]) // [5,4,3,2,1]  
reverseArray([1,2])       // [2,1]  
reverseArray([])          // []  
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10])) // [10,9,8,7,6,5,4,3,2,1]
