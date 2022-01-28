const salesService = require('../../services/sales');

const getAll = async (_req, res, next) => {
  try {
    const sales = await salesService.getAll();

    return res.status(200).json(sales);
  } catch (e) {
    next(e);
  }
};

module.exports = getAll;
