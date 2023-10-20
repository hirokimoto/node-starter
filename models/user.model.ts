import {
  Association, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin,
  HasManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, Model,
  InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, ForeignKey,
} from 'sequelize';
import Role from './role.model';

class User extends Model<InferAttributes<User, { omit: 'roles' }>, InferCreationAttributes<User, { omit: 'roles' }>> {
  // id can be undefined during creation when using `autoIncrement`
  declare id: CreationOptional<number>;
  declare googleId: string;
  declare username: string;
  declare name: string;
  declare email: string;
  declare password: string;
  declare avatar: string | null;
  declare follows: number | null;
  declare followers: number | null;
  declare roleId: ForeignKey<Role['id']>;;

  // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.
  declare getRoles: HasManyGetAssociationsMixin<Role>; // Note the null assertions!
  declare addRole: HasManyAddAssociationMixin<Role, number>;
  declare addRoles: HasManyAddAssociationsMixin<Role, number>;
  declare setRoles: HasManySetAssociationsMixin<Role, number>;
  declare removeRole: HasManyRemoveAssociationMixin<Role, number>;
  declare removeRoles: HasManyRemoveAssociationsMixin<Role, number>;
  declare hasRole: HasManyHasAssociationMixin<Role, number>;
  declare hasRoles: HasManyHasAssociationsMixin<Role, number>;
  declare countRoles: HasManyCountAssociationsMixin;
  declare createRole: HasManyCreateAssociationMixin<Role, 'ownerId'>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  declare roles?: NonAttribute<Role[]>; // Note this is optional since it's only populated when explicitly requested in code

  // getters that are not attributes should be tagged using NonAttribute
  // to remove them from the model's Attribute Typings.
  get fullName(): NonAttribute<string> {
    return this.name;
  }

  declare static associations: {
    roles: Association<User, Role>;
  };
}

export default User;