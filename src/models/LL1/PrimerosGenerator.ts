import { Produccion } from "../analisis/Produccion";
import { Termino } from "../analisis/Termino";
import { NoTerminal } from "./NoTerminal";

export class PrimerosGenerator {

    private producciones: Array<Produccion>;
    private noTerminals: Array<NoTerminal>;

    constructor(producciones: Array<Produccion>, noTerminals: Array<NoTerminal>) {
        this.producciones = producciones;
        this.noTerminals = noTerminals;
    }

    public getPrimeros() {
        for (let i in this.producciones) {
            let x: string = this.producciones[i].getLeftSide();
            let right: Termino = this.producciones[i].getRightSide()[0];
            console.log('R: ', x, ' - L: ', right.getNombre());
        }
    }
}