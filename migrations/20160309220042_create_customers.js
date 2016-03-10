exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(table) {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.string('address_line_1');
    table.string('address_line_2');
    table.string('city');
    table.string('state');
    table.integer('zip');
    table.string('billing_address_line_1');
    table.string('billing_address_line_2');
    table.string('billing_city');
    table.string('billing_state');
    table.integer('billing_zip');
    table.integer('user_id');
    table
        .foreign('user_id')
        .references('id')
        .inTable('users');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers');
};
