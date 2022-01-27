import { Component, OnInit } from '@angular/core';
import { Comune } from '../classes/comune';
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
  newFattura: Fattura = new Fattura;

  statoFattura: StatoFattura[] = [];

  constructor(private Fattureservice: FattureService) { }

  ngOnInit(): void {
  }

  addNew() {
    this.Fattureservice.addNew(this.newFattura)
      .subscribe(response => console.log(response));
    this.testo = 'FATTURA INVIATA'
  }

}