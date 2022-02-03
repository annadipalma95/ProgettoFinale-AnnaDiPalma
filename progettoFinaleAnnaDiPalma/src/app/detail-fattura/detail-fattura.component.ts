import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Fattura } from '../classes/fattura';
import { IFatture } from '../interfaces/i-fatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-detail-fattura',
  templateUrl: './detail-fattura.component.html',
  styleUrls: ['./detail-fattura.component.css']
})
export class DetailFatturaComponent implements OnInit, DoCheck {

  ngDoCheck(): void {}

  fattura: Fattura = new Fattura();
  fattureArray: IFatture[] = []

  constructor(private route: ActivatedRoute,
    private fatturaService: FattureService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fatturaService.getById(params['id'])
        .subscribe(data => this.fattura = data)
    })
  }

  goEdit(fattura: Fattura) {
    this.router.navigate(['fattura', fattura.id, 'edit'])
  }

  goBack() {
    history.back();
  }
}
