let taille = document.getElementById("inputTaille"); 
let buttonT = document.getElementById("confirmerTaille");
let pT = document.getElementById("pTaille");
let ing1V = document.getElementById("ing1");
let ing2v = document.getElementById("ing2");
let ing3v = document.getElementById("ing3");
let pIng = document.getElementById("p2");
makeJuice = (choixT) =>{
    let ingredients = [];
    let addIngredients = (ing1,ing2,ing3) => {
     ingredients.push(ing1, ing2, ing3);
    }
    addIngredients(ing1V.value, ing2v.value, ing3v.value);
    addIngredients("orange", "kiwi", "pomme");
    let displayJuice  = () => {
        pT.textContent = `le client veut un jus de taille ${choixT} avec `;
        for (let i = 0; i < ingredients.length; i++) {
            pT.textContent += `${ingredients[i]} `;
        }
    }
    displayJuice();
    return addIngredients;
}
buttonT.addEventListener("click", () => {
    makeJuice(taille.value)(ing1V.value, ing2v.value, ing3v.value);
})