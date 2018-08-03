import {Injectable} from "@angular/core";

@Injectable()

export class LabelsService {
  labelsArray = [];
  addLabel(data) {
    this.labelsArray.push(data);
  }
  getLabels() {
    return this.labelsArray;
  }
}
