import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fairs.interface';
import { fairsArr } from '../../const/fairs';

@Component({
  selector: 'app-fairs-dash',
  templateUrl: './fairs-dash.component.html',
  styleUrls: ['./fairs-dash.component.scss']
})
export class FairsDashComponent implements OnInit {

  fairData:Array<Ifairs>=fairsArr

  selectedFair!:Ifairs

  constructor() { }

  ngOnInit(): void {
    this.selectedFair = this.fairData[0];
  }

  onEmmitFair(data:Ifairs){
    this.selectedFair = data
  }

}
