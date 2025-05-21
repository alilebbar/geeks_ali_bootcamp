const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
} 
let shoppingList = ["banana", "orange", "apple"];
function myBill(stock, prices, shoppingList) {
    let total = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        let item = shoppingList[i];
       if (item in stock) { 
        if (stock[item] > 0) {
            console.log(`We have ${stock[item]} ${item}(s) in stock.`);
            total += prices[item];
            stock[item]--;
        } else {
            console.log(`Sorry, we don't have any more ${item}.`);
        }
        }
        
    }
    return total;
}
let total = myBill(stock, prices, shoppingList);
console.log(`Your total bill is: ${total}`);
