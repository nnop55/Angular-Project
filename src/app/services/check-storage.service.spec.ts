import { TestBed } from '@angular/core/testing';

import { CheckStorageService } from './check-storage.service';

describe('CheckStorageService', () => {
  let service: CheckStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
