const { product } = require('../../../database/models');

const getAll = async () => {
  const productsFound = await product.findAll();
  return productsFound;
};

module.exports = getAll;
