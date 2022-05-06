'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('alunos_novo', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: Sequelize.DataTypes.STRING,
      sobrenome: Sequelize.DataTypes.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('alunos_novo')
  }
};
