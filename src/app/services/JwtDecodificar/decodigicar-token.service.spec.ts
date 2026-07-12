import { TestBed } from '@angular/core/testing';

import { DecodigicarTokenService } from './decodigicar-token.service';

describe('DecodigicarTokenService', () => {
  let service: DecodigicarTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecodigicarTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
