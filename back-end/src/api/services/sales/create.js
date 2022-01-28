const Sequelize = require('sequelize');

const { Sale, SalesProducts } = require('../../../database/models');

const config = require('../../../database/config/config').development;

const sequelize = new Sequelize(config);

const create = async (sale) => sequelize.transaction(async (transaction) => {
  const { products, ...saleWithoutProducts } = sale;
  const saleCreated = await Sale.create(saleWithoutProducts, { transaction });

  await Promise.all(
    products
    .map(async ({ id: productId, quantity }) => SalesProducts
    .create({ saleId: saleCreated.id, productId, quantity }, { transaction })),
  );

  return saleCreated;
});

module.exports = create;
