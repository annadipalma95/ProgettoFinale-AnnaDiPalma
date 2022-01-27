import { Component, DoCheck, OnInit } from '@angular/core';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-form-cartina',
  templateUrl: './form-cartina.component.html',
  styleUrls: ['./form-cartina.component.css']
})
export class FormCartinaComponent implements OnInit, DoCheck {

  ngDoCheck(): void { }

  comuni: Comune[] = [];
  province: Provincia[] = [];
  provSel = 0;

  newComune: Comune = {
    id: 0,
    nome: "",
    provincia: {
      id: 0,
      nome: "",
      sigla: "",
    },
  }

  newProvincia: Provincia = {
    id: 0,
    nome: "",
    sigla: "",
  }

  testoProv = '';
  testoComune = '';


  constructor(private provinceService: ProvinceService,
    private comuniService: ComuniService) { }

  ngOnInit(): void {
    this.provinceService.getAllProvince()
      .subscribe(data => this.province = data.content);
    
      this.comuniService.getAllComuni()
      .subscribe(data => this.comuni = data.content);
  }

  salvaProvincia() {

    if (this.newProvincia.nome != "" && this.newProvincia.sigla != "") {
      if (!this.province.find(element => element.nome == this.newProvincia.nome)) {
        this.provinceService.addProvincia(this.newProvincia).subscribe(response => {this.provinceService.getAllProvince()
        .subscribe(data => this.province = data.content)
        console.log(response)
        });
        this.testoProv = 'Provincia inserita con successo!'
      } else {
        alert('Provincia già presente!')
      }
    } else {
      alert('Riempi tutti i campi')
    }
  }


  salvaComune() {
    if (this.newComune.nome != "" && this.provSel != 0) {
      if (!this.comuni.find(element => element.nome == this.newComune.nome)) {
        this.newComune.provincia.id = this.provSel;
        this.comuniService.addComune(this.newComune)
        .subscribe(response => console.log(response))
        this.testoComune = 'Comune inserito con successo!'
      } else {
        alert('Comune già esistente!')
      }
    } else {
      alert('Riempi tutti i campi')
    }

  }

}


