const saleService = require('../../services/sales');

const create = async (req, res) => {
  const { id: userId } = req.user;

  const {
    sellerId,
    deliveryAddress,
    deliveryNumber,
    totalPrice,
    products,
  } = req.body;

  const created = await saleService.create({
    userId,
    sellerId,
    deliveryAddress,
    deliveryNumber,
    totalPrice,
    products,
  });

  return res.status(201).json(created);
};

module.exports = create;
