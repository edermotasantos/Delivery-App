const salesService = require('../../services/sales');

const NOT_FOUND = { message: 'Order Not Found' };

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getById(id);

    if (!sale) return res.status(404).json(NOT_FOUND);

    return res.status(200).json(sale);
  } catch (e) {
    next(e);
  }
};

module.exports = getById;
