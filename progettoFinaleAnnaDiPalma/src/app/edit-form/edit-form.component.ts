import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../classes/client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  client: Client = {
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
    dataInserimento: "",
    dataUltimoContatto: "",
    fatturatoAnnuale: null
  }

  text = "";

  constructor(private route: ActivatedRoute,
    private clientService: ClientsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientService.getClientById(params['id']).subscribe(data => this.client = data)
    })
  }

  edit() {
    this.clientService.editClient(this.client).subscribe(response => console.log(response));
    this.text = "DATI CLIENTE MODIFICATI CON SUCCESSO"
  }

  goBack() {
    history.back();
  }
}
