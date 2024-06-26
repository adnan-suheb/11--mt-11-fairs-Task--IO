import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifairs } from '../../model/fairs.interface';

@Component({
  selector: 'app-fairs-card',
  templateUrl: './fairs-card.component.html',
  styleUrls: ['./fairs-card.component.scss']
})
export class FairsCardComponent implements OnInit {

  @Input() getFair!:Ifairs

  @Output() emmitFair:EventEmitter<Ifairs> =new EventEmitter<Ifairs>()

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(){
    this.emmitFair.emit(this.getFair)
  }

}
