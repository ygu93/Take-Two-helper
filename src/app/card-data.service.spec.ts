/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardDataService } from './card-data.service';

describe('CardDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardDataService]
    });
  });

  it('should ...', inject([CardDataService], (service: CardDataService) => {
    expect(service).toBeTruthy();
  }));
});
