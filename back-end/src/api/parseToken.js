const jwt = require('jsonwebtoken');
const getSecret = require('./getSecret');

const parseToken = ({ token }) => {
  const JWT_SECRET = getSecret();
  return jwt.verify(token, JWT_SECRET);
};

module.exports = parseToken;
