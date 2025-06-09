const express = require('express');
const app = express();
const { getPosts } = require('./data/dataService.js');

app.use(express.json());

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await getPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des posts' });
    }
});

app.listen(5000, () => {
    console.log('mon serveur est demarrer !');
});
