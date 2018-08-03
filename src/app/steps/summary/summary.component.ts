import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input() data: any;

  delieveryAmount: number;

  constructor() { }

  ngOnInit() {
    this.delieveryAmount = (parseInt(this.data.weight)/1000) * 100 * (this.data.delieveryType.toUpperCase() == 'NORMAL' ? 1 : 1.5);
  }

}
