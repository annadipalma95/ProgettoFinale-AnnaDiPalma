import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comune } from '../classes/comune';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-edit-fattura',
  templateUrl: './edit-fattura.component.html',
  styleUrls: ['./edit-fattura.component.css']
})
export class EditFatturaComponent implements OnInit {
  
  fattura: Fattura = new Fattura();

  text = ''

  constructor(private route: ActivatedRoute,
    private fatturaService: FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.fatturaService.getById(params['id'])
      .subscribe(data => this.fattura = data)
    )
  }

  edit() {
    this.fatturaService.edit(this.fattura).subscribe(response => console.log(response));
    this.text = 'FATTURA MODIFICATA'
  }

  goBack() {
    history.back()
  }
}
