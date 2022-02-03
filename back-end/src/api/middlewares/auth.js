const { StatusCodes } = require('http-status-codes');

const { verifyUser } = require('../services/auth');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({ message: 'Token not found', code: StatusCodes.UNAUTHORIZED });
  }

  const user = verifyUser(authorization);

  if (!user) {
    return next({ message: 'Expired or invalid token', code: StatusCodes.UNAUTHORIZED });
  }

  req.user = user;

  next();
};