import { Request, Response, Router } from 'express';
const pruebaRouter = Router();

pruebaRouter.get('/', (request: Request, response: Response) => {
    response.render('index', {
        title: 'Router prueba',
        msg: 'Este es un mensaje enviado desde un router de un router con TS'
    });
});

export default pruebaRouter;