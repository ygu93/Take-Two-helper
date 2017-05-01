import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-comparator',
  templateUrl: './card-comparator.component.html',
  styleUrls: ['./card-comparator.component.css']
})
export class CardComparatorComponent implements OnInit {
  @Input() class: string;
  constructor() { }

  ngOnInit() {
  }

}
