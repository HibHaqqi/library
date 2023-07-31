'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoanBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.book,{
        foreignKey:`book_id`
      })
      this.belongsTo(models.Member,{
        foreignKey:`member_id`,
        onDelete:"CASCADE"
      })
    }
  }
  LoanBook.init({
    member_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    lenght_of_loan: DataTypes.INTEGER,
    due_date_of_load: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LoanBook',
  });
  return LoanBook;
};