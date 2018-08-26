import { TestBed, inject } from '@angular/core/testing';

import { PageHeightTrackerService } from './page-height-tracker.service';

describe('PageHeightTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageHeightTrackerService]
    });
  });

  it('should be created', inject([PageHeightTrackerService], (service: PageHeightTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
