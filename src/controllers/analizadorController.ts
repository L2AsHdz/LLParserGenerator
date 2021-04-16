import {Request, Response} from 'express';
import {InformacionAnalisis} from '../models/analisis/InformacionAnalisis';
import parser from '../analizador/Analyzer';
import { PrimerosCalculator } from '../models/LL1/PrimerosCalculator';
import { NoTerminal } from '../models/LL1/NoTerminal';
import { Produccion } from '../models/analisis/Produccion';
import { NulableCalculator } from '../models/LL1/NulableCalculator';

class AnalizadorController {

    public analizar(request: Request, response: Response) {
        const textoEntrada = request.body.textoEntrada;
        const info: InformacionAnalisis = parser.parse(textoEntrada);
        /*console.log(textoEntrada, '\n\n');

        info.print();*/

        let noTermsTable: Array<NoTerminal> = addNonTerminals(info.getProducciones());
        let nulables: NulableCalculator = new NulableCalculator(info.getProducciones(), noTermsTable);
        nulables.calcularNulables();

        let gen: PrimerosCalculator = new PrimerosCalculator(info.getProdInicial(), info.getProducciones(), noTermsTable);
        gen.getPrimeros();

        console.log('NoTerminalesTabla: ');
        for (let nT of noTermsTable) {
            console.log(nT);
        }

        response.send('ESTA VIVO!!!!!!!');
    }

}
const addNonTerminals = (producciones: Array<Produccion>) => {
    let noTerminals: Array<NoTerminal> = new Array<NoTerminal>();
    for (let p of producciones) {
        let name: string = p.getLeftSide();

        if  (noTerminals.find(e => e.getName() == name) == undefined) {
            noTerminals.push(new NoTerminal(name, [], []));
        }
    }

    return noTerminals;
};

export const analizadorController = new AnalizadorController();