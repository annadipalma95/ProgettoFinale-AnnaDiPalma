import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../classes/client';
import { IClients } from '../interfaces/i-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients = environment.baseUrl+'api/clienti?page=0&size=20&sort=id,DESC'

  constructor(private http: HttpClient) { }
  
  getAllClients() {
    return this.http.get<IClients>(this.clients);
  }

  getClientById(id:number) {
    return this.http.get<Client>(environment.baseUrl+'api/clienti/'+id)
  }

  getTipoClient() {
    return this.http.get<string[]>(environment.baseUrl+'api/clienti/tipicliente')
  }

  addNewClient(client:Client) {
    return this.http.post<Client>(environment.baseUrl+'api/clienti', client)
  }

  updateClient(client:Client) {
    return this.http.put<Client>(environment.baseUrl+'api/clienti/'+client.id, client)
  }

  removeClient(client:Client) {
    return this.http.delete(environment.baseUrl+'api/clienti/'+client.id)
  }
}
