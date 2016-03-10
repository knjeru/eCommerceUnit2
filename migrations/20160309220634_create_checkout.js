exports.up = function(knex, Promise) {
  return knex.schema.createTable('checkout', function(table) {
    table.increments('id');
    table.integer('product_id');
    table
        .foreign('product_id')
        .references('id')
        .inTable('products');
    table.integer('customer_id');
    table
        .foreign('customer_id')
        .references('id')
        .inTable('customers');
    table.timestamp('date').defaultTo(knex.fn.now());
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('checkout');
};
