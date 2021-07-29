import { Component, OnInit } from '@angular/core';
import { nguye374 } from '../nguye374';
import { vietnguyen } from 'src/assets/data/nguye374Data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  viet: nguye374 = vietnguyen;

  constructor() { }

  ngOnInit(): void {
  }

}
