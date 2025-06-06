
import persons from './data.js';  

// Fonction pour calculer l'âge moyen
function calculateAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / personArray.length;
  console.log(`L'âge moyen est : ${averageAge.toFixed(2)} ans`);
}

// Appel de la fonction avec le tableau importé
calculateAverageAge(persons);
