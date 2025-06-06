// read-directory.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// obtenir __dirname en ES6 module :
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// le répertoire que tu veux lire (ici le dossier courant)
const directoryPath = __dirname;

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Erreur lors de la lecture du répertoire:', err);
        return;
    }

    console.log('Fichiers dans le répertoire :');
    files.forEach(file => {
        console.log(file);
    });
});
