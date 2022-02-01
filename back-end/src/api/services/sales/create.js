const Sequelize = require('sequelize');

const { sale, salesProducts } = require('../../../database/models');

const config = require('../../../database/config/config').development;

const sequelize = new Sequelize(config);

const create = async (newSale) => sequelize.transaction(async (transaction) => {
  const { products, ...saleWithoutProducts } = newSale;
  const saleCreated = await sale.create(saleWithoutProducts, { transaction });

  await Promise.all(
    products
    .map(async ({ id: productId, quantity }) => salesProducts
    .create({ saleId: saleCreated.id, productId, quantity }, { transaction })),
  );

  return saleCreated;
});

module.exports = create;
