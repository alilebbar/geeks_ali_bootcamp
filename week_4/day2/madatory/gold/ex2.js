[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
//[1,2, 0, 1, 2, 3];
//ces valeurs sont le résultat de la fonction reduce
// Explication:
// Le code utilise la méthode `reduce` pour combiner les éléments de deux tableaux imbriqués `[[0, 1], [2, 3]]` en un seul tableau.
// La fonction de rappel prend deux arguments : `acc` (l'accumulateur) et `cur` (l'élément courant).

