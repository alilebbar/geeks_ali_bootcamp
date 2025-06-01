const quotes = [
  {
    id: 0,
    author: "Albert Einstein",
    quote: "La logique vous mènera d’un point A à un point B. L’imagination vous mènera partout.",
    like: false
  },
  {
    id: 1,
    author: "Nelson Mandela",
    quote: "Cela semble toujours impossible, jusqu’à ce qu’on le fasse.",
    like: false
  },
  {
    id: 2,
    author: "Oscar Wilde",
    quote: "Soyez vous-même, tous les autres sont déjà pris.",
    like: false
  },
  {
    id: 3,
    author: "Steve Jobs",
    quote: "Votre temps est limité, ne le gâchez pas en vivant la vie de quelqu’un d’autre.",
    like: false
  },
  {
    id: 4,
    author: "Confucius",
    quote: "Choisissez un travail que vous aimez et vous n’aurez pas à travailler un seul jour de votre vie.",
    like: false
  }
];

let btnGenerer = document.getElementById("btnGenerer")
let affichage = document.getElementById("affichage")
let btnAjouter = document.getElementById("btnAjouter")
let formAjouter = document.getElementById("formAjouter")
let inputCitation = document.getElementById("citation")
let inputAuteur = document.getElementById("auteur")
let btnforQuote = document.getElementById("btnforQuote")
let formFiltre = document.getElementById("formFiltre")
let afficherFiltre = document.getElementById("afficherFiltre")
let btnFilter = document.getElementById("btnFilter")
let quotesSlice = [...quotes]
let count = 0
let suivantPrecedent = document.getElementById("suivantPrecedent")

const quoteHasard = ()=>{
    if(quotesSlice.length === 0) quotesSlice = [...quotes];
    let index = Math.floor(Math.random() * quotesSlice.length);
    let q = quotesSlice[index];
    quotesSlice.splice(index, 1);
    console.log(q)
    creeButtons()
    affichage.textContent = q.quote
    affichage.id=q.id
}
const ajouter = ()=>{
    let data = new FormData(formAjouter)
    if(!data)return

    let quote = {
        id: quotes.length,
        author: data.get("auteur"),
        quote: data.get("citation"),
        like: false
    }
    
    quotes.push(quote)
    inputAuteur.value = "";
    inputCitation.value = "";
    quotesSlice = [...quotes]
}
function creeButtons(){
    let btnNombreEspace = document.createElement("button")
    let btnNombreSansEspace = document.createElement("button")
    let btnNombreMot = document.createElement("button")
    let btnLike = document.createElement("button")
   
    btnNombreEspace.textContent = "Longeur"
    btnNombreSansEspace.textContent = "Longeur sans Espace"
    btnNombreMot.textContent= "Mots"
    btnLike.textContent = "Like"

    btnNombreEspace.classList.add("espace")
    btnNombreSansEspace.classList.add("sansEspace")
    btnNombreMot.classList.add("mots")
    btnLike.classList.add("like")
    
    btnforQuote.innerHTML=""
    btnforQuote.appendChild(btnNombreEspace)
    btnforQuote.appendChild(btnNombreSansEspace)
    btnforQuote.appendChild(btnNombreMot)
    btnforQuote.appendChild(btnLike)

    btnNombreEspace.addEventListener("click",(e)=>{
    nombreEspace()
    })
    btnNombreSansEspace.addEventListener("click",(e)=>{
    nombreSansEspace()    
    })
    btnNombreMot.addEventListener("click",(e)=>{
    nombreMot()    
    })
    btnLike.addEventListener("click",(e)=>{
    liker()
    })

}
function nombreEspace(){
    let chaine = affichage.textContent
    alert(`longeur de citation avec les espace est ${chaine.length}`)
}
function nombreSansEspace(){
    let chaine = affichage.textContent.replaceAll(" ","")
    alert(`Longeur de citation sans les espace est ${chaine.length}`)
}
function nombreMot(){
    let chaine = affichage.textContent.split(" ")
    alert(`Nombre de mots est ${chaine.length}`)
}
function liker(){
    let idchaine = affichage.id
    quotes[idchaine].like=!quotes[idchaine].like
    let likeVal=quotes[idchaine].like
    if(likeVal)
    {
        alert(`vous avez aimer la citation !`)
    }else{
        alert(`vous n'aimez plus la citation !`)
    }
    console.log(quotes[idchaine])

}

function filtrer(){
    let data = new FormData(formFiltre)
    let quotesFiltrer = quotes.filter((e)=>e.author === data.get("nomAuteur"))
    if (count < 0 || count >= quotesFiltrer.length) return
    afficherFiltre.textContent = quotesFiltrer[count].quote
    return quotesFiltrer.length
}

function creeButtonsSwinper(long){
    let btnSuivante = document.createElement("button")
    let btnPrecedente = document.createElement("button")

    btnSuivante.textContent = "Suivante"
    btnPrecedente.textContent = "precedente"

    btnSuivante.id = "btnsuivante"
    btnPrecedente.id = "btnprecedente" 

    suivantPrecedent.appendChild(btnPrecedente)
    suivantPrecedent.appendChild(btnSuivante)
    

    btnSuivante.addEventListener("click",(e)=>{
        if(count>=long-1){
            count=0
            filtrer()
        }else{
            count++
            filtrer()
        }
        
    })
    btnPrecedente.addEventListener("click",(e)=>{
        if(count<0){
            count=long
            filtrer()
        }else{
            count--
            filtrer()
        }
        
    })
}

btnGenerer.addEventListener("click",(e)=>{
    quoteHasard()
    
})

btnAjouter.addEventListener("click", (e) => {
    e.preventDefault();
    ajouter();
});

btnFilter.addEventListener("click",(e)=>{
    e.preventDefault()
    count=0
    let long = filtrer()
    if(long>1){
        creeButtonsSwinper(long)
    }
})