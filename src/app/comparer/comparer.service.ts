import { Injectable } from '@angular/core';

@Injectable()
export class ComparerService {

  constructor() { }

  //search for elements in array b not in array a
  findMissingIn(a: any[], reference: any[]) : any[]{
    //only comparing same types
    return this.findMissingNumbers(a,reference);
  }

  findMissingNumbers(a: number[], b: number[]) {
    var res: number[] = [];
    a.forEach( x => {
      if (!b.includes(x)) {
        res.push(x);
      }
    },this);
    return res;
  }
}
