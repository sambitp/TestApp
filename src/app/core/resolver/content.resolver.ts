import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpRequestService } from '../services/http/http-request.service';
import { Observable, of } from 'rxjs';
import { HttpRequestModal } from '../services/http/http-request.modal';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { GLOBAL_PROPERTIES } from '../constant/common.constant';
import { HttpBehaviorRequestInterface } from '../services/http/http-optional-request.interface';

@Injectable({
    providedIn: 'root'
})
export class ContentResolver implements Resolve<any> {
    apiBehaviorParams: HttpBehaviorRequestInterface = {
        isSpinner: true,
        isEncrypted: false,
        preAuth: false,
        isIbmApi: false,
        apiStub: true,
        apiRetry: true,
        apiTimeOut: GLOBAL_PROPERTIES.REQUEST_TIMEOUT
      };
  constructor(private commonSrv: HttpRequestService, private http: HttpClient, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    const payload = {};
    const requestModal = new HttpRequestModal(state.url, 'GET', payload, this.apiBehaviorParams);
    if (!this.apiBehaviorParams.apiStub) {
        return this.commonSrv.createHttpRequest(requestModal)
        .pipe(retry(1))
        .pipe(catchError((error: any) => {
        console.log(error);
        return of(undefined);
        }));
    }
    const url = './assets/json/get/prisimic/' + state.url.split('/').pop() + '.json';
    return this.http.get(url)
        .pipe(catchError((error: any) => {
        console.log(error);
        return of(undefined);
    }));
  }
}
