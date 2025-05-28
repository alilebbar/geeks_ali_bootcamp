class Dog {
  constructor(name) {
    this.name = name;
  }
};
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
}
/*Analyse :
Cette option tente d’utiliser this avant d’appeler super(), ce qui provoque une erreur.

❌ Remarque : En JavaScript, dans une classe qui hérite, il faut toujours appeler super() avant d'utiliser this, sinon une erreur ReferenceError sera levée.
*/
//Option 2

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}
/*Analyse :
Cette option appelle d’abord super(name), ce qui initialise correctement this.name dans la classe parente Dog,

puis ajoute this.size.

✅ Remarque : C’est la bonne pratique. On appelle super() avant d'utiliser this.*/

//Option 3

class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
}
/*Analyse :
Cette option appelle super(name) mais name n’est pas défini dans le constructeur (il n’est pas passé en paramètre).

❌ Remarque : Cela provoque une erreur ReferenceError car name est utilisé sans être déclaré.*/

// Option 4

class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}
/*Analyse :
Comme l’option 1, elle utilise this sans appeler super(), ce qui est invalide dans une classe dérivée.

❌ Remarque : Il est obligatoire d’appeler super() en premier dans le constructeur avant toute utilisation de this.
*/