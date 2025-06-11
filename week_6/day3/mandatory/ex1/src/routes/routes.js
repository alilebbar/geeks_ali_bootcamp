const express = require("express")
const route = express.Router()
const {getTasks,getTask,postTasks,putTask,deleteTask} = require("../controlers/controlers.js")


route.get("/tasks",getTasks)
route.get("/tasks/:id",getTask)
route.post("/tasks",postTasks)
route.put("/tasks/:id",putTask)
route.delete("/tasks/:id",deleteTask)


module.exports= {route}