const pool = require('../config/db');

const Post = {
  async getAll() {
    const { rows } = await pool.query('SELECT * FROM posts ORDER BY id ASC');
    return rows;
  },

  async getById(id) {
    const  {rows}  = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    console.log(rows);
    return rows[0];
  },

  async create(title, content) {
    const { rows } = await pool.query(
      'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    return rows[0];
  },

  async update(id, title, content) {
    const { rows } = await pool.query(
      'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
      [title, content, id]
    );
    return rows[0];
  },

  async delete(id) {
    await pool.query('DELETE FROM posts WHERE id = $1', [id]);
  },
};

module.exports = Post;
