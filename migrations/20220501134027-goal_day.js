module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goal_day', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },      
      goal_day_number: {
        type: Sequelize.INTEGER
        ,allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER
        ,allowNull: true
      },
      duration_unit: {
        type: Sequelize.STRING
        ,allowNull: true
      },
      distance: {
        type: Sequelize.INTEGER
        ,allowNull: true
      },
      distance_unit: {
        type: Sequelize.STRING
        ,allowNull: true
      },
      notes: {
        type: Sequelize.STRING
        ,allowNull: true
      },
      mood_index: {
        type: Sequelize.INTEGER
        ,allowNull: true
      },
      goal_week_id: {
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
    await queryInterface.dropTable('goal_day');
  }
};