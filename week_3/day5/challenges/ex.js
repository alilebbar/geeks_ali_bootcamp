let inputTask = document.getElementById("input")
let ajouterButton = document.getElementById("add")
let ul = document.getElementById("list")
let clear = document.getElementById("clear")
let x=document.querySelectorAll(".x")
let tasks = []
ajouterButton.addEventListener("click",()=>{

    if(!isNaN(inputTask.value))
    {
        console.log("erreur de frape")
    }
    else{
        tasks.push(inputTask.value)
        console.log(tasks)
        afficherList()
    }
})

function afficherList(bol=false){
    let tasksAffiche= tasks.reverse()
    ul.innerHTML=""
    tasksAffiche.forEach((e)=>{
        if(!bol){
        ul.innerHTML += `<li>
                            <i class="fas fa-times x" ></i>
                            <input type="checkbox" name=${e} id=${e}>
                            <label for=${e}>${e}</label>
                            <hr/>
                        </li>`
        }
    })
    tasks.reverse()
}


clear.addEventListener("click",(e)=>{
        tasks =[]
        afficherList()
    })
ul.addEventListener("click", function(e) {
    console.log(e)
    if (e.target.classList.contains("x")) {
        // Get the task label text (the task name)
        const taskLabel = e.target.nextElementSibling.nextElementSibling.textContent;
        // Remove the task from the tasks array
        tasks = tasks.filter(task => task !== taskLabel);
        afficherList();
    }
    if (e.target.type === "checkbox") {
        if (e.target.checked) {
            e.target.nextElementSibling.classList.add("cheked");
        } else {
            e.target.nextElementSibling.classList.remove("cheked");
        }
    }
    }
);

