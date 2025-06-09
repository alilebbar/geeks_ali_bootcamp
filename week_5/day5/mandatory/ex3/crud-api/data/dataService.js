const axios = require('axios');

async function getPosts() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
}

module.exports = { getPosts };