'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class multi_week_goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  multi_week_goal.init({
    id: DataTypes.INTEGER,
    goal_name: DataTypes.STRING,
    last_modified: DataTypes.DATE,
    last_modified_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'multi_week_goal',
  });
  return multi_week_goal;
};