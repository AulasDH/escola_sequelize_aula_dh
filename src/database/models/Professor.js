module.exports = (sequelize, DataTypes) => {
  const tableDefinitions = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    sobrenome: {
      type: DataTypes.STRING,
    },
  }

  const tableConfiguration = {
    tableName: 'professores',
    timestamps: false,
  }

  return sequelize.define('Professor', tableDefinitions, tableConfiguration);
}