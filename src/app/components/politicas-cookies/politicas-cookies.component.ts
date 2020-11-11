import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-politicas-cookies',
  templateUrl: './politicas-cookies.component.html',
  styleUrls: ['./politicas-cookies.component.css']
})
export class PoliticasCookiesComponent implements OnInit {



  constructor(public translate: TranslateService) {

   }

  ngOnInit(): void {
  }

  desctivar(){
    document.querySelector(".poli_cook").innerHTML = ""
    document.querySelector(".poli_cook").classList.remove('p-3')

  }

  privacidad(){
    window.location.assign(`http://${window.location.host.toString()}/#/politica/privacidad`);
  }
  terminos(){
    window.location.assign(`http://${window.location.host.toString()}/#/politica/terminos`);
  }
  cookies(){
    window.location.assign(`http://${window.location.host.toString()}/#/politica/cookies`);
  }

}
