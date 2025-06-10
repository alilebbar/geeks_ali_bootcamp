const express = require("express")
const app = express()
const {route} = require("./routes/crudApiTriviaRoutes.js")

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended : false}))
app.use(route)
app.listen(5000,()=>console.log("le serveur a demarrer corectement dans le port 5000"))



