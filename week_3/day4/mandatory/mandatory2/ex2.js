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
