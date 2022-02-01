const userService = require('../../services/users');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.userLogin(email, password);
    if (!user) return res.status(404).json({ message: 'Usuario nao encontrado' });

    return res.status(200).json({ role: user.role });
  } catch (err) {
    console.log(err.message);
    return res.status(500).end();
  }
};
