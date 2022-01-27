import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { Comune } from '../classes/comune';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit, DoCheck {

  ngDoCheck(): void {}

  fatture: Fattura[] = [];
  /*fattura: Fattura = {
    id: +'',
    data: '',
    numero: +'',
    anno: +'',
    importo: +'',
    stato: {
      id: +'',
      nome: '',
    },
    cliente: {
      id: +'',
      ragioneSociale: '',
      partitaIva: '',
      tipoCliente: '',
      email: '',
      pec: '',
      telefono: '',
      nomeContatto: '',
      cognomeContatto: '',
      telefonoContatto: '',
      emailContatto: '',
      indirizzoSedeOperativa: {
        id: +'',
        via: '',
        civico: '',
        cap: '',
        localita: '',
        comune: {
          id: 1,
          nome: '',
          provincia: {
            id: +'',
            nome: '',
            sigla: ''
          }
        }
      },
      indirizzoSedeLegale: {
        id: +'',
        via: '',
        civico: '',
        cap: '',
        localita: '',
        comune: {
          id: +'',
          nome: '',
          provincia: {
            id: +'',
            nome: '',
            sigla: ''
          }
        }
      },
      dataInserimento: '',
      dataUltimoContatto: '',
      fatturatoAnnuale: null
    },
    indirizzoSedeOperativa: {
      id: 0,
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: new Comune
    },
    indirizzoSedeLegale: {
      id: 0,
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: new Comune
    },
    dataInserimento: '',
    dataUltimoContatto: '',
    fatturatoAnnuale: null
  }*/

  constructor(private service: FattureService,
              private router: Router) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(data => this.fatture = data.content);
  }

  remove(fattura:Fattura) {
    let index = this.fatture.indexOf(fattura);
    this.fatture.splice(index, 1)
  }

  detail(fattura:Fattura) {
    this.router.navigate(['fattura', fattura.id, 'detail'])
  }

}
