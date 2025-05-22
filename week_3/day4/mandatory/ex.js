
/*
//exercice 1
// Déclaration des variables
const h1 = document.querySelector("h1");
const h1T = h1.textContent;
const pAll = document.querySelectorAll("article p");
const button = document.createElement("button");
const buttonD = document.createElement("button");
const buttonG = document.createElement("button");

// Utilisation des variables
console.log(h1T);
pAll[pAll.length - 1].remove();

button.textContent = "changer la couleur";
button.setAttribute("id", "changeColor");
document.body.appendChild(button);

buttonD.textContent = "Eliminer h3";
buttonD.setAttribute("id", "ElimineH3");
document.body.appendChild(buttonD);

buttonG.textContent = "Endre en gras";
buttonG.setAttribute("id", "pGras");
document.body.appendChild(buttonG);

// Ajout des écouteurs d'événements
document.querySelector("#changeColor").addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

document.querySelector("#ElimineH3").addEventListener("click", () => {
    document.querySelector("h3").style.display = "none";
});

document.querySelector("#pGras").addEventListener("click", () => {
    document.querySelectorAll("p").forEach((e) => {
        e.style.fontWeight = "900";
    });
});

h1.addEventListener("mouseover", () => {
    const randomNumber = Math.random() * 100;
    h1.style.fontSize = randomNumber + "px";
});
pAll[1].style.transition = "opacity 0.5s"; // transition définie à l'avance

pAll[1].addEventListener("mouseover", () => {
    pAll[1].style.opacity = "0"; // effet de fondu
    setTimeout(() => {
        pAll[1].style.display = "none"; // suppression réelle après le fondu
    }, 500); // attendre que la transition se termine
});

//exercice 2
let form = document.querySelector("form");
let fnameId = document.querySelector("#fname");
let lnameId = document.querySelector("#lname");
let fnameAtr = document.getElementsByName("firstname");
let lnameAtr = document.getElementsByName("lastname");
let submit = document.querySelector("#submit");
let ul = document.querySelector(".usersAnswer");

console.log(form);
console.log(fnameId);
console.log(lnameId);
console.log(fnameAtr);
console.log(lnameAtr);

submit.addEventListener("click", (event) => {
    event.preventDefault(); // empêche le rechargement

    let nameF = fnameId.value.trim();
    let nameL = lnameId.value.trim();

    if (nameF !== "" && nameL !== "") {
        let li1 = document.createElement("li");
        li1.textContent = nameF;

        let li2 = document.createElement("li");
        li2.textContent = nameL;

        ul.appendChild(li1);
        ul.appendChild(li2);
    }
});
//exercice 3

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
//exercice 4
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
*/