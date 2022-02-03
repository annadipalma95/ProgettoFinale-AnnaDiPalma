import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IFatture } from '../interfaces/i-fatture';

@Injectable({
  providedIn: 'root'
})
export class StatoFatturaService {

  constructor(private http: HttpClient) { }

  getStatus () {
    return this.http.get<IFatture>(environment.baseUrl + '/api/statifattura');
  }
}
