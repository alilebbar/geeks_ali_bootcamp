const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
});
console.log(newArray);
// la valeur de i est de 0 à 5, car il s'agit de l'index de chaque élément dans le tableau `arrayNum`.
// Le tableau `newArray` contiendra les valeurs `[2, 4, 8, 10, 16, 18]`,