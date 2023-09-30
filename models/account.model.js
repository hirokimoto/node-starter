module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("accounts", {
      googleId: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      avatar: {
        type: Sequelize.STRING,
      },
      follows: {
        type: Sequelize.BIGINT,
      },
      followers: {
        type: Sequelize.BIGINT,
      },
      preferences: {
        type: Sequelize.STRING,
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }
    });
    Account.associate = function (models) {
      // associations can be defined here
      Account.belongsToMany(models.roles, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId",
      });
    };
    return Account;
  };
  