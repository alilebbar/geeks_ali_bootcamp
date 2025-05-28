[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});

// [2,4,6] ces valeurs sont le résultat de la fonction map
// Explication:
// Le code utilise la méthode `map` pour itérer sur chaque élément du tableau `[1, 2, 3]`.
//  Pour chaque élément `num`, il vérifie si `num` est de type `number`. Si c'est le cas, 
// il retourne le double de `num` (c'est-à-dire `num * 2`). Si `num` n'est pas un nombre,
//  la fonction retourne `undefined`.
//  Le résultat final est un nouveau tableau contenant les valeurs doublées des nombres d'origine,
//  soit `[2, 4, 6]`.