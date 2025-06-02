const compareToTen = (numb)=>new Promise((resolve, reject) => {
    if(numb<=10){
        resolve("succer !")
    
    }else{
        reject("Échec !")
    }
})

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
