import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit, DoCheck {

  ngDoCheck(): void {

  }

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
    dataInserimento : "",
    dataUltimoContatto : "",
    fatturatoAnnuale: null
  }

  constructor(private route: ActivatedRoute,
    private clientService: ClientsService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientService.getClientById(params['id'])
        .subscribe(data => this.client = data);
    })
  }

  goEdit(client: Client) {
    this.router.navigate(['client', client.id, 'edit'])
  }

  vediFatture(client:Client) {
    this.router.navigate(['fatture-cliente', client.id])
  }
}
