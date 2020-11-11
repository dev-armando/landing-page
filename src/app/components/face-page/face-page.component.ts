import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-face-page',
  templateUrl: './face-page.component.html',
  styleUrls: ['./face-page.component.css']
})
export class FacePageComponent implements OnInit {

  constructor(public translate: TranslateService) {

  }

  ngOnInit(): void {
  }

  imprimir(event){
    console.log(event);

  }

  @HostListener("scroll", ['$event'])
  doSomethingOnInternalScroll($event:Event){
    let scrollOffset = $event;
    console.log("scroll: ", scrollOffset);
  }
}
