import { Component, OnInit, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-card-comparator',
  templateUrl: './card-comparator.component.html',
  styleUrls: ['./card-comparator.component.css']
})
export class CardComparatorComponent implements OnInit {
  @Input() class: any;
  @Input() className: string;
  constructor() { }

  ngOnInit() {
  }

}
