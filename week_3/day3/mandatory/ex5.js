// Récupérer le div et l'afficher
let div = document.getElementById("container");
console.log(div);

// Remplacer “Pete” par “Richard”
let peteLi = document.querySelectorAll(".list")[0].children[1];
peteLi.textContent = "Richard";

// Supprimer le deuxième <li> du deuxième <ul> (Sarah)
let secondUl = document.querySelectorAll(".list")[1];
secondUl.children[1].remove();

// Changer le 1er <li> de chaque <ul> par ton nom
document.querySelectorAll(".list").forEach(ul => {
    ul.children[0].textContent = "abdelali";
});

// Ajouter les classes demandées
let firstUl = document.querySelectorAll(".list")[0];
firstUl.classList.add("student_list", "university", "attendance");

let secondUl2 = document.querySelectorAll(".list")[1];
secondUl2.classList.add("student_list");

// Ajouter une classe pour fond bleu clair et du padding au div
div.classList.add("light");

// Cacher le <li> contenant “Dan”
let danLi = secondUl2.lastElementChild;
danLi.style.display = "none";

// Ajouter une bordure à “Richard”
peteLi.classList.add("borderRichard");

// Ajouter du style via <style> injecté
let css = `<style>
    .light {
        background-color: lightblue;
        padding: 10px;
    }
    .borderRichard {
        border: 2px solid black;
        padding: 5px;
    }
    body {
        font-size: 18px;
        font-family: Arial, sans-serif;
    }
</style>`;
document.head.insertAdjacentHTML("beforeend", css);

// Bonus : Alerte si fond light blue
let bgColor = getComputedStyle(div).backgroundColor;
if (bgColor === "rgb(173, 216, 230)") {
    let names = document.querySelectorAll(".list")[0].children;
    alert(`Hello ${names[0].textContent} and ${names[1].textContent}`);
}
