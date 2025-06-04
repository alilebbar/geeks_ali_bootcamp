let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
}

setTimeout(parallel, 5000)
/*
Deux fonctions de promesse :

resolveAfter2Seconds() affiche un message, attend 2 secondes, puis affiche "slow promise is done" et renvoie "slow".

resolveAfter1Second() fait pareil mais en 1 seconde et retourne "fast".

Fonction parallel :

S’exécute après 5 secondes (via setTimeout(parallel, 5000)).

Elle lance deux fonctions async en parallèle, chacune utilisant await sur une des promesses, et console.log le résultat une fois résolu.

Utilisation de Promise.all :

Elle attend que les deux fonctions async soient terminées.

Mais elles sont démarrées simultanément, donc les délais ne s’additionnent pas.
==PARALLEL with await Promise.all==
starting slow promise
starting fast promise
fast promise is done
fast
slow promise is done
slow
*/ 