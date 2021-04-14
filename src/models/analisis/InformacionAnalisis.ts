import {Produccion} from './Produccion';

export class InformacionAnalisis {

    private terminales: Array<string>;
    private terminalesUsados: Array<string>;
    private nonTerminals: Array<string>;
    private nonTerminalsUsados: Array<string>;
    private producciones: Array<Produccion>;

    public getTerminales(): Array<string> {
        return this.terminales;
    }

    public setTerminales(terminales: Array<string>): void {
        this.terminales = terminales;
    }

    public getTerminalesUsados(): Array<string> {
        return this.terminalesUsados;
    }

    public setTerminalesUsados(terminalesUsados: Array<string>): void {
        this.terminalesUsados = terminalesUsados;
    }

    public getNonTerminals(): Array<string> {
        return this.nonTerminals;
    }

    public setNonTerminals(nonTerminals: Array<string>): void {
        this.nonTerminals = nonTerminals;
    }

    public getNonTerminalsUsados(): Array<string> {
        return this.nonTerminalsUsados;
    }

    public setNonTerminalsUsados(nonTerminalsUsados: Array<string>): void {
        this.nonTerminalsUsados = nonTerminalsUsados;
    }

    public getProducciones(): Array<Produccion> {
        return this.producciones;
    }

    public setProducciones(producciones: Array<Produccion>): void {
        this.producciones = producciones;
    }

}