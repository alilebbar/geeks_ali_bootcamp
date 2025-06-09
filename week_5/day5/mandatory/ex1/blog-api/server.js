const express = require('express');
const app = express();
app.use(express.json());
let posts = [
    { id: 1, title: "Mon premier post", content: "Contenu du premier post" },
    { id: 2, title: "Mon deuxième post", content: "Contenu du deuxième post" }
];
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});

app.get('/posts', (req, res) => {
    res.json(posts);
});
app.get('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) return res.status(404).send('Post non trouvé');

    res.json(post);
});
app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});
app.put('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).send('Post non trouvé');

    posts[index] = {
        id: id,
        title: req.body.title,
        content: req.body.content
    };

    res.json({ message: "Post mis à jour" });
});
app.delete('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).send('Post non trouvé');

    posts.splice(index, 1);
    res.json({ message: "Post supprimé" });
});

app.use((req, res) => {
    res.status(404).send("Route non trouvée");
});
