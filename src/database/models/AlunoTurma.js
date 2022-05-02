module.exports = (sequelize, DataTypes) => {
  const tableDefinitions = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    numeroFaltas: {
      type: DataTypes.INTEGER,
      field: 'numero_faltas'
    },
    alunoId: {
      type: DataTypes.INTEGER,
      field: 'aluno_id'
    },
    turmaId: {
      type: DataTypes.INTEGER,
      field: 'turma_id'
    },
    numeroFaltas: {
      type: DataTypes.INTEGER,
      field: 'numero_faltas'
    },
  }

  const tableConfiguration = {
    tableName: 'alunos_turmas',
    timestamps: false,
  }

  return sequelize.define('AlunoTurma', tableDefinitions, tableConfiguration);
}