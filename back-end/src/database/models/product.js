'use strict';

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
      unique: true,
    },
    urlImage: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: '',
    },
  },
  {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  return product;
};