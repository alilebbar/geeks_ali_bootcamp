
/**
 * Generates a string representation of a landscape consisting of flat areas and mountains.
 *
 * The landscape is constructed by concatenating flat sections (underscores) and mountain sections (slashes and apostrophes).
 * - `flat(x)`: Adds `x` underscores to the landscape.
 * - `mountain(x)`: Adds a mountain shape with `x` apostrophes between a forward slash and a backslash.
 *
 * Example output: "____/''''\\____"
 *
 * @returns {string} The string representation of the landscape.
 */
let landscape = ()=> {

 let result = "";

 let flat = (x)=> {
   for(let count = 0; count < x; count++){
     result = result + "_";
   }
 }

 let mountain = (x)=> {
   result = result + "/"
   for(let counter = 0; counter < x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4);
 mountain(4);
 flat(4);

 return result;
}


console.log(landscape())
