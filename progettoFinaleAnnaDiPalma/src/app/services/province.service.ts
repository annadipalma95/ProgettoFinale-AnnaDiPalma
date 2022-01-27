import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Provincia } from '../classes/provincia';
import { AllProvince } from '../interfaces/all-province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  getAllProvince() {
    return this.http.get<AllProvince>(environment.baseUrl+'api/province?page=0&size=20&sort=id,ASC')
  }

  addProvincia(provincia:Provincia) {
    return this.http.post<Provincia>(environment.baseUrl+'api/province', provincia)
  }

  getById(id:number) {
    return this.http.get<Provincia>(environment.baseUrl+'api/province'+id)
  }

  delete(provincia:Provincia) {
    return this.http.get<Provincia>(environment.baseUrl+'api/province'+provincia.id)
  }
}
