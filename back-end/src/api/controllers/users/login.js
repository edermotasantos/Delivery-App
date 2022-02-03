const userService = require('../../services/users');
const auth = require('../../services/auth');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.userLogin(email, password);
  if (!user) return res.status(404).json({ message: 'Usuario nao encontrado' });

  const { id, name, role } = user;

  const token = auth.signUser({ id, name, email, role });

  return res.status(200).json({ name, email, role, token });
};
