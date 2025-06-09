const express = require('express');
const app = express();
const emojis = require('./data/emojis.js');
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.listen(3000, () => {
    console.log('🚀 Le serveur est démarré sur le port 3000');
});

let currentEmoji = null;

// Route pour obtenir un emoji aléatoire + 4 options
app.get('/api/random-emoji', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    currentEmoji = emojis[randomIndex];

    // Crée un tableau d'options mélangées
    const options = [currentEmoji.name];

    while (options.length < 4) {
        const option = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(option)) {
            options.push(option);
        }
    }

    // Mélanger les options
    options.sort(() => Math.random() - 0.5);

    res.json({
        emoji: currentEmoji.emoji,
        options: options,
    });
});

// Route pour vérifier la réponse de l'utilisateur
app.post('/api/guess', (req, res) => {
    const userGuess = req.body.guess;

    const correct = userGuess === currentEmoji.name;
    res.json({
        correct: correct,
        correctAnswer: currentEmoji.name,
    });
});
