const users = { user1: 18273, user2: 92833, user3: 90315 }
let userst = Object.entries(users).map((e)=>[e[0],e[1]*2])
console.log(userst)