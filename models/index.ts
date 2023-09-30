import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';

import Account from './account.model';
import Product from './product.model';
import Quest from './quest.model';
import Role from './role.model';
import Storage from './storage.model';
import User from './user.model';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/db.config.js")[env];
const db: any = {};
db.ROLES = ["user", "admin", "moderator"];

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  .forEach((file) => {
    const _name = file.split(".")[0]
    const name = _name.charAt(0).toUpperCase() + _name.slice(1)
    import(path.join(__dirname, file)).then(m => {
      const model = m.default;
      const _model = model(sequelize, Sequelize);
      db[name] = _model;
    })
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
sequelize.sync();

export default db;
