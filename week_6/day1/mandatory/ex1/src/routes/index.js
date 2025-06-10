const express = require('express')
const router = express.Router()


router.get('/about',(req,res)=>{
    res.send("hello")
})
router.get("/",(req,res)=>{
    res.send("acceuil")
})
module.exports={router}