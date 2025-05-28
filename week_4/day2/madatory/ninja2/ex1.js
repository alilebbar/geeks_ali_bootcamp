const menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
]
let veriffyDessert = menu.some(item => item.type === "dessert")
console.log(veriffyDessert)
let veriffyStarter = menu.every(item => item.type==="starter")
console.log(veriffyStarter)
if(!menu.some(item => item.type === "main course")){
    menu.push({type :"main course" ,name :"rfissa"})
}
console.log(menu)

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

const updatedMenu = menu.map(item => {
    const isVegetarian = vegetarian.some(veg =>
        item.name.toLowerCase().includes(veg)
    );
    return { ...item, vegetarian: isVegetarian };
});
console.log(updatedMenu);
