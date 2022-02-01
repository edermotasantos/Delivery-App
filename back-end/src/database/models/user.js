'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'users',
  });

  user.associate = (models) => {
    user.hasMany(models.sale,
      { foreignKey: 'userId', as: 'sales'},
      { foreignKey: 'selleId', as: 'sales'},
    );
  };

  return user;
};