
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('orders').del(), 

    // Inserts seed entries
    knex('orders').insert({
            id: 1,
            checkout_id: 1
        })
  );
};