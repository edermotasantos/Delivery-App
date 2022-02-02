const { user } = require('../../../database/models');

module.exports = async ({ name, email, password }) => user.create({
  name,
  email,
  password,
  role: 'customer',
});
