import { TestBed } from '@angular/core/testing';

import { AlgodexService } from './algodex.service';

describe('AlgodexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlgodexService = TestBed.get(AlgodexService);
    expect(service).toBeTruthy();
  });
});
