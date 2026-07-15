import { TestBed } from '@angular/core/testing';

import { CotizarValoresCompartidos } from './cotizar-valores-compartidos';

describe('CotizarValoresCompartidos', () => {
  let service: CotizarValoresCompartidos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotizarValoresCompartidos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
