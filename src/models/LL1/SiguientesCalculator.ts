import { Produccion } from "../analisis/Produccion";
import { NoTerminal } from "./NoTerminal";


export class SiguientesCalculator {

    private producciones: Array<Produccion>;
    private noTerminalsTable: Array<NoTerminal>;

    constructor(producciones: Array<Produccion>, noTerminalsTable: Array<NoTerminal>) {
        this.producciones = producciones;
        this.noTerminalsTable = noTerminalsTable;
    }

    public getSiguientes() {

        

    }
}