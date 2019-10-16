import { TestBed } from '@angular/core/testing';

import { MusicalEventService } from './musical-event.service';

describe('MusicalEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicalEventService = TestBed.get(MusicalEventService);
    expect(service).toBeTruthy();
  });
});
