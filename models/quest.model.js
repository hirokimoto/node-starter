module.exports = function (sequelize, Sequelize) {
    return sequelize.define("quests", {
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
          min: {
            args: [3],
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: {
            args: [3],
          },
        },
      },
      image: {
        type: Sequelize.STRING,
      },
      author_name: {
        type: Sequelize.STRING,
      },
      steps: {
        type: Sequelize.STRING,
      },
      tags: {
        type: Sequelize.STRING,
      },
      enrolled: {
        type: Sequelize.INTEGER,
      },
      achieved: {
        type: Sequelize.INTEGER,
      },
    });
  };
  