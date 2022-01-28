const { Sale } = require('../../../database/models');

const getAll = async () => {
  const sales = await Sale.findAll();
  return sales;
};

module.exports = getAll;