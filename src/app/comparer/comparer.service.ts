import { Injectable } from '@angular/core';

@Injectable()
export class ComparerService {

  constructor() { }

  //search for elements in array b not in array a
  findMissingIn(a: any[], b: any[]) {
    var res: any[] = [];
    a.forEach( x => {
      if (!b.includes(x)) {
        res.push(x);
      }
    },this);
    return res;
  }

}
