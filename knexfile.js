module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pair_ecommerce'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};