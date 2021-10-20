
export const init = () =>{

}


export const prepareStub = (table) => {
  let constraints = "";
  let mapped_columns = mapColumns(table.definition.columns);

  const replacementStubObject = {
    '"{{class}}"': table.schemaName,
    '"{{tableName}}"': `"${getTableName(table.schemaName)}"`,
    '"{{definition}}"': mapped_columns,
    '"{{constraints}}"': constraints,
  };

  const migrationFile = validator.replaceFromString(
    stub,
    replacementStubObject
  );
  return migrationFile;
};
//express adonis
// const mapColumns = (columns) => {
//   return columns
//     .map((column, colIndex) => {
//       let columnStr = `table.` + MigrationLexer.findColumnType(column);
//       if (
//         typeof column.modifiers != "undefined" &&
//         column.modifiers.length > 0
//       ) {
//         columnStr += column.modifiers
//           .map((modifier) => {
//             return "." + MigrationLexer.mapModifier(modifier);
//           })
//           .join("");
//       }

//       return `${columnStr}${colIndex === columns.length - 1 ? "" : `\n      `}`;
//     })
//     .join("");
// };

const getTableName = (tableName) => {
  return tableName;
};
