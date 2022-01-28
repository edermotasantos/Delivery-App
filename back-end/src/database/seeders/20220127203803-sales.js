'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Sales',
    [
      {
        user_id: 3,
        seller_id: 1,
        total_price: 29.99,
        delivery_address: 'Rua Imaginaria',
        delivery_number: '123',
        sale_date: Sequelize.literal('CURRENT_TIMESTAMP'),
        status: 'ENTREGUE',
      },
      {
        user_id: 3,
        seller_id: 1,
        total_price: 59.99,
        delivery_address: 'Rua Imaginaria',
        delivery_number: '123',
        sale_date: Sequelize.literal('CURRENT_TIMESTAMP'),
        status: 'EM PROCESSAMENTO',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Sales', null, {}),
};