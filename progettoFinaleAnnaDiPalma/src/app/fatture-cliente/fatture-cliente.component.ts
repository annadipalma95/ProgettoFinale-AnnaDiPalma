import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  fatture: Fattura[] = [];
  nomeCliente = '';
  result: string = '';
  idCliente = 0;

  constructor(private fattureService: FattureService, 
              private route: ActivatedRoute, 
              ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => this.fattureService.getByCliente(params['id'])
    .subscribe(response => {this.fatture = response.content; this.result = this.fatture[0].cliente.ragioneSociale}))
  }

  goBack() {
    history.back()
  }

}
