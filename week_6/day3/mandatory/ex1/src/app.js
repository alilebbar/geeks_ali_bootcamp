const express = require("express")
const app = express()
const {route} = require("./routes/routes.js")

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.listen(5000,()=>console.log("le serveur bien demarrer dans le port 5000 "))
app.use(route)