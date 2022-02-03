require('dotenv').config();

const jwt = require('jsonwebtoken');

const { JWT_SECRET = 'secret_key' } = process.env;

const signUser = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);

  return token;
};

const verifyUser = (token) => {
  try {
    const { data } = jwt.verify(token, JWT_SECRET);

    const { password, ...dataWithoutPassword } = data;

    return { ...dataWithoutPassword };
  } catch (_error) {
    return null;
  }
};

module.exports = {
  signUser,
  verifyUser,
};