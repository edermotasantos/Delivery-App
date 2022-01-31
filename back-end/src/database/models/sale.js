'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'Pendente',
    },
  },
  {
    updatedAt: false,
    createdAt: 'saleDate',
    tableName: 'Sales',
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user', onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    );
    Sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller', onUpdate: 'CASCADE', onDelete: 'CASCADE'},
    );
    
  };

  return Sale;
};