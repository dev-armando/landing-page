import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contacto_activo: boolean

  constructor(
    public translate:TranslateService,
  ) {
    this.contacto_activo = false

   }

  ngOnInit(): void {

    this.translate.addLangs(["es","en"]);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  contacto() {
    if ( !this.contacto_activo ){
      document.getElementById('contacto').style.display = "inherit"
    } else if (this.contacto_activo) {
      this.contacto_activo = false
      document.getElementById('contacto').style.display = "none"
    } else {
      this.contacto_activo = true
      document.getElementById('contacto').style.display = "none"
    }
  }

  cambia_head(){
    var element = document.querySelector('nav')
    element.classList.toggle("Sticky", window.scrollY > 100)
  }

  ir_caracteristica(){
    window.location.assign(`http://${window.location.host}/#/`)
    document.querySelector("body > app-root > app-pages > div > app-inicio > app-caracteristicas > div").scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }

  ir_captures(){
    document.querySelector("body > app-root > app-pages > div > app-inicio > app-capture > div").scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }

  ir_precio(){
    window.location.assign(`http://${window.location.host}/#/precio`)
    window.scrollTo({top:0,behavior: 'smooth'})
  }

  ir_contacto(){
    window.location.assign(`http://${window.location.host}/#/`)
    document.querySelector("#contacto").scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }

  ir_top(){
    window.location.assign(`http://${window.location.host}/#/`)
    window.scrollTo({top:0,behavior: 'smooth'})
  }

  LanzaApp(){
    window.location.assign(`http://${window.location.host}/#/`)
    console.log('apso');
  }

  lang(language:string){
    this.translate.use(language)
  }

}
