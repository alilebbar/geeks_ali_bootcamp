const express = require("express")
const route = express.Router()
const {getQuestion,getScore,postReponse} = require("../controlers/crudApiTriviaControlers.js")

route.get("/quiz",getQuestion)
route.get("/quiz/score",getScore)
route.post("/quiz",postReponse)
module.exports= {route}