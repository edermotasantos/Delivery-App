const userService = require('../../services/users');

module.exports = async (_req, res) => {
  const sellers = await userService.getAllSellers();

  return res.status(200).json(sellers);
};
