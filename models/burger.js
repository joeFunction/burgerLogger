// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const cat = {
  all: async () => {
    const result = await orm.all("cat");

    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.create("cat", cols, vals);

    return result;
  },

  update: async (objColVals, condition) => {
    const result = await orm.update("cat", objColVals, condition);

    return result;
  },

  delete: async (condition) => {
    const result = await orm.delete("cat", condition);

    return result;
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
