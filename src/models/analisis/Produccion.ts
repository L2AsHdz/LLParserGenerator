import {Termino} from './Termino';

export class Produccion {

    private nonTerminalLeft: string;
    private Terminos: Array<Termino>;

    public getNonTerminalLeft(): string {
        return this.nonTerminalLeft;
    }

    public setNonTerminalLeft(nonTerminalLeft: string): void {
        this.nonTerminalLeft = nonTerminalLeft;
    }

    public getTerminos(): Array<Termino> {
        return this.Terminos;
    }

    public setTerminos(Terminos: Array<Termino>): void {
        this.Terminos = Terminos;
    }

}