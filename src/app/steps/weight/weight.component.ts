import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {
  @Input() data: string;
  weightForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.weightForm = this._formBuilder.group({
      weight : [this.data]
    });
  }

}
