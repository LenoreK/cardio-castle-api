'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goal_week', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },     
      goal_week_number: {
        type: Sequelize.INTEGER
        ,allowNull: false
      },
      multi_week_goal_id: {
        type: Sequelize.INTEGER
        ,allowNull: false
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
    await queryInterface.dropTable('goal_week');
  }
};