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

  getBlood() {
    this.class = this.cardDataService.getBlood();
  }

  getDragon() {
    this.class = this.cardDataService.getDragon();
  }

  getForest() {
    this.class = this.cardDataService.getForest();
  }

  getHaven() {
    this.class = this.cardDataService.getHaven();
  }

  getRune() {
    this.class = this.cardDataService.getRune();
  }

  getShadow() {
    this.class = this.cardDataService.getShadow();
  }

  getSword() {
    this.class = this.cardDataService.getSword();
  }

}