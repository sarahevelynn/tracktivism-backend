exports.up = function(knex, Promise) {
  return knex.schema.createTable("tracking", table => {
    table.increments("id").primary();
    table.text("StateBillID");
    table.text("Position");
    table.boolean("Call");
    table.boolean("Event");
    table.boolean("Online");
    table.boolean("SentOn");
    table.boolean("Other");
    table.text("Notes");
    table.integer("NumberOfActions");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tracking");
};
