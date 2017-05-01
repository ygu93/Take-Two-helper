import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['./select-class.component.css']
})
export class SelectClassComponent implements OnInit {
  @Output() selectedClass = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectClass(className: string) {
    this.selectedClass.emit(className);
  }

}
