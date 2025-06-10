const express = require("express");
const app = express();
const booksRouter = require("./routes/books");

app.use(express.json());
app.use(booksRouter);

app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});
