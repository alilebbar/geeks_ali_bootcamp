let shoppingList = [];
let root = document.getElementById("root")
let form = document.createElement("form")
let input = document.createElement("input")
let btnAddItem = document.createElement("button")
let btnClearAll = document.createElement("button")
form.appendChild(input)
form.appendChild(btnAddItem)
form.appendChild(btnClearAll)
root.appendChild(form)
btnAddItem.textContent="ajouter au panier"
input.placeholder="Enter Votre Achat"
btnClearAll.textContent="vider le panier"
function addItem(item){
        shoppingList.push(item)
        input.value=""
}
function clearAll(){
        shoppingList=[]
        
}

btnAddItem.addEventListener("click",(e)=>{
    e.preventDefault()
    addItem(input.value)
    console.log(shoppingList)
})
btnClearAll.addEventListener("click",(e)=>{
    e.preventDefault()
    clearAll()
    console.log("panier supprimer avec succer")
})