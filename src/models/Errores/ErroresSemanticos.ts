import { info } from "node:console";
import { InformacionAnalisis } from "../analisis/InformacionAnalisis";

export class ErroresSemanticos {

    private informacion: InformacionAnalisis;
    private errores: Array<string>;

    constructor(informacion: InformacionAnalisis) {
        this.informacion = informacion;
        this.errores = new Array<string>();
    }

    public analizar(): Array<string> {

        this.informacion.getTerminalesUsados().forEach(tu => {
            if (this.informacion.getTerminales().find(e => e == tu) == undefined) {
                this.errores.push('El terminal ' + tu + ' no ha sido declarado');
            }
        });

        this.informacion.getNonTerminalsUsados().forEach(ntu => {
            if (this.informacion.getNonTerminals().find(e => e == ntu) == undefined) {
                this.errores.push('El no terminal ' + ntu + ' no ha sido declarado');
            }
        });

        return this.errores;
    }
}