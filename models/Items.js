const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Items extends Model {

}

Items.init(
    {
        id: {
            type: DataTypes.INTEGER,
            PrimaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        item_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        item_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },

        consumer_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'consumer',
              key: 'id',
            },
          },
       
       },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'items',
          },
    )

    module.export = Items;