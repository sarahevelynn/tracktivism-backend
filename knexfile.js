module.exports = {
  development: {
    client: "pg",
    connection: "postgresql:///tracktivism"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
