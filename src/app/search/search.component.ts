import { Component, OnInit, Input } from '@angular/core';
import { CardDetailsComponent } from '../card-details/card-details.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() class: any;
  query = '';
  result;
  cardNames;
  selectedCard;
  constructor() { }

  ngOnInit() {
    this.cardNames = Object.keys(this.class);
  }

  debounce(func, delay) {
    let timer = null;
    return function(...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  }

  search(query) {
    query = query.toLowerCase();
    this.result = this.cardNames.filter((name) => name.toLowerCase().includes(query));
  }

  select(card) {
    this.selectedCard = this.class[card];
    console.log(this.selectedCard);
  }

}
