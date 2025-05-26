/*function mergeWords(string) {
  return function(nextString) {
    if (nextString === undefined) {
      return string;
    } else {
      return mergeWords(string + ' ' + nextString);
    }
  }
}*/
const mergeWords = (string)=> (nextString)=>
    nextString === undefined ? string : mergeWords(string + ' ' + nextString);
console.log(mergeWords('Hello')('World')('from')('JavaScript')());