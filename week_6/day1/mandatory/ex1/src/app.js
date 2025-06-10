const express = require('express')
const app = express()
const {router} = require("./routes/index.js")


app.use(express.json())
app.use(express.static('public'))
app.use(router)



app.listen(5000,()=>{
    console.log("le serveur est bien demarrer")
})


