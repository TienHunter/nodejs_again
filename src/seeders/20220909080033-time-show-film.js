'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Allcodes', [
      {
      keyMap: 'T2',
      value: 'Thứ 2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      keyMap: 'T3',
      value: 'Thứ 3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      keyMap: 'T4',
      value: 'Thứ 4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      keyMap: 'T5',
      value: 'Thứ 5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      keyMap: 'T6',
      value: 'Thứ 6',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      keyMap: 'T7',
      value: 'Thứ 7',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      keyMap: 'T8',
      value: 'Chủ nhật',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Allcodes', null, {});
  }
};
