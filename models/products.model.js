module.exports = function (sequelize, Sequelize) {
  return sequelize.define("products", {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
      field: "name",
      validate: {
        notEmpty: true,
        min: {
          args: [3],
        },
      },
    },
    price: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      field: "price",
      validate: {
        isDecimal: true
      },
    },
  });
};
