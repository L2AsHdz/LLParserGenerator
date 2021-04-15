import {Termino} from './Termino';

export class Produccion {

    private leftSide: string;
    private rightSide: Array<Termino>;

    constructor(leftSide: string, rightSide: Array<Termino>) {
        this.leftSide = leftSide;
        this.rightSide = rightSide;
    }

    public getLeftSide(): string {
        return this.leftSide;
    }

    public setLeftSide(leftSide: string): void {
        this.leftSide = leftSide;
    }

    public getRightSide(): Array<Termino> {
        return this.rightSide;
    }

    public setRightSide(rightSide: Array<Termino>): void {
        this.rightSide = rightSide;
    }

}