import { DataTypes, Sequelize } from 'sequelize';
import Product from './product.model';
import Role from './role.model';
import User from './user.model';

const db: any = {};
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/db.config.js")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    ownerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    price: {
      type: new DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'products',
    underscored: true,
    sequelize
  }
);

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    googleId: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    avatar: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
    follows: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    followers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    source: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'users',
    underscored: true,
    sequelize
  }
);

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'roles',
    underscored: true,
    sequelize
  }
);

// Here we associate which actually populates out pre-declared `association` static and other methods.
User.hasMany(Product, {
  sourceKey: 'id',
  foreignKey: 'ownerId',
  as: 'products' // this determines the name in `associations`!
});
User.hasOne(Role, { sourceKey: 'id' });

(async () => {
  await sequelize.sync();
})();

db.sequelize = sequelize;
db.users = User;
db.products = Product;
db.roles = Role;

export default db;