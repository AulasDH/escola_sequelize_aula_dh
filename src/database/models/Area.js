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

  return sequelize.define('Area', tableDefinitions, tableConfiguration);
}