import { TestBed } from '@angular/core/testing';

import { AlgoAuthService } from './algo-auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlgoAuthService = TestBed.get(AlgoAuthService);
    expect(service).toBeTruthy();
  });
});
