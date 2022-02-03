import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comune } from '../classes/comune';
import { Fattura } from '../classes/fattura';
import { StatoFattura } from '../classes/stato-fattura';
import { FattureService } from '../services/fatture.service';
import { StatoFatturaService } from '../services/stato-fattura.service';

@Component({
  selector: 'app-edit-fattura',
  templateUrl: './edit-fattura.component.html',
  styleUrls: ['./edit-fattura.component.css']
})
export class EditFatturaComponent implements OnInit {
  
  fattura: Fattura = new Fattura();
  statoFattura: any[] = [];

  text = ''

  constructor(private route: ActivatedRoute,
    private fatturaService: FattureService,
    private statoFatturaService: StatoFatturaService) { }

  ngOnInit(): void {
    this.getStatoFattura();
    this.route.params.subscribe(params => this.fatturaService.getById(params['id'])
      .subscribe(data => this.fattura = data)
    );
  }

  getStatoFattura() {
    this.statoFatturaService.getStatus().subscribe(response => this.statoFattura = response.content);
  }

  edit() {
    this.fatturaService.update(this.fattura).subscribe(response => console.log(response));
    this.text = 'FATTURA MODIFICATA'
  }

  goBack() {
    history.back()
  }
}
