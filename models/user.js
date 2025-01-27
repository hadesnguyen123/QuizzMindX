'use strict'

const { Model } = require('sequelize')
const { sequelize } = require('.')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        numberPhone: DataTypes.STRING,
        type: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};