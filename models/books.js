'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class books extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    books.init({
        book_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        borrowed_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_of_borrow: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        date_of_return: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'books',
        modelName: 'books',
    });
    return books;
};