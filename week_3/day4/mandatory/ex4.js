function calculateVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

let r = document.querySelector("#radius")
let v = document.querySelector("#volume")
let submit = document.querySelector("#MyForm")

submit.addEventListener("submit",(e)=>{
    e.preventDefault()
    let rValeur = parseFloat(r.value.trim())
    let volume = calculateVolume(rValeur).toFixed(2)
    v.removeAttribute("disabled")
    v.value=volume

})
r.addEventListener("input",(e)=>{
    v.value = ""
    v.setAttribute("disabled", "true");
})