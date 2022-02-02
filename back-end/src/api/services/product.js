const { product } = require('../../database/models');

const findAllProducts = async () => {
  const productsFound = await product.findAll();
  return productsFound;
};

module.exports = findAllProducts;
