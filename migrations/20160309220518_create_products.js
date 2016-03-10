exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table) {
    table.increments('id');
    table.string('color');
    table.string('size');
    table.varchar('logo');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
