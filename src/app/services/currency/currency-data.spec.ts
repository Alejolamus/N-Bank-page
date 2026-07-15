import { TestBed } from '@angular/core/testing';

import { CurrencyData } from './currency-data';

describe('CurrencyData', () => {
  let service: CurrencyData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
