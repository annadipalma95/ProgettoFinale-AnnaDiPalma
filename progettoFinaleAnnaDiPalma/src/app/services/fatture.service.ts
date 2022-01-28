import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../classes/client';
import { Fattura } from '../classes/fattura';
import { Clients } from '../interfaces/clients';
import { Fatture } from '../interfaces/fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Fatture>(environment.baseUrl+'api/fatture?page=0&size=20&sort=id,DESC')
  }
  getById(id:number) {
    return this.http.get<Fattura>(environment.baseUrl+'api/fatture/'+id)
  }

  edit(fattura:Fattura) {
    return this.http.put<Fattura>(environment.baseUrl+'api/fatture/'+fattura.id, fattura)
  }

  addNew(fattura: Fattura) {
    return this.http.post<Fattura>(environment.baseUrl+'api/fatture/', fattura)
  }

  getByCliente(cliente: Client) {
    return this.http.get<any>(environment.baseUrl+'api/fatture?page=0&size=20&sort=id,ASC')
  }
}
