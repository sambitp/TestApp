import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL_PROPERTIES } from '../../constant/common.constant';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { timeout, retry, map, retryWhen, switchMap, delay, catchError, scan, takeWhile, flatMap, tap} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { HttpRequestModal } from './http-request.modal';
import { serializePath } from '@angular/router/src/url_tree';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class HttpRequestService {

    private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    private storeDataObject: HttpRequestModal;
    private payload: object| string;
    constructor(public http: HttpClient, private toastr: ToastrService) {
    }
    createHttpRequest(dataObject: HttpRequestModal) {
        this.storeDataObject = dataObject;
        this.payload = dataObject.payload;
        if (!dataObject.apiBehaviorParams.apiStub) {
            let headers: any;
            let url = GLOBAL_PROPERTIES.BASE_API_URL + dataObject.actionName;
            headers = this._options;
                
            
            switch (dataObject.method) {
                case 'POST':
                    return this.http.post(url, dataObject.payload, headers)
                    .pipe(
                        catchError ((errors) => {
                            console.log(errors);
                            return throwError(of(errors));
                        })
                        
                    );
                case 'GET':
                    return this.http.get(url)
                    .pipe(timeout(dataObject.apiBehaviorParams.apiTimeOut * 1000));
                    // .pipe(retry(3));
                case 'PUT':
                    return this.http.put(url, dataObject.payload, this._options)
                    .pipe(timeout(dataObject.apiBehaviorParams.apiTimeOut * 1000));
                    // .pipe(retry(3));
                case 'DELETE':
                    return this.http.delete(url, this._options)
                    .pipe(timeout(dataObject.apiBehaviorParams.apiTimeOut * 1000));
                    // .pipe(retry(3));
            }
        } else {

            const url = './assets/json/' + dataObject.method.toLowerCase() + '/' + dataObject.actionName + '.json';
            return this.http.get(url);
            // .pipe(retry(1));
        }
    }

    refresh(obs: Observable<any>): Observable<any> {
        return obs
            .pipe(switchMap((x: any) => {
                if (x.status === 401 || this.storeDataObject.apiBehaviorParams.apiRetry) {
                    return of(x);
                }
                return Observable.throw(x);
            })
            , scan((acc, value) => {
                return acc + 1;
            }, 0)
            , takeWhile(acc => acc < 3)
            , flatMap(() => {
                console.log('Token refresh retry');
                this.storeDataObject.payload = this.payload;
                return this.createHttpRequest(this.storeDataObject);
            }));
    }

    showSuccessMsg(msg): void {
        setTimeout(() => this.toastr.success(msg, 'Success!', { timeOut: 2000, closeButton: true }));
    }

    showErrorMsg(msg): void {
        setTimeout(() => this.toastr.error(msg, 'Error!', { timeOut: 2000, closeButton: true }));
    }



}
