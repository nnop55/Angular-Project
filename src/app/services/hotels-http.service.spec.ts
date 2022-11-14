import { TestBed } from '@angular/core/testing';

import { HotelsHttpService } from './hotels-http.service';

describe('HotelsHttpService', () => {
  let service: HotelsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
