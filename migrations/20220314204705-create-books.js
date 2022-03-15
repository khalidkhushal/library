'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('books', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            book_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            author_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            borrowed_by: {
                type: Sequelize.STRING,
                allowNull: false
            },
            date_of_borrow: {
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
            date_of_return: {
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('books');
    }
};