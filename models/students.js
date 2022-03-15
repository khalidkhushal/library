'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class students extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    students.init({
        First_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Last_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'students',
        modelName: 'students',
    });
    return students;
};