import {Router, Request, Response} from 'express';
import pruebaRouter from './prueba';

const routes = Router();

routes.use('/prueba', pruebaRouter);

routes.get('/', (request: Request, response: Response) => {
    response.render('index', {
        'title': 'Titulo principal',
        'msg': 'Este es un mensaje enviado desde el router principal'
    });
});

export default routes;