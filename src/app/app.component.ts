import {Component, OnInit} from '@angular/core';
import {LabelsService} from "./commonServices/labelsService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  labelsArray = [];
  constructor(private _lablesService: LabelsService) {}
  ngOnInit() {
    this.labelsArray = this._lablesService.getLabels();
  }
}
