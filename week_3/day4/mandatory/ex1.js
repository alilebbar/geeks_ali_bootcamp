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