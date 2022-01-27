
import { Component, OnInit } from '@angular/core';

import { Client } from '../classes/client';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';

import { ClientsService } from '../services/clients.service';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-form-clients',
  templateUrl: './form-clients.component.html',
  styleUrls: ['./form-clients.component.css']
})
export class FormClientsComponent implements OnInit {

  newClient: Client = {
    id: +"",
    ragioneSociale: "",
    partitaIva: "",
    tipoCliente: "",
    email: "",
    pec: "",
    telefono: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    emailContatto: "",
    indirizzoSedeOperativa: {
      id: +"",
      via: "",
      civico: "",
      cap: "",
      localita: "",
      comune: {
        id: 1,
        nome: "",
        provincia: {
          id: +"",
          nome: "",
          sigla: ""
        }
      }
    },
    indirizzoSedeLegale: {
      id: +"",
      via: "",
      civico: "",
      cap: "",
      localita: "",
      comune: {
        id: 1,
        nome: "",
        provincia: {
          id: +"",
          nome: "",
          sigla: ""
        }
      }
    },
    dataInserimento: Date.now().toString(),
    dataUltimoContatto: Date.now().toString(),
    fatturatoAnnuale: null
  }

  text = '';
  tipoClienti: string[] = [];
  comuniSL: Comune[] = [];
  comuniSO: Comune[] = [];
  province: Provincia[] = [];
  provSelSL = '';
  provSelSO = '';
  filtro: Comune[] = [];

  constructor(private clientService: ClientsService,
    private comService: ComuniService,
    private provService: ProvinceService,) { }

  ngOnInit(): void {
    this.clientService.getTipoClient()
      .subscribe(response => this.tipoClienti = response);

    this.comService.getAllComuni()
      .subscribe(response => { this.comuniSL = response.content, this.comuniSO = response.content, this.filtro = response.content });
  }

  GetComuni() {
    this.comService.getAllComuni().subscribe(response => { this.comuniSL = response.content, this.comuniSO = response.content, this.filtro = response.content });
  }

  GetProvince() {
    this.provService.getAllProvince().subscribe(response => this.province = response.content);
  }

  dropdown() {
    this.comuniSL = this.filtro.filter(element => element.provincia.nome == this.provSelSL)
    this.comuniSO = this.filtro.filter(element => element.provincia.nome == this.provSelSO)
  }

  addNewClient() {
    if (this.newClient.ragioneSociale != '' && this.newClient.partitaIva != '' && this.newClient.indirizzoSedeLegale.comune.nome != '' && this.newClient.indirizzoSedeOperativa.comune.nome != '' && this.newClient.tipoCliente != '') {
      {
        this.clientService.addNewClient(this.newClient).subscribe(response => console.log(response));
        this.text = 'NUOVO CLIENTE INSERITO';
      }
    } else {
      alert('Compila tutti i campi!')
    }
  }

}
