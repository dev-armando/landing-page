import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-politicas-cookies',
  templateUrl: './politicas-cookies.component.html',
  styleUrls: ['./politicas-cookies.component.css']
})
export class PoliticasCookiesComponent implements OnInit {
  public control: boolean = true ;
  constructor(public translate: TranslateService) {

  }

  ngOnInit(): void {
    if( !localStorage.getItem('politicas') )
      localStorage.setItem('politicas' , 'true')

    this.control = (localStorage.getItem('politicas') == 'true')
  }

  desctivar(){
    this.control = false;
    localStorage.setItem('politicas' , 'false')
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
