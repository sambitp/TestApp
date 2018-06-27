import { TestBed, inject } from '@angular/core/testing';

import { CheckForUpdateService } from './check-updates.service';

describe('CheckUpdatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckForUpdateService]
    });
  });

  it('should be created', inject([CheckForUpdateService], (service: CheckForUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
