let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = ()=>{
    groceries.fruits.forEach(fruit => {
        console.log(fruit)
    })
}
const cloneGroceries = ()=>{
    let user = client;
    client="Betty"
    // non sera pas visible car la variable user a été déclarée avant le changement de valeur de client
    let shopping = groceries
    groceries.totalPrice = "35$";
    // le changement de valeur de totalPrice sera visible car shopping est une référence à l'objet groceries
    groceries.other.paid = false;
    // le changement de valeur de paid sera visible car shopping est une référence à l'objet groceries
}
displayGroceries();
cloneGroceries();
