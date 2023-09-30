"use strict";

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert("roles", [
      { id: 1, name: "user", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: "moderator", createdAt: new Date(), updatedAt: new Date()},
      { id: 3, name: "admin", createdAt: new Date(), updatedAt: new Date()},
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete("roles", null, {});
  },
};
