import { Component, OnInit } from '@angular/core';
import { book } from '../bookInfo';
import { mybook } from 'src/assets/data/myBook';
import { ReadDataService } from '../read-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  books: book[] = mybook;

  constructor(private myService: ReadDataService) { }

  ngOnInit(): void {
    this.loadMyClasses();
  }

  loadMyClasses(): void {
    this.books = this.myService.loadMyClasses();
  }

  n: string = '';
  a: string = '';
  g: string = '';
  y: string = '';
  p: string = '';
  visible: boolean = true;

  loadBook(value: any): void {
    this.visible = false;
    for (let i of this.books) {
      if (i === value) {
        this.n = i.bookName;
        this.a = i.author;
        this.g = i.genre;
        this.y = i.yearPublish;
        this.p = i.picture;
        break;
      }
    }
  }


}

