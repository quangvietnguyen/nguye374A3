import { Injectable } from '@angular/core';
import { mybook } from 'src/assets/data/myBook';
import { book } from './bookInfo';

@Injectable({
  providedIn: 'root'
})
export class ReadDataService {

  constructor() { }

  loadMyClasses(): book[] {
    return mybook;
  }
}
