const express = require("express")
const app = express()
const {router} = require("./routes/routes.js")

app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(router)
app.listen(5000,()=>console.log("le serveur bien demarrer dans le port 5000 "))

