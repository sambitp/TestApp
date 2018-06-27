import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    intialAuth = false;
    token: any;
    authData = new Subject();
    loginNaviagted = false;
    helper = new JwtHelperService();
    mpinExpiry = new Subject();
    timeLimitExceeded = new Subject();
    constructor(private router: Router) {
    }

    setupJWTToken (res) {
        if (res.data && res.data.custToken) {
            localStorage.setItem('token', res.data['custToken']);
            this.intialAuth = true;
            this.token = res.data['custToken'];
            this.isAuthed();
            this.authData.next(res);
        }
    }

    isAuthed(): boolean {
        if ( this.token !== undefined) {
            const decodedToken = this.helper.decodeToken(this.token);
            const expirationDate = this.helper.getTokenExpirationDate(this.token);
            const isExpired = this.helper.isTokenExpired(this.token);
            /*for testing only */
            if (isExpired) {
                this.mpinExpiry.next(true);
                /*if we need to route user to login page */
                    // if (!this.loginNaviagted) {
                    //     this.loginNaviagted = true;
                    //     this.timeLimitExceeded.next(true);
                    // }
                }
                /*Add logout functionality here*/
            return isExpired;
            /*return !isExpired;*/
        } else {
            return false;
        }
    }

    onLoginNavigation () {
        this.loginNaviagted = false;
    }

    getMpinStatus() {
        return this.mpinExpiry.asObservable();
    }

    getToken() {
        return this.authData.asObservable();
    }

    getLoginStatus() {
        return this.timeLimitExceeded.asObservable();
    }

    errorHandler(err) {
        //this.router.navigate(['/home']);
        if (err.status === 401) {
        } else {
          console.log(err);
        }
      }

      successHandler(res) {
        this.setupJWTToken(res);
        const user = res.data;
        //this.router.navigate(['/home']);
      }
}
