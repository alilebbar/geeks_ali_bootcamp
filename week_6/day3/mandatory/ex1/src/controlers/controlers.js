const tasks = require("../data/tasks.json")

const getTasks = (req,res)=>{
    console.log(tasks)
    if(tasks.length<=0)return res.send("Aucune task n'existe !")
    res.json(tasks)
}

const getTask = (req, res) => {
    let id = Number(req.params.id);
    if (tasks.length <= 0) return res.send("Aucune tâche n'existe !");

    let task = tasks.find(e => e.id === id); 

    if (!task) return res.send("Id introuvable !");
    
    res.send(task);
};


const postTasks = (req,res)=>{
    let task = req.body.task
    let data = {id : tasks.length,task : task}
    tasks.push(data)
    res.send("task ajouter avec succee !")
}

const putTask = (req, res) => {
    let id = Number(req.params.id);
    let task = req.body.task;
    let index = tasks.findIndex(e => e.id === id);
    if (index !== -1) {
        tasks[index].task = task;
        res.send("task modifier avec succee !");
    } else {
        return res.send("id non trouver !");
    }
}
const deleteTask = (req,res)=>{
    let id = Number(req.params.id)
    let index = tasks.findIndex(e=>e.id===id)
    if(index!=-1){
        tasks.splice(index,1)
        res.send("task supprimer avec succee !")

    }else{
       return res.send("id non trouver !")
    }
}
module.exports={getTasks,getTask,postTasks,putTask,deleteTask}