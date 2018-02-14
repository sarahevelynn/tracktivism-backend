
exports.up = function(knex, Promise) {
  return knex.schema.createTable("catagories", table => {
    table.increments("id").primary();
    table.text("KeyWords");
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("catagories");
};
