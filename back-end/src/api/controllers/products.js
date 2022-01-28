const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes/build/cjs/reason-phrases');
const Product = require('../services/product');

const findAllProducts = async (_req, res) => {
  try {
    const products = await Product.findAllProducts();
    res.status(StatusCodes.OK).json({ result: products })
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases);
  }
};

module.exports = {
  findAllProducts
};
