'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('multi_week_goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      goal_name: {
        type: Sequelize.STRING
      },
      last_modified: {
        type: Sequelize.DATE
      },
      last_modified_by: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('multi_week_goals');
  }
};