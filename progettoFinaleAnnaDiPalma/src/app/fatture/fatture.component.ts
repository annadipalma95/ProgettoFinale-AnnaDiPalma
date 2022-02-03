import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit, DoCheck {

  ngDoCheck(): void {}

  fatture: Fattura[] = [];

  constructor(private service: FattureService,
              private router: Router) { }

  ngOnInit(): void {
    this.service.getAll()
    .subscribe(data => this.fatture = data.content);
  }

  remove(fattura:Fattura) {
    let index = this.fatture.indexOf(fattura);
    this.fatture.splice(index, 1)
  }

  detail(fattura:Fattura) {
    this.router.navigate(['fattura', fattura.id, 'detail'])
  }

}
