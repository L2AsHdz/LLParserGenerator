import {Router, Request, Response} from 'express';
import analizadorRouter from './analizador/analizadorRouter';

const routes = Router();

//routes.use('/prueba', pruebaRouter);
routes.use(analizadorRouter);

routes.get('/', (request: Request, response: Response) => {
    response.render('indexWison',);
});

export default routes;