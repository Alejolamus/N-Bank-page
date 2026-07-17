import { TestBed } from '@angular/core/testing';

import { CrearCredito } from './crear-credito';

describe('CrearCredito', () => {
  let service: CrearCredito;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearCredito);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
