import { Produccion } from "../analisis/Produccion";
import { Termino } from "../analisis/Termino";
import { NoTerminal } from "./NoTerminal";

export class NulableCalculator {

    private producciones: Array<Produccion>;
    private noTerminalesTabla: Array<NoTerminal>;

    constructor (producciones: Array<Produccion>, noTerminalesTabla: Array<NoTerminal>) {
        this.producciones = producciones;
        this.noTerminalesTabla = noTerminalesTabla;
    }

    public calcularNulables(): Array<NoTerminal> {
        console.log('Calculando nulables');
        for (let i in this.producciones) {
            let noTermLeft: string = this.producciones[i].getLeftSide();
            let termino: Termino = this.producciones[i].getRightSide()[0];
            if (termino.getNombre() == 'lambda'){
                console.log('En if');
                let noTermTabla: NoTerminal = this.noTerminalesTabla.find(e => e.getName() == noTermLeft);
                noTermTabla.setIsNulable(true);
            }
        }
        return this.noTerminalesTabla;
    }
}