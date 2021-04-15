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

    public getPrimeros(index: number) {
        //for (let i in this.producciones) {
        let x: string = this.producciones[index].getLeftSide();
        let right: Termino = this.producciones[index].getRightSide()[0];

        if  (right.getIsTerminal()) {
            let noTerm: NoTerminal = this.noTerminals.find(e => e.getName() == x);
            noTerm.getPrimeros().push(right.getNombre());
        }
    }
    //}
}