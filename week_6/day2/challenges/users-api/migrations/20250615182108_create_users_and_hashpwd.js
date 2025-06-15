/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('users', function(table) {
      table.increments('id').primary();
      table.string('email').notNullable().unique();
      table.string('username').notNullable().unique();
      table.string('first_name');
      table.string('last_name');
    })
    .createTable('hashpwd', function(table) {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('password').notNullable();

      table.foreign('username').references('username').inTable('users').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('hashpwd')
    .dropTableIfExists('users');
};