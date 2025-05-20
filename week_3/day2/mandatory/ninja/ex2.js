function findAvg(gradesList){
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++){
        sum += gradesList[i];
    }
    return sum / gradesList.length;
}

const gradesList = [20, 30, 40, 50, 60];
function checkGrades(gradesList){
    moyenne = findAvg(gradesList);
if(moyenne >= 65){
    console.log("Vous avez réussi");
}else{
    console.log("Vous avez échoué ! Revenez l'année prochaine !");
    console.log("Votre moyenne est de " + moyenne);
}
}
checkGrades(gradesList);
