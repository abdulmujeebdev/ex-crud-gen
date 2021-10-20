const mapColumns = (columns) => {
  return columns
    .map((column, colIndex) => {
      let columnStr = `table.` + MigrationLexer.findColumnType(column);
      if (
        typeof column.modifiers != "undefined" &&
        column.modifiers.length > 0
      ) {
        columnStr += column.modifiers
          .map((modifier) => {
            return "." + MigrationLexer.mapModifier(modifier);
          })
          .join("");
      }

      return `${columnStr}${colIndex === columns.length - 1 ? "" : `\n      `}`;
    })
    .join("");
};