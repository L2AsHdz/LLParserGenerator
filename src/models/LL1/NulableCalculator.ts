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
        for (let p of this.producciones) {
            let noTermLeft: string = p.getLeftSide();
            let termino: Termino = p.getRightSide()[0];
            if (termino.getNombre() == 'lambda') {
                let noTermTabla: NoTerminal = this.noTerminalesTabla.find(e => e.getName() == noTermLeft);
                noTermTabla.setIsNulable(true);
            }
        }

        this.verificarNulable();

        return this.noTerminalesTabla;
    }

    public verificarNulable() {
        for (let p of this.producciones) {
            let noTermLeft: string = p.getLeftSide();
            let termino: Termino = p.getRightSide()[0];

            if (!termino.getIsTerminal()) {
                let noTermLefTabla: NoTerminal = this.noTerminalesTabla.find(e => e.getName() == noTermLeft);
                let noTermRightTabla: NoTerminal = this.noTerminalesTabla.find(e => e.getName() == termino.getNombre());
                if(noTermRightTabla.getIsNulable()) {

                    if (!noTermLefTabla.getIsNulable()) {
                        noTermLefTabla.setIsNulable(true);
                        this.verificarNulable();
                    }
                }
            }
        }
    }
}