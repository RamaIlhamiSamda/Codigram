'use strict';
const {encryptPassword} = require ('../helper/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.posting);
      // define association here
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    alamat: DataTypes.STRING,
    pendidikan: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function (user, options) {
        user.password = encryptPassword(user.password);
      },
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};