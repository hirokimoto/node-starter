"use strict";
const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("users", [
      {
        username: "admin",
        name: "Administrator",
        email: "admin@radixweb.com",
        password: bcrypt.hashSync("password", 8),
        role_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        username: "rahul",
        name: "Rahul",
        email: "rahul.radixweb@gmail.com",
        password: bcrypt.hashSync("password", 8),
        role_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }],
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
