import { Produccion } from "../analisis/Produccion";
import { Termino } from "../analisis/Termino";
import { NoTerminal } from "./NoTerminal";

export class PrimerosCalculator {

    private producciones: Array<Produccion>;
    private noTerminalsTable: Array<NoTerminal>;

    constructor(producciones: Array<Produccion>, noTerminalsTable: Array<NoTerminal>) {
        this.producciones = producciones;
        this.noTerminalsTable = noTerminalsTable;
    }

    public getPrimeros() {
        //for (let i in this.producciones) {
        let nameLeft: string = this.producciones[0].getLeftSide();
        let pTemp: Array<Produccion> = new Array<Produccion>();
        this.producciones.forEach(p => {
            if (p.getLeftSide() == nameLeft) {
                pTemp.push(p);
            }
        });
        this.calcularPrimeros(nameLeft, pTemp);
    }

    private calcularPrimeros(nameLeft: string, pTemp: Array<Produccion>) {
        let nTermTblLeft: NoTerminal = this.getNoTermTbl(nameLeft);

        for (let p of pTemp) {
            let right: Termino = p.getRightSide()[0];
            if  (right.getIsTerminal()) {
                this.addToPrimeros(nTermTblLeft.getPrimeros(), right.getNombre());
            } else {
                if (right.getNombre() != 'lambda') {
                    if (!nTermTblLeft.getIsNulable()) {
                        if (nameLeft != right.getNombre()) {
                            let nTermTblRight: NoTerminal = this.getNoTermTbl(right.getNombre());
                            if (nTermTblRight.getPrimeros().length == 0) {
                                let left = right.getNombre();
                                let prodTemp: Array<Produccion> = [];
                                this.producciones.forEach(p => {
                                    if (p.getLeftSide() == left) {
                                        prodTemp.push(p);
                                    }
                                });
                                this.calcularPrimeros(left, prodTemp);
                            }
                            nTermTblRight.getPrimeros().forEach(p => {
                                this.addToPrimeros(nTermTblLeft.getPrimeros(), p);
                            });
                        }
                    } else {
                        //Evaluar siguiente
                    }
                }
            }
        }
    }

    private getNoTermTbl(nameNT: string): NoTerminal {
        return this.noTerminalsTable.find(e => e.getName() == nameNT);
    }

    private addToPrimeros(array: Array<string>  , element: string) {
        if (array.find(e => e == element) == undefined) {
            array.push(element);
        }
    }
}