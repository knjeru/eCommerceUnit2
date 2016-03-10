exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('customers').del(), 

    // Inserts seed entries
    knex('customers').insert({
            id: 1,
            first_name: 'Bob',
            last_name: 'Jenkins',
            address_line_1: '2932 NE SW Rd',
            address_line_2: 'Suite 03',
            city: 'Arvada',
            state: 'Co',
            zip: '32622',
            billing_address_line_1: '2932 NE SW Rd',
            billing_address_line_2: 'Suite 03',
            billing_city: 'Arvada',
            billing_state: 'Co',
            billing_zip: '32622',
            user_id: 1
        })
  );
};