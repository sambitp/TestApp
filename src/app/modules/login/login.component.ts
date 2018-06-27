import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { DataService } from '../../core/services/data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  companyId: string;
  content: any;
  inputType: string;
  error: any;
  otpFLow: boolean;
  constructor( private _router: Router, private loginSrvc: LoginService, private route: ActivatedRoute, private auth: AuthService,private dataService:DataService) {}

  ngOnInit(): void {
    this.inputType = 'password';
    this.otpFLow = false;
    this.error = {};
    this.auth.onLoginNavigation();
    this.route.data.subscribe( ({content}) => {
      this.content = content;
      console.log('login content data resolved', this.content);
    });

    this.loginForm = new FormGroup({
      'userId': new FormControl('', Validators.compose([Validators.required])),
      'password': new FormControl('', Validators.compose([Validators.required]))
    }, {updateOn: 'blur'});

    this.loginForm.valueChanges.subscribe( (data) => {
      console.log('value change', data);
      this.validateChanges(data);
    });
  }

  validateChanges(data) {
    const userIdField = this.loginForm.get('userId');
    const pswrdField = this.loginForm.get('password');

    if ( userIdField.value.length == 0 && (userIdField.touched || userIdField.dirty)) {
      this.error = {
        'userId' : 'Please enter a valid user Id'
      };
      userIdField.setErrors(this.error.userId);
    } else if (userIdField.touched || userIdField.dirty) {
      this.error.userId = null;
      if (userIdField.value.length > 0) {
        userIdField.setErrors(null);
      }
    }
    if ( pswrdField.value.length == 0 && (pswrdField.dirty || pswrdField.touched)) {
      this.error.password = 'Please enter a valid password';
      pswrdField.setErrors(this.error.password);
    } else if ( pswrdField.dirty || pswrdField.touched ) {
      this.error.password = null;
      if (userIdField.value.length > 0) {
        pswrdField.setErrors(null);
      }
    }
  }


  onSubmit() {
      this.loginSrvc.verifyUser(this.loginForm.value).subscribe(
        (res: any) => {
          this.auth.successHandler(res);
          let userId = this.loginForm.get('userId').value;
          this.dataService.setUserId(userId);
          this._router.navigate(['/home']);
        }, err => {
          this.auth.errorHandler(err);
        });
  }

  validateForm() {
    return !this.loginForm.valid;
  }

  /*for show/hide password*/
  toggleInputType() {
    this.inputType = (this.inputType === 'text') ? 'password' : 'text';
  }
}
