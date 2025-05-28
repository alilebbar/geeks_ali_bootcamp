const ElimineDouble = (arr) => {
    const uniqueElements = new Set(arr);
    return Array.from(uniqueElements);
}
console.log(ElimineDouble([1, 2, 3, 1, 2, 3])); 