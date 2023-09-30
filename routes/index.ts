import auth from './auth.routes';
import cloud from './cloudupload.routes';
import products from './products.routes';
import user from './user.routes';

export default function (app) {
  auth(app);
  cloud(app);
  products(app);
  user(app);
};