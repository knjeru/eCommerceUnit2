exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function(table) {
    table.increments('id');
    table.integer('checkout_id');
    table
        .foreign('checkout_id')
        .references('id')
        .inTable('checkout');
    table.timestamp('date').defaultTo(knex.fn.now());
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};