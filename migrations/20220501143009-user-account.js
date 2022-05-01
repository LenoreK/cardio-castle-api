'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_account', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },      
      user_name: {
        type: Sequelize.STRING
        ,allowNull: false
      },
      password: {
        type: Sequelize.STRING
        ,allowNull: true
      },
      last_modified: {
        type: Sequelize.DATE
        ,allowNull: false
      },
      last_modified_by: {
        type: Sequelize.STRING
        ,allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_account');
  }
};