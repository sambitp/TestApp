import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Input} from "@angular/core";

@Component({
  selector: 'app-sender-info',
  templateUrl: './sender-info.component.html',
  styleUrls: ['./sender-info.component.css']
})
export class SenderInfoComponent implements OnInit {

  @Input() data: any;

  senderInfoForm: FormGroup;

  constructor(private _formBuiler: FormBuilder) { }

  ngOnInit() {
    this.senderInfoForm = this._formBuiler.group({
      name : [this.data.name],
      address : [this.data.address],
      mobileNumber : [this.data.mobileNumber]
    });
  }

}
