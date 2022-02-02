const { StatusCodes } = require('http-status-codes');
const Product = require('../../services/product');

const findAllProducts = async (_req, res) => {
  try {
    const products = await Product();
    res.status(StatusCodes.OK).json({ result: products });
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e.message);
  }
};

module.exports = findAllProducts;
