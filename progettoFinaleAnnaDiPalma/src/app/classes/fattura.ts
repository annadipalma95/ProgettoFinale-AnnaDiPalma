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
    indirizzoSedeOperativa!: {
        id: number;
        via: string;
        civico: string;
        cap: string;
        localita: string;
        comune: Comune;
    };
    indirizzoSedeLegale!: {
        id: number;
        via: string;
        civico: string;
        cap: string;
        localita: string;
        comune: Comune;
    }
    
        dataInserimento: string = "2019-06-01T08:11:01.911+00:00";
        dataUltimoContatto: string = "2021-03-24T21:32:06.375+00:00";
        fatturatoAnnuale!: null;
        
    }
    
    

