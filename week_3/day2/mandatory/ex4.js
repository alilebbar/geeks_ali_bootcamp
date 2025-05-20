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