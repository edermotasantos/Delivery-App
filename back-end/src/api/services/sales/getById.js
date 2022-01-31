const { Sale, Product, User } = require('../../../database/models');

const getById = async (id) => {
  const sale = await Sale.findByPk(id, {
    attributes: {
      exclude: ['sellerId', 'user_id'],
    },
    include: [
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'], as: 'details' } },
  ],
  });
  return sale;
};

module.exports = getById;