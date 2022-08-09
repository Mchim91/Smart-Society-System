import { TestBed } from '@angular/core/testing';

import { SmartSocietyServiceService } from './smart-society-service.service';

describe('SmartSocietyServiceService', () => {
  let service: SmartSocietyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartSocietyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
