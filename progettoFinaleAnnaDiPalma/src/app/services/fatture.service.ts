import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fattura } from '../classes/fattura';
import { IFatture } from '../interfaces/i-fatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<IFatture>(environment.baseUrl+'api/fatture?page=0&size=20&sort=id,DESC')
  }
  getById(id:number) {
    return this.http.get<Fattura>(environment.baseUrl+'api/fatture/'+id)
  }

  update(fattura:Fattura) {
    return this.http.put<Fattura>(environment.baseUrl+'api/fatture/'+fattura.id, fattura)
  }

  addNew(fattura: Fattura) {
    return this.http.post<Fattura>(environment.baseUrl+'api/fatture/', fattura)
  }

  getByCliente(id:number) {
    return this.http.get<IFatture>(environment.baseUrl+'/api/fatture/cliente/'+id)
  }
}
