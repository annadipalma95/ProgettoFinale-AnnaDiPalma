import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comune } from '../classes/comune';
import { AllComuni } from '../interfaces/all-comuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) { }

  getAllComuni() {
    return this.http.get<AllComuni>(environment.baseUrl+'api/comuni?page=0&size=20&sort=id,ASC')
  }

  addComune(comune: Comune) {
    return this.http.post<Comune>(environment.baseUrl+'api/comuni', comune)
  }

  delete(comune: Comune) {
    return this.http.get<Comune>(environment.baseUrl+'api/comuni'+comune.id)
  }
  
}

