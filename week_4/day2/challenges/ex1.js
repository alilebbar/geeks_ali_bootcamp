const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

const usernames=[]
gameInfo.forEach((e)=>{
   usernames.push(e.username+"!") 
})
console.log(usernames)

const winners = []
gameInfo.forEach((e)=>{
    if(e.score>5)winners.push(e.username)
})
console.log(winners)
let score=0
gameInfo.forEach((e)=>score+=e.score)
console.log("Le score total est",score)