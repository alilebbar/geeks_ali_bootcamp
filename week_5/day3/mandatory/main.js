const contenaire = document.getElementById("contenaire")
const button = document.querySelector("button")
const loader = document.getElementById("load")

const afficher = (name,taille,genre,annee,planet)=>{
    contenaire.innerHTML=""
    let model = `<div id="contenaire">
        <h3>${name}</h3>
        <p>${taille}</p>
        <p>${genre}</p>
        <p>${annee}</p>
        <p>${planet}</p>
    </div>`
    contenaire.innerHTML=model

}
const getPlanet = async (planetApi)=>{
    try {
        const response= await fetch(planetApi)
        const data = await response.json()
        return data.result.properties.name
    } catch (error) {
        console.error(error.message)
    }
}

const getdata = async (people)=>{
    
    loader.classList.add("loader")
    try{
        const response = await fetch(`https://www.swapi.tech/api/people/${people}`)
        const data =await response.json()
        console.log(data)
        let nameV = data.result.properties.name
        let tailleV = data.result.properties.height
        let genreV = data.result.properties.gender
        let anneeV = data.result.properties.birth_year
        let planetL = data.result.properties.homeworld
        let planetV = await getPlanet(planetL)
        afficher(nameV,tailleV,genreV,anneeV,planetV)
        loader.classList.remove("loader")
    }catch(e){
        console.error(e.message)
    }
}

button.addEventListener("click",(e)=>{
    const numb = Math.floor(Math.random() * 9) + 1
    console.log(numb)
    getdata(numb)
})