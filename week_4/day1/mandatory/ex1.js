/*// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}*/

// #1.1 - run in the console:
//funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// elle va donne un message d'erreur car on peut pas affecter une valeur a une variable qui est declarer avec const
/*//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// en premier il vas afficher 0 et apres il va donner un message d'erreur car on peut pas affecter une valeur a une variable qui est declarer avec const

*/
/*//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
*/
/*
//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// elle va afficher test car on a declarer la variable a avec let dans la fonction funcSix
*/
//#5
/*
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?*/
// elle va afficher 5 dans le if et 2 dans le else car on a declarer la variable a avec let dans le if
// et on a declarer la variable a avec let dans le else