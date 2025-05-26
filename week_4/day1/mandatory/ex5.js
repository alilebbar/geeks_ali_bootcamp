// 1. Déclaration de fonction
function kgToGrams1(kg) {
  return kg * 1000;
}
console.log(kgToGrams1(5)); // 5000

// 2. Expression de fonction
const kgToGrams2 = function(kg) {
  return kg * 1000;
};
console.log(kgToGrams2(3)); // 3000

// 3. Différence : une déclaration de fonction est hoistée (accessible avant sa définition), une expression ne l’est pas.

// 4. Fonction fléchée en une ligne
const kgToGrams3 = kg => kg * 1000;
console.log(kgToGrams3(2)); // 2000
