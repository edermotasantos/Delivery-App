'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('SalesProducts',
    [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 10,
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 5,
      },
      {
        sale_id: 1,
        product_id: 3,
        quantity: 2,
      },
      {
        sale_id: 2,
        product_id: 1,
        quantity: 12,
      },
      {
        sale_id: 2,
        product_id: 2,
        quantity: 10,
      },
      {
        sale_id: 2,
        product_id: 3,
        quantity: 20,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('SalesProducts', null, {}),
};
