'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class goal_week extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  goal_week.init({
    id: DataTypes.INTEGER,
    goal_week_number: DataTypes.INTEGER,
    multi_week_goal_id: DataTypes.INTEGER,
    last_modified: DataTypes.DATE,
    last_modified_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'goal_week',
  });
  return goal_week;
};