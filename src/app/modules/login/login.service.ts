import { Injectable } from '@angular/core';
import { API_ACTIONS, GLOBAL_PROPERTIES } from '../../core/constant/common.constant';
import { HttpRequestModal } from '../../core/services/http/http-request.modal';
import { HttpRequestService } from '../../core/services/http/http-request.service';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';
import { HttpBehaviorRequestInterface } from '../../core/services/http/http-optional-request.interface';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  apiBehaviorParams: HttpBehaviorRequestInterface = {
    isSpinner: true,
    isEncrypted: true,
    preAuth: false,
    isIbmApi: false,
    apiStub: true,
    apiRetry: false,
    apiTimeOut: GLOBAL_PROPERTIES.REQUEST_TIMEOUT
  };
  apiPath = {
    loginUser: 'login',
    getOTP: 'generateotp',
    validateOtp: 'validateotp'
  };
  constructor(private comonSrvc: HttpRequestService) {
  }

  verifyUser(data) {
    const reqPayload = {
      username: data.mobile,
      password: data.password
    };
    const apiParams = Object.assign({}, this.apiBehaviorParams);
    apiParams.isSpinner = true;
    const httpRequest = new HttpRequestModal(this.apiPath.loginUser, 'POST', reqPayload, apiParams);
    return this.comonSrvc.createHttpRequest(httpRequest);
  }


 /* validateOtp(data) {
    const reqPayload = {
      username: data.mobile,
      otp: data.password
    };
    const apiParams = Object.assign({}, this.apiBehaviorParams);
    apiParams.isSpinner = true;
    const modal = new HttpRequestModal(this.apiPath.validateOtp, 'POST', reqPayload, this.apiBehaviorParams);
    return this.comonSrvc.createHttpRequest(modal);
  }*/
}
