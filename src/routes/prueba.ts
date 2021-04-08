import { Request, Response, Router } from 'express';
const router = Router();

router.get('/', (request: Request, response: Response) => {
    response.render('index', {
        title: 'Titulo desde router',
        msg: 'Este es un mensaje enviado desde un router con TS'
    })
});

export default router;