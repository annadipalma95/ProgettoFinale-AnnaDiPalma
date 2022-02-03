import { Component, OnInit } from '@angular/core';
import { Fattura } from '../classes/fattura';
import { StatoFattura } from '../classes/stato-fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-new-fattura',
  templateUrl: './new-fattura.component.html',
  styleUrls: ['./new-fattura.component.css']
})
export class NewFatturaComponent implements OnInit {

  testo = '';
  newFattura: Fattura = new Fattura();
  statoFattura: StatoFattura[] = [];


  constructor(private Fattureservice: FattureService) { }

  ngOnInit(): void {
  }

  addNew() {
    if (this.newFattura.data != '' && this.newFattura.importo != 0 && this.newFattura.stato.nome != '') {
      if (!this.newFattura.id) {
        this.Fattureservice.addNew(this.newFattura)
          .subscribe(response => console.log(response));
        this.testo = 'FATTURA INVIATA'
      }
    }
    else {
      alert('COMPILA TUTTI I CAMPI!!!')
    }
  }

}