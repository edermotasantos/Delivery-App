const jwt = require('jsonwebtoken');
const { getSecretKey } = require('./getSecretKey');

const parseToken = ({ token }) => {
  const JWT_SECRET = getSecretKey();
  return jwt.verify(token, JWT_SECRET);
};

module.exports = parseToken;
