'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('permissions', [
      {
        id: uuidv4(),
        name: 'leer',
        description: 'Permite leer contenido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'escribir',
        description: 'Permite escribir contenido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'eliminar',
        description: 'Permite eliminar contenido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'editar',
        description: 'Permite editar contenido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('permissions', null, {});
  },
};
