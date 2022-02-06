const saleService = require('../../services/sales');

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  await saleService.updateStatus(id, status);

  return res.status(200).end();
};

module.exports = updateStatus;
