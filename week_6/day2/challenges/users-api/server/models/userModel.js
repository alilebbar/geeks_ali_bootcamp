const knex = require('../config/db');

const UserModel = {
  async createUser(userData, hashedPassword) {
    return await knex.transaction(async trx => {
      const [user] = await trx('users')
        .insert(userData)
        .returning('*');

      await trx('hashpwd').insert({
        username: user.username,
        password: hashedPassword
      });

      return user;
    });
  },

  async getUserByUsername(username) {
    const user = await knex('hashpwd').where({ username }).first();
    return user;
  },

  async getAllUsers() {
    return await knex('users').select('*');
  },

  async getUserById(id) {
    return await knex('users').where({ id }).first();
  },

  async updateUser(id, updates) {
    const [updatedUser] = await knex('users')
      .where({ id })
      .update(updates)
      .returning('*');

    return updatedUser;
  }
};

module.exports = UserModel;
