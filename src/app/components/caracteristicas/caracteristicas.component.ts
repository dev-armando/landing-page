import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  caracteristicas: String[];
  descripciones: String[];
  size_icon: number;

  constructor(public transalte: TranslateService) {
    this.caracteristicas = [
      'investor',
      'developer',
      'entrepreneur'
    ];
    this.size_icon = 2
    this.descripciones = [
      'caracteristicas.text_1',
      'caracteristicas.text_2',
      'caracteristicas.text_3',
    ]

   }

  ngOnInit(): void {
  }

}
