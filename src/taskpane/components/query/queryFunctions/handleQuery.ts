/* global */
import SelectParser from "./selectParser";

export default (ast: any, allWorksheets: any): any => {
  // ast will be an array of objects if the sql query ends in a semi colon or there are multiple queries
  if (Array.isArray(ast)) ast = ast[0];

  switch (ast.type) {
    case "select":
      return SelectParser(ast, allWorksheets);
  }
};
