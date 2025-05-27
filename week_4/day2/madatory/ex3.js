const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// Output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// Explication:
// Le code utilise l'opérateur de décomposition (spread operator) pour combiner les éléments de deux tableaux (`vegetables` et `fruits`) avec d'autres éléments ('bread' et 'chicken') dans un nouveau tableau `result`.

const country = "USA";
console.log([...country]);

// Output: ['U', 'S', 'A']
// Explication:
// Le code utilise l'opérateur de décomposition pour convertir la chaîne de caractères `country` en un tableau de caractères, où chaque caractère de la chaîne devient un élément du tableau. Ainsi, le résultat est un tableau contenant les caractères individuels de la chaîne "USA".

let newArray = [...[,,]];
console.log(newArray);

// Output: [undefined, undefined]
// Explication:
// Le code utilise l'opérateur de décomposition pour créer un nouveau tableau à partir d'un tableau contenant deux éléments vides. Comme ces éléments vides ne sont pas définis, le résultat est un tableau contenant deux éléments `undefined`. L'opérateur de décomposition permet de "décomposer" les éléments du tableau source dans le nouveau tableau `newArray`.