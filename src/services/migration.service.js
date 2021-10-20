import { readFile, writeFile } from "../helper";

export const init = () => {};

const prepareStub = (table) => {
  let constraints = "";
  let mapped_columns = mapColumns(table.definition.columns);

  let replacementStubObject = {
    '"{{class}}"': table.schemaName,
    '"{{tableName}}"': `"${getTableName(table.schemaName)}"`,
    '"{{definition}}"': mapped_columns,
    '"{{constraints}}"': constraints,
  };

  let migrationFile = validator.replaceFromString(stub, replacementStubObject);
  return migrationFile;
};

const stub = () => {
  return readFile(stubPath);
};
