const express = require("express")
const route = express.Router()
const {getHello,postWorld} = require('../controllers/controllers.js')


route.get("/hello",getHello)
route.post("/world",postWorld)


module.exports = route