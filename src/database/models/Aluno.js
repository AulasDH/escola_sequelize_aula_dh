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
    anoMatricula: {
      type: DataTypes.STRING,
      field: 'ano_matricula'
    },
  }

  const tableConfiguration = {
    tableName: 'alunos',
    timestamps: false,
  }

  return sequelize.define('Aluno', tableDefinitions, tableConfiguration);
}