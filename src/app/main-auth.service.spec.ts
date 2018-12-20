import { TestBed } from '@angular/core/testing';

import { MainAuthService } from './main-auth.service';

describe('MainAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainAuthService = TestBed.get(MainAuthService);
    expect(service).toBeTruthy();
  });
});
