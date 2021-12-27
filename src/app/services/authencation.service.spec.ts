import { TestBed } from '@angular/core/testing';

import { AuthencationService } from './authencation.service';

describe('AuthencationService', () => {
  let service: AuthencationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthencationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
