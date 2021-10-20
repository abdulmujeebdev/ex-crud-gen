import MigrationGenerator from "./controllers/MigrationGenerator";
class DefaultController {
  constructor(data) {
    this.data = data;
  }

  index() {
    this.data.forEach((table) => {
      if (table.isMigration) {
        MigrationGenerator.create(table);
      }
      if (table.isModel) {
      }
      if (table.isCrud) {
      }
      if (table.isController) {
      }
    });
  }
}
module.exports = DefaultController;
