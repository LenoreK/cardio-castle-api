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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    goal_week_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    multi_week_goal_id: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },    
    last_modified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_modified_by: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Goal_Week',
    tableName: 'goal_week',
    timestamps: false
  });
  return goal_week;
};