const {triviaQuestions} = require("../data/data.js")

let count = 0
let score = 0
const getQuestion = (req,res)=>{
    if(!triviaQuestions)return res.send("il n'y a pas de data ! ")
    if(count===triviaQuestions.length)count=0
    res.json(triviaQuestions[count].question)
    count++
}
const getScore = (req,res)=>{
    res.send(score)
}
const postReponse = (req, res) => {
    const { question, answer } = req.body;
    const found = triviaQuestions.find(
        q => q.question === question && q.answer === answer
    );
    if (found) {
        score++;
        res.json("bonne réponse");
    } else {
        res.json("mauvaise réponse");
    }
};
module.exports = {getQuestion,getScore,postReponse}