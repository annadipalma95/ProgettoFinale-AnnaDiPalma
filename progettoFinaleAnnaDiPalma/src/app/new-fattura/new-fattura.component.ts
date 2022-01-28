import { Component, OnInit } from '@angular/core';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-new-fattura',
  templateUrl: './new-fattura.component.html',
  styleUrls: ['./new-fattura.component.css']
})
export class NewFatturaComponent implements OnInit {

  testo = '';
  newFattura: Fattura = new Fattura();

  //statoFattura: StatoFattura[] = [];

  constructor(private Fattureservice: FattureService) { }

  ngOnInit(): void {
  }

  addNew() {
    if (this.newFattura.importo && this.newFattura.anno && this.newFattura.numero) {
    this.Fattureservice.addNew(this.newFattura)
      .subscribe(response => console.log(response));
    this.testo = 'FATTURA INVIATA'
    }
    else {
      alert('COMPILA TUTTI I CAMPI!!!')
    }
  }

}