let tab=[]
let adjcent = Array(9).fill("");
let player = ""
let x=document.getElementById("x")
let o=document.getElementById("o")
let rejouer=document.getElementById("rejouer")
let switche = document.getElementById("mode")
let isWin=false
let ordinateur=""
let mode = true
const checkWin = (player) => {
  return (
    (adjcent[0] === player && adjcent[1] === player && adjcent[2] === player) ||
    (adjcent[3] === player && adjcent[4] === player && adjcent[5] === player) ||
    (adjcent[6] === player && adjcent[7] === player && adjcent[8] === player) ||
    (adjcent[0] === player && adjcent[3] === player && adjcent[6] === player) ||
    (adjcent[1] === player && adjcent[4] === player && adjcent[7] === player) ||
    (adjcent[2] === player && adjcent[5] === player && adjcent[8] === player) ||
    (adjcent[0] === player && adjcent[4] === player && adjcent[8] === player) ||
    (adjcent[2] === player && adjcent[4] === player && adjcent[6] === player)
  );
};
const modeFacile = () => {
    if (adjcent.filter(cell => !cell).length === 0) {
        alert("Match Null")
        return
    } // match nul

    let iC = Math.floor(Math.random() * 9);
    while (adjcent[iC]) {
        iC = Math.floor(Math.random() * 9);
    }
    const cell = document.querySelector(`#cell-${iC} p`);
    cell.textContent = ordinateur;
    adjcent[iC] = ordinateur;

    if (checkWin(ordinateur)) {
        alert("Vous avez perdu !")
        isWin = true;
    }
};
function trouverCoupGagnantAvecCheck(symbole) {
    for (let i = 0; i < 9; i++) {
        if (adjcent[i] === "") {
            adjcent[i] = symbole; 
            const gagne = checkWin(symbole); 
            adjcent[i] = ""; 
            if (gagne) return i;
        }
    }
    return null;
}

const modeDifficile = () => {
    if (adjcent.filter(cell => !cell).length === 0 || isWin){
        alert("Match Null")
        return
    } ; // match nul ou fin

    // 1. Jouer pour gagner si possible
    let coup = trouverCoupGagnantAvecCheck(ordinateur);
    if (coup !== null) {
        jouerCoup(coup, ordinateur);
        return;
    }

    // 2. Bloquer le joueur si possible
    coup = trouverCoupGagnantAvecCheck(player);
    if (coup !== null) {
        jouerCoup(coup, ordinateur);
        return;
    }

    // 3. Jouer au centre
    if (adjcent[4] === "") {
        jouerCoup(4, ordinateur);
        return;
    }

    // 4. Jouer dans un coin disponible
    const coins = [0, 2, 6, 8];
    for (let index of coins) {
        if (adjcent[index] === "") {
            jouerCoup(index, ordinateur);
            return;
        }
    }

    // 5. Jouer dans n’importe quelle case vide
    for (let i = 0; i < 9; i++) {
        if (adjcent[i] === "") {
            jouerCoup(i, ordinateur);
            return;
        }
    }
};


function jouerCoup(index, symbole) {
    const cell = document.querySelector(`#cell-${index} p`);
    cell.textContent = symbole;
    adjcent[index] = symbole;

    if (checkWin(symbole)) {
        alert("Vous avez perdu !")
        isWin = true;
    }
}




x.addEventListener("click",((e)=>{
    player="x"
    o.style.display="none"
    ordinateur="o"
}))
o.addEventListener("click",((e)=>{
    player="o"
    x.style.display="none"
    ordinateur="x"
}))

switche.addEventListener("click",((e)=>{
    mode = !mode;
}))

rejouer.addEventListener("click",((e)=>{
    location.reload();
}))



for(let i=0;i<9;i++){
    tab.push(document.getElementById(`cell-${i}`));
    
    tab[i].addEventListener('click', (e)=>{
        if (adjcent[i]||isWin||!player) return;
        console.log(e)
        e.target.querySelector('p').textContent = player;
        adjcent[i] = player;
        if(checkWin(player)){
            alert("Vous avez gagner !")
            isWin=true
        }else if(mode){
            modeFacile(i)
        }else{
            modeDifficile(i)
        }
    });

}

