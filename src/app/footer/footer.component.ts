import { Component, OnInit } from '@angular/core';
import { nguye374 } from '../nguye374';
import { vietnguyen } from 'src/assets/data/nguye374Data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  viet: nguye374 = vietnguyen;

  constructor() { }

  ngOnInit(): void {
  }

}
