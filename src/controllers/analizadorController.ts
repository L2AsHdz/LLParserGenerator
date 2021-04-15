import {Request, Response} from 'express';
import {InformacionAnalisis} from '../models/analisis/InformacionAnalisis';
import parser from '../analizador/Analyzer';

class AnalizadorController {

    public analizar(request: Request, response: Response) {
        const textoEntrada = request.body.textoEntrada;
        console.log(textoEntrada);
        const info: InformacionAnalisis = parser.parse(textoEntrada);
        info.print();
        response.send('ESTA VIVO!!!!!!!');
    }
}

export const analizadorController = new AnalizadorController();