const fs = require('fs');

// Lire un fichier
function lireFichier(chemin, encodage = 'utf8') {
    return fs.promises.readFile(chemin, encodage);
}

// Écrire dans un fichier
function ecrireFichier(chemin, donnees, encodage = 'utf8') {
    return fs.promises.writeFile(chemin, donnees, encodage);
}

module.exports = { lireFichier, ecrireFichier };