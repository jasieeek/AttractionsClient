import {Component, OnInit} from '@angular/core';
import {MainSevice} from './sevice/MainSevice';
import {Attraction} from './model/Attraction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'client';
  attractions: Attraction[];

  constructor(private mainService: MainSevice) {
  }

  ngOnInit(): void {
    this.mainService.findAllAttractions().subscribe( data => {
      this.attractions = data;
    });
  }
}
