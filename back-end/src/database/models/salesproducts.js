'use strict';

module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts',
    {
      saleId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'salesProducts',
    },
  );

  salesProducts.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return salesProducts;
};