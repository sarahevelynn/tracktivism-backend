exports.up = function(knex, Promise) {
  return knex.schema.createTable("legislation", table => {
    table.increments("id").primary();
    table.text("StateBillID");
    table.text("BillName");
    table.text("KeyWords");
    table.text("Link");
  });
};

exports.down = function(knex, Promise) {  return knex.schema.dropTableIfExists("legislation");};
