const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let str = ""
for (let i in details) {
    str += `${i} ${details[i]} `
}
console.log(str)