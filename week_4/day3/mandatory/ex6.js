/*
[2] === [2] faux
{} === {} vrai

*/
const object1 = { number: 5 }; //number = 5
const object2 = object1;  //number = 5
const object3 = object2; //number = 5
const object4 = { number: 5 };//number = 5

object1.number = 4;//number = 4
console.log(object2.number)//number = 4
console.log(object3.number)//number = 4
console.log(object4.number)//number = 5
 
class annimale{
    constructor(name,type,color){
        this.name=name
        this.type=type
        this.color=color
    }
}
class Mammal extends annimale{
    constructor(song,name,type,color){
        super(name,type,color)
        this.song=song
    }
    /**
     * 
     */
    sound(song) {
        console.log(`${song} je suis une ${this.type}, je m'appelle ${this.name} et je suis ${this.color}.`)
    }
}
let farmerCow = new Mammal("mooo","vachichi","vache",'marron et blan')
farmerCow.sound("mooo")