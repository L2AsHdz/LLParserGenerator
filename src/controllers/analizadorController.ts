import {Request, Response} from 'express';
import {InformacionAnalisis} from '../models/analisis/InformacionAnalisis';
import parser from '../analizador/Analyzer';
import { PrimerosGenerator } from '../models/LL1/PrimerosGenerator';
import { NoTerminal } from '../models/LL1/NoTerminal';

class AnalizadorController {

    public analizar(request: Request, response: Response) {
        const textoEntrada = request.body.textoEntrada;
        console.log(textoEntrada);
        const info: InformacionAnalisis = parser.parse(textoEntrada);
        info.print();

        console.log('\n\n\n\n');

        let nTs = new Array<NoTerminal>();
        let gen = new PrimerosGenerator(info.getProducciones(), nTs);
        gen.getPrimeros();
        response.send('ESTA VIVO!!!!!!!');
    }
}

export const analizadorController = new AnalizadorController();