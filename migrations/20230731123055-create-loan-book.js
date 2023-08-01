'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LoanBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        onDelate:'CASCADE',
        References:{
          model:"Members",
          key:"id"
        }
      },
      book_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        References:{
          model:"Books",
          key:"id"
        }
      },
      lenght_of_loan: {
        type: Sequelize.INTEGER
      },
      due_date_of_loan: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('LoanBooks');
  }
};