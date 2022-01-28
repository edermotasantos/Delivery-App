const jwt = require('jsonwebtoken');
const { getSecretKey } = require('./getSecretKey');

const generateToken = ({ email, role }) => {
  const JWT_SECRET = getSecretKey();
  return jwt.sign({ email, role }, JWT_SECRET, { expiresIn: '7d' });
};

module.exports = generateToken;
