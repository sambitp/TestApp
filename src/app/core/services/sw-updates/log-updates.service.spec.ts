import { TestBed, inject } from '@angular/core/testing';

import { LogUpdateService } from './log-updates.service';

describe('LogForUpdatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogUpdateService]
    });
  });

  it('should be created', inject([LogUpdateService], (service: LogUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
