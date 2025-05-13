import { TestBed } from '@angular/core/testing';

import { HangoutsService } from './hangouts.service';

describe('HangoutsService', () => {
  let service: HangoutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
