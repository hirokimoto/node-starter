"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("roles", [
      { id: 1, name: "user", created_at: new Date(), updated_at: new Date() },
      { id: 2, name: "moderator", created_at: new Date(), updated_at: new Date()},
      { id: 3, name: "admin", created_at: new Date(), updated_at: new Date()},
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete("roles", null, {});
  },
};
