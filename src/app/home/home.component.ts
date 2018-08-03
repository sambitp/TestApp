import { Component, OnInit } from '@angular/core';
import {LabelsService} from "../commonServices/labelsService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  labelsArray = [];
  constructor(private _lablesService: LabelsService, private _router: Router) {}
  ngOnInit() {
    this.labelsArray = this._lablesService.getLabels();
  }

  createNewLabel() {
    this._router.navigate(['/lableMaker']);
  }

}
