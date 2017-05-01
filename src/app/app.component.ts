import { Component, ViewEncapsulation } from '@angular/core';
import { CardDataService } from 'app/card-data.service';
import { SelectClassComponent } from './select-class/select-class.component';

@Component({
  selector: 'app-root',
  providers: [CardDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  class;

  constructor(private cardDataService: CardDataService) {

  }

  getClass(className) {
    this.class = this.cardDataService.getClass(className);
  }



}
