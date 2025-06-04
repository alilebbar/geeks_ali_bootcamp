let resolveAfter2Seconds = function () {
    console.log("starting slow promise"); // 🟡 S'affiche quand la promesse lente commence
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow"); // 🟢 Résout la promesse avec "slow" après 2s
            console.log("slow promise is done"); // 🟢 Affiche ce message après 2s
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise"); // 🟡 S'affiche quand la promesse rapide commence
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast"); // 🟢 Résout la promesse avec "fast" après 1s
            console.log("fast promise is done"); // 🟢 Affiche ce message après 1s
        }, 1000);
    });
};

// ❗ Cette fonction ne gère pas les erreurs (pas de try/catch ou .catch)
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then=='); // 🟣 Indique le début de l'exécution parallèle

    // 🔄 Les deux promesses démarrent en même temps
    resolveAfter2Seconds().then((message) => console.log(message)); // 📤 Affiche "slow" après 2s
    resolveAfter1Second().then((message) => console.log(message));  // 📤 Affiche "fast" après 1s
}

// 🕒 Appelle la fonction après 13 secondes
setTimeout(parallelPromise, 13000);
