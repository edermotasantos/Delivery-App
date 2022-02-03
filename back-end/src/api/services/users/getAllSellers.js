const { user } = require('../../../database/models');

const getAllSellers = async () => {
  const users = await user.findAll();
  return users.filter((userObj) => userObj.role === 'seller');
};

module.exports = getAllSellers;