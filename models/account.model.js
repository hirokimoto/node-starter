module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("accounts", {
      username: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      follows: {
        type: Sequelize.INTEGER,
      },
      followers: {
        type: Sequelize.INTEGER,
      },
    });
    Account.associate = function (models) {
      Account.belongsTo(models.users, {
        foreignKey: "userId",
      });
    };
    return Account;
  };
  