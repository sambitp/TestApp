import {Component, OnInit, ViewChild} from '@angular/core';
import {SenderInfoComponent} from "../steps/sender-info/sender-info.component";
import {RecieverInfoComponent} from "../steps/reciever-info/reciever-info.component";
import {DelieveryTypeComponent} from "../steps/delievery-type/delievery-type.component";
import {WeightComponent} from "../steps/weight/weight.component";
import {LabelsService} from "../commonServices/labelsService";
import {SummaryComponent} from "../steps/summary/summary.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-label-maker',
  templateUrl: './label-maker.component.html',
  styleUrls: ['./label-maker.component.css']
})
export class LabelMakerComponent implements OnInit {

  dataObject = {
    senderInfo : {
      name : '',
      address : '',
      mobileNumber : ''
    },
    recieverInfo : {
      name : '',
      address : '',
      mobileNumber : ''
    },
    delieveryType : '',
    weight : '',
    delieveryCharges : null
  }

  stepNumber = 1;

  @ViewChild(SenderInfoComponent) sednerInfo: SenderInfoComponent;
  @ViewChild(RecieverInfoComponent) recieverInfo: RecieverInfoComponent;
  @ViewChild(DelieveryTypeComponent) delieveryType: DelieveryTypeComponent;
  @ViewChild(WeightComponent) weight: WeightComponent;


  constructor(private _labelsService: LabelsService, private _router: Router) { }

  ngOnInit() {
  }

  onNext() {
    switch (this.stepNumber) {
      case 1: {
        this.dataObject.senderInfo.name = this.sednerInfo.senderInfoForm.value.name;
        this.dataObject.senderInfo.address = this.sednerInfo.senderInfoForm.value.address;
        this.dataObject.senderInfo.mobileNumber = this.sednerInfo.senderInfoForm.value.mobileNumber;
        this.stepNumber++;
        break;
      }
      case 2: {
        this.dataObject.recieverInfo.name = this.recieverInfo.recieverInfoForm.value.name;
        this.dataObject.recieverInfo.address = this.recieverInfo.recieverInfoForm.value.address;
        this.dataObject.recieverInfo.mobileNumber = this.recieverInfo.recieverInfoForm.value.mobileNumber;
        this.stepNumber++;
        break;
      }
      case 3: {
        this.dataObject.delieveryType = this.delieveryType.delieveryTypeForm.value.delieveryType;
        this.stepNumber++;
        break;
      }
      case 4: {
        this.dataObject.weight = this.weight.weightForm.value.weight;
        this.stepNumber++;
        break;
      }
    }
  }

  onPrev() {
    this.stepNumber--;
  }

  onSubmit() {
    this.dataObject.delieveryCharges = (parseInt(this.dataObject.weight)/1000) * 100 * (this.dataObject.delieveryType.toUpperCase() == 'NORMAL' ? 1 : 1.5);
    this._labelsService.addLabel(this.dataObject);
    this._router.navigate(['/home']);
  }
}
