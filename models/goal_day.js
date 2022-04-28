'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class goal_day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  goal_day.init({
    id: DataTypes.INTEGER,
    goal_day_number: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    duration_unit: DataTypes.STRING,
    distance: DataTypes.INTEGER,
    distance_unit: DataTypes.STRING,
    notes: DataTypes.STRING,
    goal_week_id: DataTypes.INTEGER,
    last_modified: DataTypes.DATE,
    last_modified_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'goal_day',
  });
  return goal_day;
};