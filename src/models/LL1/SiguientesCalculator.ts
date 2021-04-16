import { Produccion } from "../analisis/Produccion";
import { Termino } from "../analisis/Termino";
import { NoTerminal } from "./NoTerminal";


export class SiguientesCalculator {

    private producciones: Array<Produccion>;
    private noTerminalsTable: Array<NoTerminal>;
    private prodInicial: string;

    constructor(prodInicial: string, producciones: Array<Produccion>, noTerminalsTable: Array<NoTerminal>) {
        this.prodInicial = prodInicial;
        this.producciones = producciones;
        this.noTerminalsTable = noTerminalsTable;
    }

    public getSiguientes() {
        let name: string = this.prodInicial;
        let nTermTblLeft: NoTerminal = this.getNoTermTbl(name);
        this.addToSiguientes(nTermTblLeft.getSiguientes(), ['$']);

        for (let i = 0; i < this.noTerminalsTable.length; i++) {
            let name: string = this.noTerminalsTable[i].getName();
            let pTemp: Array<Produccion> = new Array<Produccion>();
            this.addProduccionesTemp(pTemp, name);

            this.calcularSiguientes(name, pTemp, 0);
        }

    }

    private calcularSiguientes(nameNT: string, pTemp: Array<Produccion>, indexR: number) {
        let actual: NoTerminal = this.getNoTermTbl(nameNT);

        for (const p of pTemp) {
            let next: Termino = p.getRightSide()[this.getIndexNext(p.getRightSide(), nameNT)];
            if (next != undefined) {
                if (next.getIsTerminal()) {
                    this.addToSiguientes(actual.getSiguientes(), [next.getNombre()]);
                } else {
                    let nameNext: string = this.getNameNext(p.getRightSide(), nameNT);
                    let next: NoTerminal = this.getNoTermTbl(nameNext);
                    if (!next.getIsNulable()) {
                        this.addToSiguientes(actual.getSiguientes(), next.getPrimeros());
                    } else {
                        this.addToSiguientes(actual.getSiguientes(), next.getPrimeros());

                        //let nameNextNext: string = this.getNameNext(p.getRightSide(), nameNext);
                        let nameNextNext: Termino = p.getRightSide()[this.getIndexNext(p.getRightSide(), nameNext)];
                        if (nameNextNext != undefined) {
                            let next2Table: NoTerminal = this.getNoTermTbl(nameNextNext.getNombre());
                            if (next2Table.getSiguientes().length == 0) {
                                let pTemp: Array<Produccion> = new Array<Produccion>();
                                this.addProduccionesTemp(pTemp, nameNextNext.getNombre());
                                this.calcularSiguientes(nameNextNext.getNombre(), pTemp, 0);
                            }
                            this.addToSiguientes(actual.getSiguientes(), next2Table.getSiguientes());
                        } else {
                            this.addSiguientesOfLeft(p, actual);
                        }

                    }
                }
            } else {
                this.addSiguientesOfLeft(p, actual);
            }
        }
    }

    private getNoTermTbl(nameNT: string): NoTerminal {
        return this.noTerminalsTable.find(e => e.getName() == nameNT);
    }

    private getNameNext(rightSide: Array<Termino>, name: string): string {
        for (let i = 0; i < rightSide.length; i++) {
            let t: Termino = rightSide[i];
            if (t.getNombre() === name) {
                return rightSide[++i].getNombre();
            }
        }
    }

    private getIndexNext(rightSide: Array<Termino>, name: string): number {
        for (let i = 0; i < rightSide.length; i++) {
            let t: Termino = rightSide[i];
            if (t.getNombre() === name) {
                return ++i;
            }
        }
    }

    private addToSiguientes(array: Array<string>, arrayAgregar: Array<string>) {
        for (const n of arrayAgregar) {
            if (array.find(e => e == n) == undefined) {
                array.push(n);
            }
        }
    }

    private addProduccionesTemp(temp: Array<Produccion>, name: string) {
        this.producciones.forEach(p => {
            for (const t of p.getRightSide()) {
                if (t.getNombre() === name) {
                    temp.push(p);
                }
            }
        });
    }

    private addSiguientesOfLeft(p: Produccion, actual: NoTerminal) {
        let nameLeft: string = p.getLeftSide();
        let leftTable: NoTerminal = this.getNoTermTbl(nameLeft);
        if (leftTable.getSiguientes().length == 0) {
            let pTemp: Array<Produccion> = new Array<Produccion>();
            this.addProduccionesTemp(pTemp, nameLeft);
            this.calcularSiguientes(nameLeft, pTemp, 0);
        }
        this.addToSiguientes(actual.getSiguientes(), leftTable.getSiguientes());
    }
}