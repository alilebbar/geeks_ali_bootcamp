const makeAllCaps = (tab=[])=>{
    return new Promise((resolve, reject) => {
        for(let i of tab){
            if(typeof i !== "string") reject("votre tableau n'est pas string ! ")
        }
        resolve("votre tableau est string")
    })
}
const sortWords = (tab=[""])=>{
    return new Promise((resolve, reject) => {
        if(tab.length>4){
            let tabM=tab.map((e)=>e.toUpperCase()).sort()
            resolve(`voila votre tableau : ${tabM}`)
        }else{
            reject("tableau est inferieur a 4")
        }

        
    })
}

const tab = ["apple", "banana", "cherry","hello","ali"];
makeAllCaps(tab)
    .then(result => console.log(result))
    .catch(error => console.log(error));
sortWords(tab)
    .then(result => console.log(result))
    .catch(error=>console.log(error))