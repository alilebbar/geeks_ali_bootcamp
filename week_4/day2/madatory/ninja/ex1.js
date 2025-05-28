const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];
let total0=0
for(let i=0;i<data.length;i++){
    total0+=data[i].age*7
}
console.log(total0)
const total = data.reduce((acc,val)=>acc+val.age*7,0)
console.log(total)