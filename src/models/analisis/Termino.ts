
 export class Termino {

    private nombre: string;
    private isTerminal: boolean;
    private noProduccion: number;

    public constructor(nombre: string, isTerminal: boolean) {
        this.nombre = nombre;
        this.isTerminal = isTerminal;
        this.noProduccion = 1;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getIsTerminal(): boolean {
        return this.isTerminal;
    }

    public setIsTerminal(isTerminal: boolean): void {
        this.isTerminal = isTerminal;
    }

    public getNoProduccion(): number {
        return this.noProduccion;
    }

    public setNoProduccion(noProduccion: number): void {
        this.noProduccion = noProduccion;
    }

}