import { authJwt } from '../middleware';
import productController from '../controllers/products.controller';

export default function (app) {
  app.post(
    "/product",
    [authJwt.verifyToken, authJwt.isAdmin],
    productController.addProduct
  );
  app.get(
    "/product",
    [authJwt.verifyToken, authJwt.isAdmin],
    productController.getAllProducts
  );
  app.get(
    "/product/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    productController.getProduct
  );
  app.delete(
    "/product/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    productController.deleteProduct
  );
  app.put(
    "/product/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    productController.updateProduct
  );

};
