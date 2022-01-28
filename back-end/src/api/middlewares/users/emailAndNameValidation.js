const { User } = require('../../../database/models');

const EMAIL_ALREAD_EXISTS = {
  message: 'Email already registered',
};

const NAME_ALREAD_EXISTS = {
  message: 'Name already registered',
};

module.exports = async (req, res, next) => {
  const { email, name } = req.body;

  const users = await User.findAll();
  const emails = users.map((user) => user.email);
  const names = users.map((user) => user.name);

  if (emails.includes(email)) return res.status(409).send(EMAIL_ALREAD_EXISTS);
  if (names.includes(name)) return res.status(409).send(NAME_ALREAD_EXISTS);

  next();
};
