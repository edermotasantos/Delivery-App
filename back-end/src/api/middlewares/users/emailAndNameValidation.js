const { user } = require('../../../database/models');

const EMAIL_ALREAD_EXISTS = {
  message: 'Email already registered',
};

const NAME_ALREAD_EXISTS = {
  message: 'Name already registered',
};

module.exports = async (req, res, next) => {
  const { email, name } = req.body;

  const users = await user.findAll();
  const emails = users.map((userObj) => userObj.email);
  const names = users.map((userObj) => userObj.name);

  if (emails.includes(email)) return res.status(409).send(EMAIL_ALREAD_EXISTS);
  if (names.includes(name)) return res.status(409).send(NAME_ALREAD_EXISTS);

  next();
};
