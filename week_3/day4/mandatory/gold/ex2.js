let button = document.querySelector("input")
let select = document.getElementById("colorSelect")
button.addEventListener("click",()=>{
            removecolor()
})
function removecolor(){
   let selectedOption = select.options[select.selectedIndex]
   select.removeChild(selectedOption)
}