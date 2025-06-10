const express = require("express");
const router = express.Router();

const books = []; // "Base de données" en mémoire

// GET - Tous les livres
router.get("/books", (req, res) => {
    res.json(books);
});

// GET - Un livre par ID
router.get("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!books[id]) return res.status(404).send("Livre non trouvé");
    res.json(books[id]);
});

// POST - Ajouter un livre
router.post("/books", (req, res) => {
    const data = req.body;
    if (!data.title || !data.author) return res.status(400).send("Champs manquants");
    books.push(data);
    res.send("Livre ajouté avec succès");
});

// PUT - Modifier un livre par ID
router.put("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!books[id]) return res.status(404).send("Livre non trouvé");
    const data = req.body;
    books[id] = data;
    res.send("Livre mis à jour avec succès");
});

// DELETE - Supprimer un livre par ID
router.delete("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!books[id]) return res.status(404).send("Livre non trouvé");
    books.splice(id, 1);
    res.send("Livre supprimé avec succès");
});

module.exports = router;
