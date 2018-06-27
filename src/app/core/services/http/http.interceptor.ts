import { Injectable, NgModule, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GLOBAL_PROPERTIES } from '../../constant/common.constant';
import { AuthService } from '../auth/auth.service';
import { LoadingService } from '../utility/loading.service';
import { tap } from 'rxjs/operators';
import { DateTimeMethods } from '../../../shared/utils';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    token: string;
    constructor(private auth: AuthService, private loadingSrvc: LoadingService,
        private dateTimeMethods: DateTimeMethods) { }

    private sendGA = function(reqStartTime, response) {
        const timeTaken = this.dateTimeMethods.getTimeDiff(reqStartTime, (new Date()).getTime());
            (<any>window).ga('send', 'event', {
                eventCategory: 'Api Result',
                eventAction: 'response[\'config\'].url',
                eventLabel: 'response[\'meta\'][\'code\']',
                eventValue: JSON.stringify(response),
                // eventValue: 'response[\'meta\'][\'code\']',
                time: timeTaken
            });
    };

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.token = localStorage.getItem('token');
        if (this.token && !this.auth.isAuthed()) {
            return of(undefined);
        }
        const reqStartTime = (new Date()).getTime().toString();
        req = req.clone({ setHeaders : { 'req-start-time': reqStartTime }});

        if (this.token && !(req.url.indexOf('prisimic') > -1 || req.url.indexOf('login') > -1 || req.url.indexOf('register') > -1)) {
            req = req.clone({ setHeaders: { 'x-access-token': this.token }});
        }
        this.loadingSrvc.showLoader();
        return next.handle(req).pipe(tap(response => {
            this.sendGA(reqStartTime, response);
            this.loadingSrvc.hideLoader();
            if (response instanceof HttpResponse) {
                // this.auth.setupJWTToken(response.body);
            }
        }, (err: any) => {
            this.loadingSrvc.hideLoader();
            this.sendGA(reqStartTime, err);
            if (err instanceof HttpErrorResponse && err.status === 401) {
                // redirect to the login route// or show a modal
            }
        }));
    }
}
