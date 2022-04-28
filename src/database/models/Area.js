module.exports = (sequelize, DataTypes) => {
  const tableDefinitions = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
    },
  }

  const tableConfiguration = {
    tableName: 'areas',
    timestamps: false,
  }

  const AreaModel = sequelize.define('Area', tableDefinitions, tableConfiguration);

  AreaModel.associate = (models) => {
    AreaModel.hasMany(models.Curso, {
      as: 'cursos',
      foreignKey: 'areaId'
    });
  };

  return AreaModel;
}