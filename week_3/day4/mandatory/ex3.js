
let allBoldItems = ""
function getBoldItems(){
    let strangAll = document.querySelectorAll("strong")
    strangAll.forEach((e)=>{
        allBoldItems += e.textContent + " "
    })
    console.log(allBoldItems)
}
function highlight(){
    let strangAll = document.querySelectorAll("strong")
    strangAll.forEach((e)=>{
        e.style.color = "blue"
    })
}
function returnItemsToDefault() {
     let strangAll = document.querySelectorAll("strong")
     strangAll.forEach((e)=>{
        e.style.color = "black"
    })
}
let p = document.querySelector("p")
p.addEventListener("mouseover",()=>{
    highlight()
})
p.addEventListener("mouseout",()=>{
    returnItemsToDefault()
})