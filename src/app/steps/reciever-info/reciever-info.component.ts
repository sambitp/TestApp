import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reciever-info',
  templateUrl: './reciever-info.component.html',
  styleUrls: ['./reciever-info.component.css']
})
export class RecieverInfoComponent implements OnInit {

  @Input() data: any;

  recieverInfoForm: FormGroup;

  constructor(private _formBuiler: FormBuilder) { }

  ngOnInit() {
    this.recieverInfoForm = this._formBuiler.group({
      name : [this.data.name],
      address : [this.data.address],
      mobileNumber : [this.data.mobileNumber]
    });
  }

}
