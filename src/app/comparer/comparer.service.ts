import { Injectable } from '@angular/core';

@Injectable()
export class ComparerService {

  constructor() { }

  //search for elements in array b not in array a
  findMissingIn(a: any, b: any) {
    //only comparing same types
    if (typeof a !== typeof b) return;

    if (typeof a === "number") {
      this.findMissingNumbers(a,b);
    }

    if (typeof a === "string") {
      //findMissingString(a,b);
    }
  }

  findMissingNumbers(a: number[], b: number[]) {
  }
}
