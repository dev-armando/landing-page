import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(["es","en"])
    translate.setDefaultLang('es');
    translate.use('es');
   }

  ngOnInit(): void {
  }

}
