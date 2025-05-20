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
