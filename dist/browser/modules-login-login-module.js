(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"],{

/***/ "./src/app/core/resolver/content.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/core/resolver/content.resolver.ts ***!
  \***************************************************/
/*! exports provided: ContentResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentResolver", function() { return ContentResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_http_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http/http-request.service */ "./src/app/core/services/http/http-request.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_http_http_request_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/http/http-request.modal */ "./src/app/core/services/http/http-request.modal.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constant_common_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constant/common.constant */ "./src/app/core/constant/common.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContentResolver = /** @class */ (function () {
    function ContentResolver(commonSrv, http, router) {
        this.commonSrv = commonSrv;
        this.http = http;
        this.router = router;
        this.apiBehaviorParams = {
            isSpinner: true,
            isEncrypted: false,
            preAuth: false,
            isIbmApi: false,
            apiStub: true,
            apiRetry: true,
            apiTimeOut: _constant_common_constant__WEBPACK_IMPORTED_MODULE_7__["GLOBAL_PROPERTIES"].REQUEST_TIMEOUT
        };
    }
    ContentResolver.prototype.resolve = function (route, state) {
        var payload = {};
        var requestModal = new _services_http_http_request_modal__WEBPACK_IMPORTED_MODULE_4__["HttpRequestModal"](state.url, 'GET', payload, this.apiBehaviorParams);
        if (!this.apiBehaviorParams.apiStub) {
            return this.commonSrv.createHttpRequest(requestModal)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                console.log(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined);
            }));
        }
        var url = './assets/json/get/prisimic/' + state.url.split('/').pop() + '.json';
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined);
        }));
    };
    ContentResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_http_http_request_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContentResolver);
    return ContentResolver;
}());



/***/ }),

/***/ "./src/app/modules/login/login-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/login/login-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _core_resolver_content_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/resolver/content.resolver */ "./src/app/core/resolver/content.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '**',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        pathMatch: 'full',
        resolve: {
            content: _core_resolver_content_resolver__WEBPACK_IMPORTED_MODULE_3__["ContentResolver"]
        }
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid top-padd\">\r\n<div class=\"row\">\r\n<div class=\"col-md-4\"></div>\r\n<div class=\"col-md-4\">\r\n<section>\r\n  <mat-card>\r\n    <form [formGroup]=\"loginForm\">\r\n      <!--userId No.-->\r\n      <mat-form-field>\r\n        <input type=\"text\" maxlength=\"10\" matInput placeholder=\"{{content.userId.placeholder}}\" formControlName=\"userId\" appAlphaCharOnly >\r\n      </mat-form-field>\r\n      <span *ngIf=\"error.userId\">{{error.userId}}</span>\r\n      <!--Password-->\r\n      <mat-form-field>\r\n        <input type=\"{{inputType}}\" maxlength=\"10\" matInput placeholder=\"{{content.password.placeholder}}\" formControlName=\"password\" >\r\n      </mat-form-field>       \r\n      <span *ngIf=\"error.password\">{{error.password}}</span> \r\n      <button  class=\"btn-primary\" mat-button [disabled]=\"validateForm()\" (click)=\"onSubmit()\" >Login</button>\r\n      <a class=\"btn-primary\" mat-button [routerLink]=\"['/welcome']\" >Cancel</a>\r\n    </form>\r\n    </mat-card> \r\n</section>\r\n</div>\r\n<div class=\"col-md-4\"></div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  /*background-image: url(\"/assets/images/auth/pic.png\");*/\n  background-size: cover;\n  background-position: center;\n  /*opacity: 0.5;*/ }\n  .login .auth-box {\n    /*background:#3A8CAE;*/\n    margin-left: 10px; }\n  .login .text-left {\n    font-size: 14;\n    font-weight: 600; }\n  .login .sub-text {\n    color: #F3FFFF; }\n  .login .text-right {\n    color: #F3FFFF; }\n  .login .re-size {\n    height: 80px;\n    width: 80px; }\n  .container {\n  background: lightgray;\n  margin: 5px; }\n  .btn-primary {\n  display: block; }\n  .mat-form-field {\n  display: block; }\n  .otp {\n  position: absolute;\n  z-index: 1000;\n  bottom: 71px;\n  display: block;\n  color: #acacac;\n  font-size: 12px; }\n  .btn-primary {\n  width: 100%;\n  margin-top: 10px; }\n  .top-padd {\n  padding-top: 13%; }\n"

/***/ }),

/***/ "./src/app/modules/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/modules/login/login.service.ts");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, loginSrvc, route, auth, dataService) {
        this._router = _router;
        this.loginSrvc = loginSrvc;
        this.route = route;
        this.auth = auth;
        this.dataService = dataService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputType = 'password';
        this.otpFLow = false;
        this.error = {};
        this.auth.onLoginNavigation();
        this.route.data.subscribe(function (_a) {
            var content = _a.content;
            _this.content = content;
            console.log('login content data resolved', _this.content);
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'userId': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        }, { updateOn: 'blur' });
        this.loginForm.valueChanges.subscribe(function (data) {
            console.log('value change', data);
            _this.validateChanges(data);
        });
    };
    LoginComponent.prototype.validateChanges = function (data) {
        var userIdField = this.loginForm.get('userId');
        var pswrdField = this.loginForm.get('password');
        if (userIdField.value.length == 0 && (userIdField.touched || userIdField.dirty)) {
            this.error = {
                'userId': 'Please enter a valid user Id'
            };
            userIdField.setErrors(this.error.userId);
        }
        else if (userIdField.touched || userIdField.dirty) {
            this.error.userId = null;
            if (userIdField.value.length > 0) {
                userIdField.setErrors(null);
            }
        }
        if (pswrdField.value.length == 0 && (pswrdField.dirty || pswrdField.touched)) {
            this.error.password = 'Please enter a valid password';
            pswrdField.setErrors(this.error.password);
        }
        else if (pswrdField.dirty || pswrdField.touched) {
            this.error.password = null;
            if (userIdField.value.length > 0) {
                pswrdField.setErrors(null);
            }
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginSrvc.verifyUser(this.loginForm.value).subscribe(function (res) {
            _this.auth.successHandler(res);
            var userId = _this.loginForm.get('userId').value;
            _this.dataService.setUserId(userId);
            _this._router.navigate(['/home']);
        }, function (err) {
            _this.auth.errorHandler(err);
        });
    };
    LoginComponent.prototype.validateForm = function () {
        return !this.loginForm.valid;
    };
    /*for show/hide password*/
    LoginComponent.prototype.toggleInputType = function () {
        this.inputType = (this.inputType === 'text') ? 'password' : 'text';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/modules/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-login-login-module.js.map