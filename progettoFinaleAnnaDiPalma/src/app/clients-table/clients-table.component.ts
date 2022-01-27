import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit, DoCheck {

  ngDoCheck() { }

  clients: Client[] = [];

  constructor(private Clientservice: ClientsService,
    private router: Router) { }

  ngOnInit(): void {
    this.Clientservice.getAllClients()
      .subscribe(data => this.clients = data.content)
  }

  remove(client: Client) {
    this.Clientservice.removeClient(client)
      .subscribe(data => {
        this.clients = this.clients.filter(ele => ele !== client)
      })
    let index = this.clients.indexOf(client);
    this.clients.splice(index, 1)
  }

  seeDetail(client: Client) {
    this.router.navigate(['client', client.id, 'detail'])
  }

}
