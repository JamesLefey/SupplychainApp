const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Producer extends Model {
   
    
  }

  Producer.init(
    {
      id: {
          type: DataTypes.INTEGER,
          PrimaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      
      producer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      item_description: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 

      producer_goods: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      balance: {
        type: DataTypes.INTEGER,
      allowNull: false,
      defauleValue: 10,
      validate: {
        isNumeric: true,
      }
    },

    item_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isNumeric: true,
        }
      },

},
{  sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Producer',}
     
)

module.export = Producer;

