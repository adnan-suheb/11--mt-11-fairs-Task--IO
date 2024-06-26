import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fairs.interface';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {


  @Input() getFairDetails!:Ifairs

  constructor() { }

  ngOnInit(): void {
  }

}
