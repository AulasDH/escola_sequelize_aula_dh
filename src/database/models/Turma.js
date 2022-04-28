module.exports = (sequelize, DataTypes) => {
  const tableDefinitions = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    duracao: {
      type: DataTypes.INTEGER,
    },
    anoInicio: {
      type: DataTypes.INTEGER,
      field: 'ano_inicio'
    },
    semestre: {
      type: DataTypes.INTEGER,
    },
    cursoId: {
      type: DataTypes.INTEGER,
      field: 'curso_id'
    },
    professorId: {
      type: DataTypes.INTEGER,
      field: 'professor_id'
    },
  }

  const tableConfiguration = {
    tableName: 'turmas',
    timestamps: false,
  }

  const TurmaModel = sequelize.define('Turma', tableDefinitions, tableConfiguration);

  TurmaModel.associate = (models) => {
    TurmaModel.belongsTo(models.Professor, {
      as: 'professor',
      foreignKey: 'professorId'
    });

    TurmaModel.belongsTo(models.Curso, {
      as: 'curso',
      foreignKey: 'cursoId'
    });

    TurmaModel.belongsToMany(models.Aluno, {
      as: 'alunos',
      foreignKey: 'turmaId',
      through: models.AlunoTurma,
      otherKey: 'alunoId'
    });
  };

  return TurmaModel;
}