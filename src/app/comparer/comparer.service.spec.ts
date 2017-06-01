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

  it('number comparing works (both ways)', inject([ComparerService], (service: ComparerService) => {
    var evens: number[] = [0,2,4,6,8];
    var odds: number[] = [1,3,5,7,9];
    var all: number[] = [0,1,2,3,4,5,6,7,8,9];
    var res = service.findMissingIn(all,evens)
    expect(res).toEqual(odds);
    var res = service.findMissingIn(all,odds)
    expect(res).toEqual(evens);
  }));

});
