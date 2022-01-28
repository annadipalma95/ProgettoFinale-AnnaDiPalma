import { Client } from "./client"
import { Comune } from "./comune"
import { StatoFattura } from "./stato-fattura";

export class Fattura {
    id!: number;
    data: string = "";
    numero!: number;
    anno!: number;
    importo!: number;
    stato!: StatoFattura;
    cliente!: Client;

    constructor() {
        this.stato = {id: 2, nome: 'NON PAGATA'}
    }
        
    }
    
    

