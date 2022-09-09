'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
      categoryID: 'CA1',
      categoryName: 'Tu tiên',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryID: 'CA2',
      categoryName: 'Luyện cấp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryID: 'CA3',
      categoryName: 'Trùng sinh',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryID: 'CA4',
      categoryName: 'Xuyên không',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryID: 'CA5',
      categoryName: 'Hiện đại',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryID: 'CA6',
      categoryName: 'Hài hước',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryID: 'CA7',
      categoryName: 'OVA',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryID: 'CA8',
      categoryName: 'Khác',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
