/*exercice 1*/
const people = ["Greg", "Mary", "Devon", "James"];

people.splice(people.indexOf("Greg"), 1)
console.log(people)

people[people.indexOf("James")] = "Jason"
console.log(people)

people.push("abdelali")
console.log(people)


console.log(people.indexOf("Mary"))

sansMA=people.slice(1,3)
console.log(sansMA)

console.log(people.indexOf("Foo"))
// parceque Foo n'est pas dans le tableau, il renvoie -1
last = people[people.length - 1]
console.log(last)

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Devon") {
        break
    }
    console.log(people[i])
}
/*exercice 2*/
let color = ["red", "blue", "green", "yellow", "purple"]
for (let i = 0; i < color.length; i++) {
    console.log(`Mon choix n°${i+1} est ${color[i]}`)
}
/*« Mon 1er choix », « Mon 2e choix », « Mon 3e choix », en choisissant le bon suffixe pour chaque nombre.
(Indice : crée un tableau de suffixes pour faire le bonus.)*/
console.log("---------------------------------------")
let suffixes = ["er", "e"]
for (let i = 0; i < color.length; i++) {
    if (i === 0) {
        console.log(`Mon ${i + 1}${suffixes[i]} choix est ${color[i]}`)
    }
    else 
        console.log(`Mon ${i + 1}${suffixes[1]} choix est ${color[i]}`)
    
}
/*exercice 3*/
const prompt = require('prompt-sync')();
number = parseInt(prompt("Enter a number"));
console.log(typeof(number));
while (number <10){
    number = prompt("Enter a number");
}    
/*exercice 4*/
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors)
console.log(`dans l'étage 1 il y a ${building.numberOfAptByFloor.firstFloor} appartements,et dans le 3e étage on a ${building.numberOfAptByFloor.thirdFloor} appartements`)

console.log(`le nom du locataire est ${building.nameOfTenants[1]} et le nombre de chambres est ${building.numberOfRoomsAndRent.dan[0]} `)

if (building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]> building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200
    console.log(`le loyer de ${building.nameOfTenants[1]} est ${building.numberOfRoomsAndRent.dan[1]}`)
}
/*exercice 5*/
family={
    name: "Smith",
    members: [
        {
            name: "John",
            age: 30,
            relationship: "father"
        },
        {
            name: "Jane",
            age: 28,
            relationship: "mother"
        },
    ]
}

for (let i in family) {
    console.log(i)
}
for (let i in family) {
    console.log(family[i])
}
/*exercice 6*/
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let str = ""
for (let i in details) {
    str += `${i} ${details[i]} `
}
console.log(str)
/*exercice 7*/
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
console.log(names);
let str2 = "";
for (let i = 0; i < names.length; i++) {
    str2 += names[i][0];
}
console.log(str2);
// let str = "";