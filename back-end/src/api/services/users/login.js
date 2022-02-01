const { user } = require('../../../database/models');

const userLogin = async (email, password) => {
  const foundUser = await user.findOne({ where: { email, password } });
  return foundUser;
};

module.exports = userLogin;