'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('sales',
    [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 29.99,
        delivery_address: 'Rua Imaginaria',
        delivery_number: '123',
        sale_date: Sequelize.literal('CURRENT_TIMESTAMP'),
        status: 'ENTREGUE',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 59.99,
        delivery_address: 'Rua Imaginaria',
        delivery_number: '123',
        sale_date: Sequelize.literal('CURRENT_TIMESTAMP'),
        status: 'EM PROCESSAMENTO',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('sales', null, {}),
};