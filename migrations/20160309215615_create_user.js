exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id');
    table.string('username');
    table.string('password');
    table.boolean('role');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
