const couleurs = [
  "#FF6633", // Orange vif
  "#FF33FF", // Rose flashy
  "#00B3E6", // Bleu clair
  "#E6B333", // Jaune doré
  "#3366E6", // Bleu
  "#999966", // Kaki
  "#99FF99", // Vert pastel
  "#B34D4D", // Rouge brique
  "#80B300", // Vert olive
  "#809900", // Vert mousse
  "#E6B3B3", // Rose poudré
  "#6680B3", // Bleu-gris
  "#66991A", // Vert acide
  "#FF99E6", // Rose clair
  "#CCFF1A", // Jaune citron
  "#FF1A66", // Rouge framboise
  "#E6331A", // Rouge corail
  "#33FFCC", // Turquoise
  "#66994D", // Vert forêt
  "#B366CC", // Violet doux
  "#4D8000", // Vert foncé
  "#B33300", // Terre cuite
  "#CC80CC", // Mauve clair
  "#66664D" // Vert-gris
];
const numberL =20
const numberC=40
let etaMouse = false
let choixDeCouleur = "black"
//cree les couleurs
function creeCouleur(){
    let choixCouleur = document.getElementById("choixCouleur")
    for (let a in couleurs){
        let divC = document.createElement("div")
        divC.classList.add("divCouleur")
        divC.style.backgroundColor = couleurs[a]
        divC.addEventListener("click",()=>{
            choixDeCouleur = couleurs[a]
        })
        choixCouleur.appendChild(divC)
    }
}
function creeDessin(){
    let dessin = document.getElementById("dessin")
    dessin.ondragstart = (e) => e.preventDefault();
    dessin.style.gridTemplateColumns = `repeat(${numberC},1fr)`
    dessin.style.gridTemplateRows = `repeat(${numberL},1fr)`
    dessin.addEventListener("mousedown",()=>{
        etaMouse=true
    })
    dessin.addEventListener("mouseup",()=>{
        etaMouse=false
    }) 
    for(let i=0 ; i<numberL*numberC;i++ ){
        let divD = document.createElement("div")
        divD.classList.add("caseDessin")
        divD.addEventListener("mouseover", mouseOver)
        dessin.appendChild(divD)
    }

}
function mouseOver(){
  if(etaMouse){
  let dessin = document.getElementById("dessin")  
  dessin.classList.remove("rendreBlanc")
  this.style.backgroundColor = choixDeCouleur
}
}
function effacer(){
    let dessin = document.getElementById("dessin")
    let btn = document.getElementById("button")
    btn.addEventListener("click",(e)=>{
        dessin.innerHTML=""
        creeDessin()
    })
}

creeCouleur()
creeDessin()
effacer()
