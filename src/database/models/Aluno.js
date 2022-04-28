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

  const AlunoModel = sequelize.define('Aluno', tableDefinitions, tableConfiguration);

  AlunoModel.associate = (models) => {
    AlunoModel.belongsToMany(models.Turma, {
      as: 'turmas',
      foreignKey: 'alunoId',
      through: models.AlunoTurma,
      otherKey: 'turmaId'
    });
  };

  return AlunoModel;
}