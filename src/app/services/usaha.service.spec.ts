import { TestBed, inject } from '@angular/core/testing';

import { UsahaService } from './usaha.service';

describe('UsahaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsahaService]
    });
  });

  it('should be created', inject([UsahaService], (service: UsahaService) => {
    expect(service).toBeTruthy();
  }));
});
