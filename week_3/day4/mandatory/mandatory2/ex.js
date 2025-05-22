/*
//ex 1 
let div = document.querySelector("#container")
let button = document.querySelector("#clear")

function paragraphe(){
    let p = document.createElement("p")
    p.textContent = "Hello World"
    div.appendChild(p)
}


function hello(){
    alert("Hello World")
}

setTimeout(hello,2000)
setTimeout(paragraphe,2000)
let click = false
button.addEventListener("click",()=>{
     click=true
})
let count = 0;

let intervalId = setInterval(() => {
    count++;
    paragraphe()

    if (count === 5 || click=== true) {
        clearInterval(intervalId); // Arrête après 5 exécutions
        
    }
}, 2000);


ex2 : 
let bigBox = document.getElementById("container")
let samllBox = document.getElementById("animate")
let button = document.getElementById("")
let largeurS = samllBox.offsetWidth
let largeurB = bigBox.offsetWidth


function myMove(){
let count = 0;

let intervalId = setInterval(() => {
    count++;
    samllBox.style.left = count+"px"

    if (count === largeurB-largeurS) {
        clearInterval(intervalId); // Arrête après 5 exécutions    
    }
}, 1);
}

*/