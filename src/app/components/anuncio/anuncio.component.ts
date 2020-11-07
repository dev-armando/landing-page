import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(["es","en"])
    translate.setDefaultLang('es');
    translate.use('es')
  }

  ngOnInit(): void {
  }

}
