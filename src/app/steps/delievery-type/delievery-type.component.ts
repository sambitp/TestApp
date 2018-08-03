import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delievery-type',
  templateUrl: './delievery-type.component.html',
  styleUrls: ['./delievery-type.component.css']
})
export class DelieveryTypeComponent implements OnInit {
  delieveryTypeForm: FormGroup;
  delieveryTypes = ['Normal', 'Urgent'];
  @Input() data: string;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.delieveryTypeForm = this._formBuilder.group({
      delieveryType : [this.data]
    });
  }

}
