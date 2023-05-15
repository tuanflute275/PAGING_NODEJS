import express from "express";
let router = express.Router();
import homeController from '../controllers/api.controller';

let initWebRouter = (app) => {
    router.get('/product', homeController.getHomePage)
    router.get('/pageCreate', homeController.getPageCreate)
    router.post('/create-new-product', homeController.createNewProduct)

    return app.use('/', router)
}
export default initWebRouter