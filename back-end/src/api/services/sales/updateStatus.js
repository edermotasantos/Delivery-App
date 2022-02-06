const { sale } = require('../../../database/models');

const updateStatus = async (id, status) => {
  await sale.update(
    { status },
    { where: { id } },
  );
};

module.exports = updateStatus;
