function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });
// Ce code crée une fonction asynchrone timesTwoAsync qui multiplie un nombre par 2 et retourne une promesse.
// Ensuite, il applique cette fonction à chaque élément du tableau arr en utilisant map, ce qui donne un tableau de promesses (promiseArr).
// Promise.all attend que toutes les promesses soient résolues, puis affiche le résultat (un tableau des valeurs multipliées par 2).