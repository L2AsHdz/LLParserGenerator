import {Request, Response} from 'express';
import {InformacionAnalisis} from '../models/analisis/InformacionAnalisis';
import parser from '../analizador/Analyzer';
import { PrimerosCalculator } from '../models/LL1/PrimerosCalculator';
import { NoTerminal } from '../models/LL1/NoTerminal';
import { Produccion } from '../models/analisis/Produccion';
import { NulableCalculator } from '../models/LL1/NulableCalculator';
import { SiguientesCalculator } from '../models/LL1/SiguientesCalculator';
import { ErroresSemanticos } from '../models/Errores/ErroresSemanticos';

class AnalizadorController {

    public analizar(request: Request, response: Response) {
        const textoEntrada = request.body.textoEntrada;
        const info: InformacionAnalisis = parser.parse(textoEntrada);

        //analizar errores semanticos
        let erroresSemanticos: ErroresSemanticos = new ErroresSemanticos(info);
        erroresSemanticos.analizar().forEach(e => {
            info.getErrores().push(e);
        });
        let errores: Array<string> = info.getErrores();

        if (info.getErrores().length == 0) {
            let noTermsTable: Array<NoTerminal> = addNonTerminals(info.getProducciones());
            let nulables: NulableCalculator = new NulableCalculator(info.getProducciones(), noTermsTable);
            nulables.calcularNulables();

            let primeros: PrimerosCalculator = new PrimerosCalculator(info.getProdInicial(), info.getProducciones(), noTermsTable);
            primeros.getPrimeros();

            let siguientes: SiguientesCalculator = new SiguientesCalculator(info.getProdInicial(), info.getProducciones(), noTermsTable);
            siguientes.getSiguientes();

            console.log('NoTerminalesTabla: ');
            for (let nT of noTermsTable) {
                console.log(nT);
            }
            response.send('ESTA VIVO!!!!!!!');
        } else {
            for (const e of info.getErrores()) {
                console.log(e);
            }
            response.render('result', {
                'tituloA': 'Se encontraron los siguientes errores:',
                'errores': errores
            });
        }


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