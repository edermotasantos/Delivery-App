const { Product } = require('../models/product');

const findAllProducts = async () => {
  const productsFound = await Product.findAll({});
  return productsFound;
};

module.exports = {
  findAllProducts,
};
