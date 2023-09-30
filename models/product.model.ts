import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { User } from './user.model';

class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare price: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Product.belongsTo(User, { targetKey: 'id' });

export default Product;