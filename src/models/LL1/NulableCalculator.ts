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
            let isNulable: boolean = true;

            for (const t of p.getRightSide()) {
                if (!t.getIsTerminal()) {
                    let noTermRightTabla: NoTerminal = this.noTerminalesTabla.find(e => e.getName() == t.getNombre());
                    if(!noTermRightTabla.getIsNulable()) {
                        isNulable = false;
                    }
                } else {
                    isNulable = false;
                }
            }

            let noTermLefTabla: NoTerminal = this.noTerminalesTabla.find(e => e.getName() == noTermLeft);
            if (isNulable) {
                if (!noTermLefTabla.getIsNulable()) {
                    noTermLefTabla.setIsNulable(true);
                    this.verificarNulable();
                }
            }
        }
    }
}