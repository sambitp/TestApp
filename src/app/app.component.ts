import {Component, OnInit, ElementRef} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Subject, BehaviorSubject } from 'rxjs';
import { validateConfig } from '@angular/router/src/config';
import { LoginService } from './modules/login/login.service';
import { DataService } from './core/services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  token: string;
  mpin: string;
  dialogOpen = false;
  constructor(private router: Router, private auth: AuthService, private snackBar: MatSnackBar, private dialog: MatDialog,
  private login: LoginService ,private DataServiceObj : DataService) {
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd && event.url.indexOf('/home') > -1 ) {
          if (this.DataServiceObj.getUserId() == undefined || this.DataServiceObj.getUserId() == "") {
            this.router.navigate(['welcome']);
          }
        }
      });
    this.auth.getLoginStatus().subscribe((value) => {
      this.router.navigate(['login']);
    });


    this.auth.getToken().subscribe((data) => {
      this.tokenSubscriber(data);
    });
    if (!navigator.onLine) {
      this.openSnackBar('your internet connectivity lost', 'retry');
      this.router.navigate(['offline']);
    }

    window.addEventListener('online', () => {
      /*navigate back*/
      console.log('online');
    });

    const token = localStorage.getItem('token');
    if (token) {
      const data = {
        'data': {
          'custToken': token
        }
      };
      this.auth.setupJWTToken(data);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    });
  }



  doLogin(pin) {
    this.login.verifyUser(pin).subscribe((data) => {
      this.auth.successHandler(data);
    });
  }

  tokenSubscriber(data) {
    this.token = data.data.custToken;
    localStorage.setItem('token', this.token);
  }

}
