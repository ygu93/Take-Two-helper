/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardComparatorComponent } from './card-comparator.component';

describe('CardComparatorComponent', () => {
  let component: CardComparatorComponent;
  let fixture: ComponentFixture<CardComparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
