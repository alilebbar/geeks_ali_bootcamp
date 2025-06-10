const express = require("express")
const router = express.Router()

const todos = ["regim","sport","lire des livre"];

router.get("/todos",(req,res)=>{
    if(!todos)res.send("liste est vide")
    res.send(todos)
})
router.get("/todos/:idTodo",(req,res)=>{
    let idTodo=Number(req.params.idTodo)
if(todos[idTodo] === undefined) return res.send("todo n'existe pas dans la list")
    res.send(todos[idTodo])
})
router.delete('/todos/:idTodo',(req,res)=>{
    let idTodo=Number(req.params.idTodo)
    if(todos[idTodo] === undefined) return res.send("todo n'existe pas dans la list")
    todos.splice(idTodo,1)
    res.send("data supprimer avec succee")
})
router.post('/todos',(req,res)=>{
    let data = req.body
    if(!data.name) return res.send("un probleme lors de chargement de data")
    todos.push(data.name)
    res.send("data entrer avec succes")

})
router.put("/todos/:idTodo",(req,res)=>{
    let idTodo=Number(req.params.idTodo)
    if(todos[idTodo]===undefined)return res.send("todo n'existe pas dans la list")
    let data = req.body.name
    if(!data)return res.send("un probleme lors de chargement de data")
    todos[idTodo]=data
    res.send("data est modifier avec succee")
})
module.exports = {router}