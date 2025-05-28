function displayStudentInfo(objUser){
    // destructuration
   let {first,last}=objUser
   console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
