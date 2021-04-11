import { Request, Response, Router } from 'express';
import {pruebaController} from '../controllers/pruebaController';

const pruebaRouter = Router();

pruebaRouter.get('/', pruebaController.prueba);

pruebaRouter.get('/about', pruebaController.about);

export default pruebaRouter;