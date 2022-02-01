const jwt = require('jsonwebtoken');
const getSecret = require('./getSecret');

const generateToken = ({ email, role }) => {
  const JWT_SECRET = getSecret();
  return jwt.sign({ email, role }, JWT_SECRET, { expiresIn: '7d' });
};

module.exports = generateToken;
