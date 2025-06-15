const pool = require('../config/db');

const Book = {
    async getAll(){
        let {rows} = await pool.query("SELECT * FROM books")
        return(rows)
    },
    async getOneById(id){
        let {rows} = await pool.query("SELECT * FROM books WHERE id = $1",[id])
        return(rows[0])        
    },
    async postBook(title,author,published_year){
        let {rows}= await pool.query("INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *",
            [title,author,published_year])
        return(rows[0])
    },
    async updateBook(id,title,author,published_year){
        let {rows} = await pool.query("UPDATE books SET title = $1, author = $2, published_year = $3 WHERE id = $4 RETURNING *",
            [title,author,published_year,id])
        return(rows[0])
    },
    async deleteBook(id){
        await pool.query("DELETE FROM books WHERE id = $1",[id])
    }
}
module.exports = Book;