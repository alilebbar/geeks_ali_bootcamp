const books = require('../models/models');

const booksController = {
    async getAllBokks(req, res) {
        try {
            let booksList = await books.getAll();
            res.status(200).json(booksList);
        } catch (error) {
            console.error('Error fetching books:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
},
    async getBookById(req, res) {
        try {
        let {id} = req.params
        let bookById = await books.getOneById(id)
        if(!bookById)return res.status(401).send("livre introuvable !")
        return res.status(200).json(bookById)
        } catch (error) {
            res.status(500).send(error.message)
        }
        
    },
    async postBook(req,res){
        let {title,author,published_year} = req.body
        try {
            const postBook = await books.postBook(title,author,published_year)
            return res.status(200).json({ message: "Book ajouté avec succès !", data: postBook });
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    async updateBook(req,res){
        let {id} = req.params
        let {title,author,published_year} = req.body
        try {
            const updateBook = await books.updateBook(id,title,author,published_year)
            return res.status(200).json(updateBook).send('book modifier avec succe !')
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    async deleteBook(req,res){
        let {id} = req.params
        try {
            await books.deleteBook(id)
            return res.status(200).send('book supprimer avec succe !')
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}
module.exports = booksController;