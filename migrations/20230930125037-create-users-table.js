'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: Sequelize.INTEGER,
      google_id: Sequelize.STRING,
      username: Sequelize.STRING,
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      avatar: Sequelize.STRING,
      follows: Sequelize.INTEGER,
      followers: Sequelize.INTEGER,
      role_id: Sequelize.INTEGER,
      created_at: Sequelize.TIME,
      updated_at: Sequelize.TIME
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
