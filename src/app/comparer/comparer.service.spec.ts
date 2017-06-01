import { TestBed, inject } from '@angular/core/testing';

import { ComparerService } from './comparer.service';

describe('ComparerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComparerService]
    });
  });

  it('should ...', inject([ComparerService], (service: ComparerService) => {
    expect(service).toBeTruthy();
  }));
});
