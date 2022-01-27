import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comune } from '../classes/comune';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-edit-fattura',
  templateUrl: './edit-fattura.component.html',
  styleUrls: ['./edit-fattura.component.css']
})
export class EditFatturaComponent implements OnInit {
  
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

  text = ''

  constructor(private route: ActivatedRoute,
    private fatturaService: FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.fatturaService.getById(params['id'])
      .subscribe(data => this.fattura = data)
    )
  }

  edit() {
    this.fatturaService.edit(this.fattura).subscribe(response => console.log(response));
    this.text = 'FATTURA MODIFICATA'
  }

  goBack() {
    history.back()
  }
}
