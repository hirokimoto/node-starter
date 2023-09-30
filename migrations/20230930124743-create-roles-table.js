'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};
