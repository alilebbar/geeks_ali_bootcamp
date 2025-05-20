let age = [20, 5, 12, 43, 98, 55];
somme = 0
grand = 0
for (let i = 0; i<age.length;i++){
    somme+=age[i]
    if(grand<age[i]){
        grand=age[i]
    }
}
console.log(somme)
console.log(grand)