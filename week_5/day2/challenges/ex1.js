let category = document.getElementById("catg")
let button = document.getElementById("recherche")
let afficher = document.getElementById("affichage")
let supprimezAll = document.getElementById("deleteAll")
let giphs = []


const dataGiphy = async (datacategory) => {
    giphs = []
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${datacategory}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
        const data = await response.json();
        console.log(data);
        for(let i = 0; i < data.data.length; i++){
            giphs.push(data.data[i].images.fixed_height.url)
        }
        afficherDom()
    } catch (e) {
        console.error(e);
    }
}
const afficherDom = ()=>{
    afficher.innerHTML=""
    for(let i=0 ; i<giphs.length;i++ ){
        let mod = `<div classe="block" >
             <img src=${giphs[i]} alt="giph" id="img-${i}">
             <button classe="supprimez" onclick ="supprimezUn(${i})">suprimez</button>
              </div>`
        afficher.innerHTML += mod

              }
}
const supprimezUn = (idBlok)=>{
    giphs.splice(idBlok,1)
    afficherDom()
}

button.addEventListener("click",(e)=>{
    e.preventDefault()
    let categoryV = category.value.trim()
    dataGiphy(categoryV)
})
supprimezAll.addEventListener("click",(e)=>{
    giphs = [];
    afficherDom();
})
