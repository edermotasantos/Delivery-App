const salesService = require('../../services/sales');

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getById(id);

    return res.status(200).json(sale);
  } catch (e) {
    next(e);
  }
};

module.exports = getById;
