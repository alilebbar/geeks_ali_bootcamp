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