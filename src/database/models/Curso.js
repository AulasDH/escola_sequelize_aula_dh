module.exports = (sequelize, DataTypes) => {
  const tableDefinitions = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    areaId: {
      type: DataTypes.INTEGER,
      field: 'area_id'
    },
  }

  const tableConfiguration = {
    tableName: 'cursos',
    timestamps: false,
  }

  const CursoModel = sequelize.define('Curso', tableDefinitions, tableConfiguration);

  CursoModel.associate = (models) => {
    CursoModel.belongsTo(models.Area, {
      as: 'area',
      foreignKey: 'areaId'
    });

    CursoModel.hasMany(models.Turma, {
      as: 'turmas',
      foreignKey: 'cursoId'
    });
  };

  return CursoModel;
}