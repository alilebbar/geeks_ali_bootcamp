const prompt = require('prompt-sync')();
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

prenom = prompt("Entrer votr prénom svp : ")

    if (prenom in guestList){
        console.log(`Hi! I'm ${prenom}, and I'm from ${guestList[prenom]}`)   
    }else{
        console.log(`Hi! I'm a guest.`)
    }


