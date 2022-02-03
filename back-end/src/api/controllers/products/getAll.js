const { StatusCodes } = require('http-status-codes');
const productService = require('../../services/products');

const getAll = async (_req, res) => {
  try {
    const products = await productService.getAll();
    res.status(StatusCodes.OK).json(products);
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e.message);
  }
};

module.exports = getAll;
