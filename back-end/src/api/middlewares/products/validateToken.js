const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const getSecret = require('../../getSecret');

const validateToken = (req, _res, next) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) next({ code: 401, message: 'Token not found' });
    const decodedToken = jwt.verify(token, getSecret);
    req.token = decodedToken;
    next();
  } catch (e) {
    next({ code: 401, message: 'Expired or invalid token' });
  }
};
  
module.exports = { validateToken };
