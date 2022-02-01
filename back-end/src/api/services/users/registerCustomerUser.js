const { user } = require('../../../database/models');

module.exports = async (name, email, password) => {
  const newUser = {
    name,
    email,
    password,
    role: 'customer',
  };

  return user.create(newUser);
};
