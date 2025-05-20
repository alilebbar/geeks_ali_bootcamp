const personne1 = {
    fullName:"ali",
    mass:90,
    height:180,
    IMC: function() { return this.mass / (this.height ** 2); }
};
const personne2 = {
    fullName:"anas",
    mass:62,
    height:170,
    IMC: function() { return this.mass / (this.height ** 2); }
};

function compareIMC(p1, p2) {
    if (p1.IMC() < p2.IMC()) {
        return p2.fullName;
    } else if (p1.IMC() > p2.IMC()) {
        return p1.fullName;
    } else {
        return "Both have the same IMC";
    }
}
console.log(compareIMC(personne1, personne2));