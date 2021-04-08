import { Request, Response, Router } from 'express';
import indexController from '../controllers/pruebaController';

const pruebaRouter = Router();

pruebaRouter.get('/', indexController.prueba);

pruebaRouter.get('/about', indexController.about);

export default pruebaRouter;