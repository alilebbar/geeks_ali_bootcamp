class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}
//I'm pink. 🌸sera afficher au premier car super() est situer apres le console.log()

const pet = new Flamingo();