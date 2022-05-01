'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goal_days', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      goal_day_number: {
        type: Sequelize.INTEGER
      },
      duration: {
        type: Sequelize.INTEGER
      },
      duration_unit: {
        type: Sequelize.STRING
      },
      distance: {
        type: Sequelize.INTEGER
      },
      distance_unit: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      mode_index: {
        type: Sequelize.INTEGER
      },
      goal_week_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('goal_days');
  }
};