const fs = require('fs');
const path = require('path');

const getSecret = () => {
  const jwtPath = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');
  return fs.readFileSync(jwtPath, 'utf8').trim();
};

module.exports = getSecret;
