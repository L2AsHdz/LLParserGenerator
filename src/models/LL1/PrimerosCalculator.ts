import { Produccion } from "../analisis/Produccion";
import { Termino } from "../analisis/Termino";
import { NoTerminal } from "./NoTerminal";

export class PrimerosCalculator {

    private prodInicial: string;
    private producciones: Array<Produccion>;
    private noTerminalsTable: Array<NoTerminal>;

    constructor(proInicial: string, producciones: Array<Produccion>, noTerminalsTable: Array<NoTerminal>) {
        this.prodInicial = proInicial;
        this.producciones = producciones;
        this.noTerminalsTable = noTerminalsTable;
    }

    public getPrimeros() {
        let name: string = this.prodInicial;
        let pTemp: Array<Produccion> = new Array<Produccion>();
        this.addProduccionesTemp(pTemp, name);

        this.calcularPrimeros(name, pTemp, 0);

        for (let i = 0; i < this.noTerminalsTable.length; i++) {
            let name: string = this.noTerminalsTable[i].getName();
            let pTemp: Array<Produccion> = new Array<Produccion>();
            this.addProduccionesTemp(pTemp, name);
            this.calcularPrimeros(name, pTemp, 0);
        };
    }

    private calcularPrimeros(nameLeft: string, pTemp: Array<Produccion>, indexRight: number) {
        let nTermTblLeft: NoTerminal = this.getNoTermTbl(nameLeft);

        for (let p of pTemp) {
            let right: Termino = p.getRightSide()[indexRight];
            if (right.getNombre() != 'lambda') {
                if  (right.getIsTerminal()) {
                    this.addToPrimeros(nTermTblLeft.getPrimeros(), right.getNombre());
                } else {
                    if (!nTermTblLeft.getIsNulable()) {
                        if (nameLeft != right.getNombre()) {
                            this.addPrimerosDeNoTerminal(right, nTermTblLeft);
                        }
                    } else {
                        if (nameLeft != right.getNombre()) {
                            this.addPrimerosDeNoTerminal(right, nTermTblLeft);
                            if (indexRight < (p.getRightSide().length - 1)) {
                                right = p.getRightSide()[++indexRight];
                                let nTermTblRight: NoTerminal = this.getNoTermTbl(right.getNombre());
                                if (nTermTblRight.getPrimeros().length == 0) {
                                    let left = right.getNombre();
                                    let prodTemp: Array<Produccion> = [];
                                    this.addProduccionesTemp(prodTemp, left);
                                    this.calcularPrimeros(left, prodTemp, 0);
                                }
                                nTermTblRight.getPrimeros().forEach(p => {
                                    this.addToPrimeros(nTermTblLeft.getPrimeros(), p);
                                });
                            }
                        } else {
                            //Evaluar solo siguientes siguientes
                        }
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

    private addProduccionesTemp(temp: Array<Produccion>, nameLeft: string) {
        this.producciones.forEach(p => {
            if (p.getLeftSide() == nameLeft) {
                temp.push(p);
            }
        });
    }

    private addPrimerosDeNoTerminal(right: Termino, nTermTblLeft: NoTerminal) {
        let nTermTblRight: NoTerminal = this.getNoTermTbl(right.getNombre());
        if (nTermTblRight.getPrimeros().length == 0) {
            let left = right.getNombre();
            let prodTemp: Array<Produccion> = [];
            this.addProduccionesTemp(prodTemp, left);
            this.calcularPrimeros(left, prodTemp, 0);
        }
        nTermTblRight.getPrimeros().forEach(p => {
            this.addToPrimeros(nTermTblLeft.getPrimeros(), p);
        });
    }
}