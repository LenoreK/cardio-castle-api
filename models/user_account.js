'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_account.init({
    id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    last_modified: DataTypes.DATE,
    last_modified_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_account',
  });
  return user_account;
};