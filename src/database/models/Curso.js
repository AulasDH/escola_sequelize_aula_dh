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

  return sequelize.define('Curso', tableDefinitions, tableConfiguration);
}