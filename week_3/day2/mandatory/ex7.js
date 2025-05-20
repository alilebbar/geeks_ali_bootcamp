const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
console.log(names);
let str = "";
for (let i = 0; i < names.length; i++) {
    str += names[i][0];
}
console.log(str);
// let str = "";