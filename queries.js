const database = require("./database-connection");

module.exports = {
  list(table) {
    return database(table).select();
  },
  read(id, table) {
    return database(table)
      .where("id", id)
      .first();
  },
  createTracking(tracking) {
    return database("tracking")
      .insert(tracking)
      .returning("*")
      .then(record => record[0]);
  },
  createLegislation(tracking) {
    return database("legislation")
      .insert(tracking)
      .returning("*")
      .then(record => record[0]);
  },
  updateLegislation(id, request) {
    return database("legislation")
      .update(request)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  updateTracking(id, request) {
    return database("tracking")
      .update(request)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  deleteLegislation(id) {
    return database("legislation")
      .delete()
      .where("id", id);
  },
  deleteTracking(id) {
    return database("tracking")
      .delete()
      .where("id", id);
  }
};
