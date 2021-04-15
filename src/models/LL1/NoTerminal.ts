
export class NoTerminal {

    private name: string;
    private primeros: Array<string>;
    private siguientes: Array<string>;
    private isNulable: boolean;

    constructor(noTerminal: string, primeros: Array<string>, siguientes: Array<string>) {
        this.name = noTerminal;
        this.primeros = primeros;
        this.siguientes = siguientes;
        this.isNulable = false;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getPrimeros(): Array<string> {
        return this.primeros;
    }

    public setPrimeros(primeros: Array<string>): void {
        this.primeros = primeros;
    }

    public getSiguientes(): Array<string> {
        return this.siguientes;
    }

    public setSiguientes(siguientes: Array<string>): void {
        this.siguientes = siguientes;
    }

    public getIsNulable() {
        return this.isNulable;
    }

    public setIsNulable(isNulable: boolean) {
        this.isNulable = isNulable;
    }

}