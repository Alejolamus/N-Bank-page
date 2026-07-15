import { TestBed } from '@angular/core/testing';

import { CotizarValores } from './cotizar-valores';

describe('CotizarValores', () => {
  let service: CotizarValores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotizarValores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
