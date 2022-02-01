const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const getSecret = require('../../getSecret');

const TOKEN_NOT_FOUND = {
  message: 'Token not found',
};

const EXPIRED_OR_INVALID_TOKEN = {
  message: 'Expired or invalid token',
};

const validateToken = (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) res.status(StatusCodes.UNAUTHORIZED).json(TOKEN_NOT_FOUND);
    const decodedToken = jwt.verify(token, getSecret);
    req.token = decodedToken;
    next();
  } catch (e) {
    res.status(StatusCodes.UNAUTHORIZED).json(EXPIRED_OR_INVALID_TOKEN);
  }
};
  
module.exports = { validateToken };
