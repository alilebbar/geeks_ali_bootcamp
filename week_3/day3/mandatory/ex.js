/*ex 1 */
function displayNumbersDivisible(diviseur){
    let somme = 0
    for (let i = 0; i <= 500; i++){
        if (i%diviseur == 0){
            process.stdout.write(i + " ")
            somme += i
        }
    }
    console.log(`\nLa somme des nombres divisibles par ${diviseur} entre 1 et 500 est : ${somme}`)

}
displayNumbersDivisible(3)
displayNumbersDivisible(45)
/*ex 2 */
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
} 
let shoppingList = ["banana", "orange", "apple"];
function myBill(stock, prices, shoppingList) {
    let total = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        let item = shoppingList[i];
       if (item in stock) { 
        if (stock[item] > 0) {
            console.log(`We have ${stock[item]} ${item}(s) in stock.`);
            total += prices[item];
            stock[item]--;
        } else {
            console.log(`Sorry, we don't have any more ${item}.`);
        }
        }
        
    }
    return total;
}
let total = myBill(stock, prices, shoppingList);
console.log(`Your total bill is: ${total}`);

/*ex 3 */
function changeEnough(itemPrice, amountOfChange){
    sum=0
    quarter = 0.25 * amountOfChange[0]
    dime = 0.10 * amountOfChange[1]
    nickel = 0.05 * amountOfChange[2]
    penny = 0.01 * amountOfChange[3]
    amountOfChange = [quarter, dime, nickel, penny]
    for (let i = 0; i < amountOfChange.length; i++) {
        sum += amountOfChange[i]
    }
    if (itemPrice <= sum) {
        return true;
    }else {
        return false;
    }
}
console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(0.75, [0,0,20,5]))
console.log(changeEnough(14.11, [2,100,0,0]))
/*ex 4 */
const prompt = require('prompt-sync')();
function hotelCost(){
    let nombreNuit = parseInt(prompt("Enter the number of nights: "));
    while (nombreNuit <= 0 || nombreNuit == "") {
        nombreNuit = parseInt(prompt("Enter the number of nights: "));
    }
    prixNuit = 140;
    total = nombreNuit * prixNuit;
    return total;
}

function planeRideCost(){
    let destination = prompt("Enter the destination: ");
    while (destination == "" || destination == null ) {
        destination = prompt("Enter the destination: ");
    }
    switch (destination) {
        case "London":
            prixVol = 183;
            break;
        case "Paris":
            prixVol = 220;
            break;
        default:
            prixVol = 300;
            
    }
    return prixVol;
}

function rentalCarCost(){
    let nombreJours = parseInt(prompt("Enter the number of days (pour la voiture location): "));
    while (nombreJours <= 0 || nombreJours == "") {
        nombreJours = parseInt(prompt("Enter the number of days (pour la voiture location): "));
    }
    prixJour = 40;
    total = nombreJours * prixJour;
    if (nombreJours > 10) {
        total =total * 0.95;
    } 
    return total;
}
function totalVacationCost(){
    let hotel = hotelCost();
    let vol = planeRideCost();
    let location = rentalCarCost();
    let total = hotel + vol + location;
    console.log(`The total cost of your vacation is: ${total}`);
}
totalVacationCost();
/*ex 5 */
// Récupérer le div et l'afficher
let div2 = document.getElementById("container");
console.log(div2);

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
div2.classList.add("light");

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

/*ex 6 */
const div = document.querySelector("div");
div.setAttribute('id', 'socialNetworkNavigation');

const ul = document.querySelector("ul");


const li = document.createElement('li');


const logoutText = document.createTextNode("Logout");


li.appendChild(logoutText);

ul.appendChild(li);
first = ul.firstElementChild.textContent
last = ul.lastElementChild.textContent
console.log(first)
console.log(last)
/*ex 7 */
let allBooks = [
  {
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG",
    alreadyRead: true
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "https://booksondemand.ma/cdn/shop/products/1_dc7d5ded-eff3-48dd-b8a9-14ea9d25104d.jpg?v=1668004764&width=823",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  // Créer une div pour chaque livre
  const bookDiv = document.createElement("div");

  // Ajouter titre et auteur
  const text = document.createElement("p");
  text.textContent = `${book.title} écrit par ${book.author}`;

  // Image du livre
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  // Appliquer couleur si déjà lu
  if (book.alreadyRead) {
    text.style.color = "red";
  }

  // Ajouter au DOM
  bookDiv.appendChild(text);
  bookDiv.appendChild(img);
  section.appendChild(bookDiv);
});
