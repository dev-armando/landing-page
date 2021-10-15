import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Tabla } from '../../interfaces/index'

@Component({
  selector: 'app-precie',
  templateUrl: './precie.component.html',
  styleUrls: ['./precie.component.css']
})
export class PrecieComponent implements OnInit {

  tabla_1: Tabla;
  tabla_2: Tabla;
  tabla_3: Tabla;
  tablas: Tabla[] = [];

  constructor(public translate: TranslateService) {


    this.tabla_1 = {
      plan: "price.standard",
      precio: '50,30' ,
      atributos: [
        'price.text_2',
        'price.text_3',
        'price.text_4',
        'price.text_5',
        'price.text_6',

      ]
    }
    this.tabla_2 = {
      plan: "Pymes",
      precio: '29,99' ,
      atributos: [
        'price.text_7',
        'price.text_8',
        'price.text_9',
        'price.text_10',
        'price.text_11'
      ]
    }
    this.tabla_3 = {
      plan: "Premium",
      precio: '50,30' ,
      atributos: [
        'price.text_12',
        'price.text_13',
        'price.text_14',
        'price.text_15',
        'price.text_16'

      ]
    }
    this.tablas.push(this.tabla_1)
    this.tablas.push(this.tabla_2)
    this.tablas.push(this.tabla_3)
  }

  ngOnInit(): void {
    this.translate.addLangs(["es","en"]);
    this.translate.setDefaultLang('es');
    this.translate.use('es');

    localStorage.setItem('controlFrontal' , '0')
  }



}
