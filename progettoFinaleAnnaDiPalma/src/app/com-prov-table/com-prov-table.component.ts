import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-com-prov-table',
  templateUrl: './com-prov-table.component.html',
  styleUrls: ['./com-prov-table.component.css']
})
export class ComProvTableComponent implements OnInit, DoCheck {

  ngDoCheck(): void {
  }
  
  comuni: Comune[] = [];
  province: Provincia[] = [];

  constructor(private comuniService: ComuniService,
              private provinceService: ProvinceService,
              private router: Router) { }

  ngOnInit(): void {
    this.comuniService.getAllComuni()
    .subscribe(comuni => this.comuni = comuni.content);

    this.provinceService.getAllProvince()
    .subscribe(province => this.province = province.content)
  }

  goAdd() {
    this.router.navigate(['aggiungi-alla-cartina'])
  }

}
