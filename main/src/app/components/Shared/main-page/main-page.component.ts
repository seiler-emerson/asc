import { Component, OnInit } from '@angular/core';
import { Professionals } from 'src/app/models/professionals.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  professionals: Professionals[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.professionals)
  }

}
