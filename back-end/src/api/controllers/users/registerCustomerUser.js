const userService = require('../../services/users');

module.exports = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userService.registerCustomerUser({ name, email, password });

  return res.status(201).json(user);
};
