const { sale, product, user } = require('../../../database/models');

const getById = async (id) => {
  const order = await sale.findByPk(id, {
    attributes: {
      exclude: ['sellerId', 'user_id'],
    },
    include: [
      { model: user, as: 'seller', attributes: { exclude: ['password'] } },
      { model: product, as: 'products', through: { attributes: ['quantity'], as: 'details' } },
  ],
  });
  return order;
};

module.exports = getById;
