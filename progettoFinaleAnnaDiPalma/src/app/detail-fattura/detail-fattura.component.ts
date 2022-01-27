import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-detail-fattura',
  templateUrl: './detail-fattura.component.html',
  styleUrls: ['./detail-fattura.component.css']
})
export class DetailFatturaComponent implements OnInit, DoCheck {

  ngDoCheck(): void {}

  fattura: Fattura = {
    id: +'',
    data: '',
    numero: +'',
    anno: +'',
    importo: +'',
    stato: {
      id: +'',
      nome: ''
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
        localita: "Gioacchino calabro",
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
          id: 1,
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
  }
  fattureArray: Fattura[] = []

  constructor(private route: ActivatedRoute,
    private fatturaService: FattureService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fatturaService.getById(params['id'])
        .subscribe(data => this.fattura = data)
    })
  }

  goEdit(fattura: Fattura) {
    this.router.navigate(['fattura', fattura.id, 'edit'])
  }

  goBack() {
    history.back();
  }
}
