import { TestBed, inject } from '@angular/core/testing';

import { AccessEventService } from './access-event.service';

describe('AccessEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessEventService]
    });
  });

  it('should be created', inject([AccessEventService], (service: AccessEventService) => {
    expect(service).toBeTruthy();
  }));
});
