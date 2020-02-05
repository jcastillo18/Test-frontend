import { Component } from '@angular/core';
import { NgxMultiModalModule,NgxModalStack } from 'ngx-multi-modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'integration';

  constructor(public modalService: NgxModalStack){
    
  }
}
