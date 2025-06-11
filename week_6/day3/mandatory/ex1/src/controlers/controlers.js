const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

function readTasks() {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

function writeTasks(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

const getTasks = (req, res) => {
    const tasks = readTasks();
    if (tasks.length === 0) return res.send("Aucune tâche n'existe !");
    res.json(tasks);
};

const getTask = (req, res) => {
    const id = Number(req.params.id);
    const tasks = readTasks();
    const task = tasks.find(t => t.id === id);
    if (!task) return res.send("Id introuvable !");
    res.json(task);
};

const postTasks = (req, res) => {
    const { task } = req.body;
    if (!task) return res.send("Veuillez fournir une tâche !");
    const tasks = readTasks();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 0,
        task
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.send("Tâche ajoutée avec succès !");
};

const putTask = (req, res) => {
    const id = Number(req.params.id);
    const { task } = req.body;
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return res.send("Id non trouvé !");
    tasks[index].task = task;
    writeTasks(tasks);
    res.send("Tâche modifiée avec succès !");
};

const deleteTask = (req, res) => {
    const id = Number(req.params.id);
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return res.send("Id non trouvé !");
    tasks.splice(index, 1);
    writeTasks(tasks);
    res.send("Tâche supprimée avec succès !");
};

module.exports = {
    getTasks,
    getTask,
    postTasks,
    putTask,
    deleteTask
};
