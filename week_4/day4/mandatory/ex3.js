const marioGame = {
  detail : "Un jeu incroyable !",
  characters : {
      mario : {
        description:"Petit et saute beaucoup. Aime les princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Grand et vert. Déteste les princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Belle princesse.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
let jsonMod=JSON.stringify(marioGame,null,2)
debugger;
console.log(jsonMod)
//Les objets imbriqués (characters, mario, etc.) sont automatiquement convertis en structures JSON imbriquées.