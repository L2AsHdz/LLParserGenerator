import {Request, Response, Router} from 'express';
import {analizadorController} from '../../controllers/analizadorController';

const analizadorRouter: Router = Router();

analizadorRouter.post('/analizar', analizadorController.analizar);

export default analizadorRouter;