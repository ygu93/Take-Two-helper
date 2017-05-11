import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() class: any;
  result;
  constructor() { }

  ngOnInit() {
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
    const cardNames = Object.keys(this.class);
    this.result = cardNames.filter((name) => name.includes(query));

  }

}
