import { TestBed } from '@angular/core/testing';

import { StoreJournalsService } from './store-journals.service';

describe('StoreJournalsService', () => {
  let service: StoreJournalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreJournalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
