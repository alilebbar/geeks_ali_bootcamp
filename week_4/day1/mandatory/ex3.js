const isString = (value) => {
  if (typeof value === 'string') {
    return true;
  }
  return false;
}
console.log(isString('hello')); 

console.log(isString([1, 2, 4, 0]));

