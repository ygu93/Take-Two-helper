import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() class: any;
  query;
  result;
  cardNames;
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

}
