import { Injectable } from '@angular/core';
import { API_ACTIONS, GLOBAL_PROPERTIES } from '../../core/constant/common.constant';
import { HttpRequestModal } from '../../core/services/http/http-request.modal';
import { HttpRequestService } from '../../core/services/http/http-request.service';
import { HttpBehaviorRequestInterface } from '../../core/services/http/http-optional-request.interface';

@Injectable()
export class RegisterService {
  apiBehaviorParams: HttpBehaviorRequestInterface = {
    isSpinner: true,
    isEncrypted: true,
    preAuth: false,
    isIbmApi: false,
    apiStub: false,
    apiRetry: true,
    apiTimeOut: GLOBAL_PROPERTIES.REQUEST_TIMEOUT
  };
  constructor(private comonSrvc: HttpRequestService) {
  }
}
