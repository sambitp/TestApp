import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }

  str: string = '';
  userId: string = '';

  getData() {
      return this.str;
  }
  getUserId() {
      return this.userId;
  }

  setData(pData: string) {
      this.str = pData;
  }
  setUserId(pData: string) {
      this.userId = pData;
      console.log('this.userId',this.userId);
  }

}
