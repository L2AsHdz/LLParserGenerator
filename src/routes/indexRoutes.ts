import {Router, Request, Response} from 'express';
import pruebaRouter from './prueba';

const routes = Router();

//routes.use('/prueba', pruebaRouter);

routes.get('/', (request: Request, response: Response) => {
    response.render('indexWison',);
});

export default routes;