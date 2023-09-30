import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes, ForeignKey } from 'sequelize';
import Role from './role.model';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare googleId: string;
  declare username: string;
  declare name: string;
  declare email: string;
  declare password: string;
  declare avatar: string;
  declare follows: number;
  declare followers: number;
  declare roleId: ForeignKey<Role['id']>;;
  declare source: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export { User };

export default function(sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      googleId: {
        type: new DataTypes.STRING(128),
        allowNull: true
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
        allowNull: false
      },
      follows: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      followers: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      source: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'users',
      sequelize
    }
  );
  
  User.belongsTo(Role, { targetKey: 'id' });

  return User;
}