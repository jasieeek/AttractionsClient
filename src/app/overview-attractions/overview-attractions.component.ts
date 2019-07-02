import {Component, Input, OnInit} from '@angular/core';
import {Attraction} from '../model/Attraction';

@Component({
  selector: 'app-overview-attractions',
  templateUrl: './overview-attractions.component.html',
  styleUrls: ['./overview-attractions.component.css']
})
export class OverviewAttractionsComponent implements OnInit {

  @Input('attractions')
  attractions: Attraction[];

  attraction: Attraction;

  constructor() { }

  onSubmit() {
    console.log('Wybrano atrakcje');
  }

  ngOnInit() {
  }

}
