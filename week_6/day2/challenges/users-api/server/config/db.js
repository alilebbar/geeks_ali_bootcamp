const knex = require('knex');
const config = require('../../knexfile');

const db = knex(config.development); // ou .production selon ton env
module.exports = db;
