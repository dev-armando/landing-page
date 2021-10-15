import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public translate: TranslateService) {

   }

  ngOnInit(): void {
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
