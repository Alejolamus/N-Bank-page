import { TestBed } from '@angular/core/testing';

import { RegistroServices } from './registro.services';

describe('RegistroServices', () => {
  let service: RegistroServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
