import { TestBed } from '@angular/core/testing';

import { UbicacionesColService } from './ubicaciones.col.service';

describe('UbicacionesColService', () => {
  let service: UbicacionesColService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicacionesColService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
