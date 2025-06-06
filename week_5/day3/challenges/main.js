const choix1 = document.getElementById("choix1")
const choix2 = document.getElementById("choix2")
const convertirBtn = document.getElementById("convertire")
const montant = document.getElementById("montant")
const totale = document.getElementById("totale")

const afficheData = (block,tab=[])=>{
    block.innerHTML+=`<option value=${tab[0]}>${tab[1]}</option>`
}

const getData = async ()=>{
    try {
        let response = await fetch("https://v6.exchangerate-api.com/v6/2e937bfc491d9bd7a1134322/codes")
        let data = await response.json()
        for(let i=0;i<data.supported_codes.length;i++){
            afficheData(choix1,data.supported_codes[i])
            afficheData(choix2,data.supported_codes[i])
        }
        return true
    } catch (error) {
        console.error(error.message)
    }
}

const convertire = async (op1,op2)=>{
    try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/2e937bfc491d9bd7a1134322/pair/${op1}/${op2}`)
        let data = await response.json()
        return data.conversion_rate
    } catch (error) {
        console.error(error)
    }
}

getData()

convertirBtn.addEventListener("click",async ()=>{
    let montV=montant.value
    let choix1V = choix1.value
    let choix2V = choix2.value
    let convertion = await convertire(choix1V,choix2V)
    let totaleV = montV*convertion
    totale.value = totaleV
})

