const userService = require('../../services/users');

module.exports = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userService.registerCustomerUser(name, email, password);

    return res.status(201).send({ user });
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};
