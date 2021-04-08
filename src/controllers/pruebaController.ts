import { Request, Response, Router } from 'express';

const prueba = (request: Request, response: Response) => {
    response.render('index', {
        title: 'Router prueba',
        msg: 'Este es un mensaje enviado desde un router de un router con TS'
    });
}

const about = (request: Request, response: Response) => {
    response.render('index', {
        'title': 'About',
        'msg': 'Mensaje desde about'
    });
}

export default {
    prueba,
     about
};