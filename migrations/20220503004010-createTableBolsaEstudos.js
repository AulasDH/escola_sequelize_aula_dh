'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('bolsa_estudos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      desconto: Sequelize.DataTypes.INTEGER,
      nome_programa: Sequelize.DataTypes.STRING,
      numero_max_aplicacoes: Sequelize.DataTypes.INTEGER,
      status: Sequelize.DataTypes.INTEGER(1),
      empresa_anjo: Sequelize.DataTypes.STRING
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('bolsa_estudos');
  }
};
