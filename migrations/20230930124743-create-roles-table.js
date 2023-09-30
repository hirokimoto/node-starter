'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};
