'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'multi_week_goal',
        'user_account_id',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
        }
      )
      ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([queryInterface.removeColumn('multi_week_goal', 'user_account_id')])
}};
