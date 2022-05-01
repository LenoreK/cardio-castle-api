'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('multi_week_goal', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },      
      goal_name: {
        type: Sequelize.STRING
        ,allowNull: false
      },
      goal_status: {
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
    await queryInterface.dropTable('multi_week_goal');
  }
};