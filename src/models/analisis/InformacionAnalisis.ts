import {Produccion} from './Produccion';

export class InformacionAnalisis {

    private prodInicial: string;
    private terminales: Array<string>;
    private terminalesUsados: Array<string>;
    private nonTerminals: Array<string>;
    private nonTerminalsUsados: Array<string>;
    private producciones: Array<Produccion>;

    constructor(prodInicial: string, terminales: Array<string>, terminalesUsados: Array<string>, nonTerminals: Array<string>,
        nonTerminalsUsados: Array<string>, producciones: Array<Produccion>) {
            this.prodInicial = prodInicial;
            this.terminales = terminales;
            this.terminalesUsados = terminalesUsados;
            this.nonTerminals = nonTerminals;
            this.nonTerminalsUsados = nonTerminalsUsados;
            this.producciones = producciones;
    }

    public getProdInicial(): string {
        return this.prodInicial;
    }

    public setProdInicial(prodInicial: string): void {
        this.prodInicial = prodInicial;
    }

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

    public print() {
        console.log('Terminales declarados: ', this.terminales.join());
        console.log('Terminales usuados: ', this.terminalesUsados.join());
        console.log('No Terminales declarados: ', this.nonTerminals.join());
        console.log('No Terminales usuados: ', this.nonTerminalsUsados.join());

        console.log('Producciones: \n');
        for (let i in this.producciones) {
            console.log(this.producciones[i]);
        }
    }

}