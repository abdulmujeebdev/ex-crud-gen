exports.up = function (db, callback) {
  db.createTable("{{tableName}}", {
    id: { type: 'int', primaryKey: true },
    name: 'string'
  }, callback);
};


exports.down = function (db, callback) {
  db.dropTable("{{tableName}}", callback);
};
