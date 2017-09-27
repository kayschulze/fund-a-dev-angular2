import { TestBed, inject } from '@angular/core/testing';

import { FundADevService } from './fund-adev.service';

describe('FundADevService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundADevService]
    });
  });

  it('should ...', inject([FundADevService], (service: FundADevService) => {
    expect(service).toBeTruthy();
  }));
});
