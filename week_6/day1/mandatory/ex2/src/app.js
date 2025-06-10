const express = require("express")
const app = express()
const {router} = require("./routes/todos.js")

app.listen(5000,()=>{
    console.log("le serveur est bien demarer dans le port 5000")
})
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(router)
