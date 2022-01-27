const registerCustomerUserFunction = require('./registerCustomerUser');

module.exports = {
  registerCustomerUser: (nome, email, password) => 
    registerCustomerUserFunction(nome, email, password),
};
