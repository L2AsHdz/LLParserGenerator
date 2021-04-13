import {Request, Response} from 'express';


class AnalizadorController {

    public analizar(request: Request, response: Response) {
        const textoEntrada = request.body;
        console.log(textoEntrada);
        response.send('Holi');
    }
}

export const analizadorController = new AnalizadorController();