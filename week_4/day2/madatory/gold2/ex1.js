const somme = (array)=>{
    const floatArray = array.flat(Infinity);
    const sum = floatArray.reduce((Acc, Val)=> Acc + Val,0);
    return sum;
}
const array = [[1,2],[3,4],[5,6]];
console.log(somme(array)); 