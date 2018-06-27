(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/home/home.module": [
		"./src/app/modules/home/home.module.ts",
		"modules-home-home-module"
	],
	"./modules/login/login.module": [
		"./src/app/modules/login/login.module.ts",
		"modules-login-login-module"
	],
	"./modules/register/register.module": [
		"./src/app/modules/register/register.module.ts",
		"modules-register-register-module"
	],
	"./modules/welcome/welcome.module": [
		"./src/app/modules/welcome/welcome.module.ts",
		"modules-welcome-welcome-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_offline_offline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/offline/offline.component */ "./src/app/modules/offline/offline.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/*Add canload gaurd where we need preauth*/
var routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
    { path: 'welcome', loadChildren: './modules/welcome/welcome.module#WelcomeModule' },
    { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
    { path: 'register', loadChildren: './modules/register/register.module#RegisterModule' },
    { path: 'offline', component: _modules_offline_offline_component__WEBPACK_IMPORTED_MODULE_2__["OfflineComponent"] },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button id=\"add\">Add to home</button> -->\r\n\r\n<router-outlet><app-spinner></app-spinner></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modules_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/login/login.service */ "./src/app/modules/login/login.service.ts");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(router, auth, snackBar, dialog, login, DataServiceObj) {
        this.router = router;
        this.auth = auth;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.login = login;
        this.DataServiceObj = DataServiceObj;
        this.title = 'app';
        this.dialogOpen = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && event.url.indexOf('/home') > -1) {
                if (_this.DataServiceObj.getUserId() == undefined || _this.DataServiceObj.getUserId() == "") {
                    _this.router.navigate(['welcome']);
                }
            }
        });
        this.auth.getLoginStatus().subscribe(function (value) {
            _this.router.navigate(['login']);
        });
        this.auth.getToken().subscribe(function (data) {
            _this.tokenSubscriber(data);
        });
        if (!navigator.onLine) {
            this.openSnackBar('your internet connectivity lost', 'retry');
            this.router.navigate(['offline']);
        }
        window.addEventListener('online', function () {
            /*navigate back*/
            console.log('online');
        });
        var token = localStorage.getItem('token');
        if (token) {
            var data = {
                'data': {
                    'custToken': token
                }
            };
            this.auth.setupJWTToken(data);
        }
    };
    AppComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 10000,
        });
    };
    AppComponent.prototype.doLogin = function (pin) {
        var _this = this;
        this.login.verifyUser(pin).subscribe(function (data) {
            _this.auth.successHandler(data);
        });
    };
    AppComponent.prototype.tokenSubscriber = function (data) {
        this.token = data.data.custToken;
        localStorage.setItem('token', this.token);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _modules_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_offline_offline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/offline/offline.component */ "./src/app/modules/offline/offline.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/*CUSTOME MODULE*/



/*COMPONENT*/


/*CONST*/

var serviceWorkerPath = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production ? '/ngsw-worker.js' : '/ngsw-worker.js';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _modules_offline_offline_component__WEBPACK_IMPORTED_MODULE_11__["OfflineComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'test-app' }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register(serviceWorkerPath, { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/constant/common.constant.ts":
/*!**************************************************!*\
  !*** ./src/app/core/constant/common.constant.ts ***!
  \**************************************************/
/*! exports provided: GLOBAL_PROPERTIES, API_ACTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_PROPERTIES", function() { return GLOBAL_PROPERTIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ACTIONS", function() { return API_ACTIONS; });
var GLOBAL_PROPERTIES = Object.freeze({
    BASE_API_URL: '',
    REQUEST_TIMEOUT: 60,
    CHANNEL: 'ANDROID',
    CLIENTID: '11'
});
var API_ACTIONS = Object.freeze({
    mPin: {
        verifyUserDetails: 'ecomResetMpin.action',
        changeMpin: 'ecomChangeMpin.action'
    }
});


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _services_http_http_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http/http.interceptor */ "./src/app/core/services/http/http.interceptor.ts");
/* harmony import */ var _services_utility_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/utility/loading.service */ "./src/app/core/services/utility/loading.service.ts");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/data/data.service */ "./src/app/core/services/data/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [
                _services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _services_http_http_interceptor__WEBPACK_IMPORTED_MODULE_3__["HttpsRequestInterceptor"], multi: true },
                _services_utility_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/services/auth/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/auth/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.intialAuth = false;
        this.authData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loginNaviagted = false;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this.mpinExpiry = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.timeLimitExceeded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AuthService.prototype.setupJWTToken = function (res) {
        if (res.data && res.data.custToken) {
            localStorage.setItem('token', res.data['custToken']);
            this.intialAuth = true;
            this.token = res.data['custToken'];
            this.isAuthed();
            this.authData.next(res);
        }
    };
    AuthService.prototype.isAuthed = function () {
        if (this.token !== undefined) {
            var decodedToken = this.helper.decodeToken(this.token);
            var expirationDate = this.helper.getTokenExpirationDate(this.token);
            var isExpired = this.helper.isTokenExpired(this.token);
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
        }
        else {
            return false;
        }
    };
    AuthService.prototype.onLoginNavigation = function () {
        this.loginNaviagted = false;
    };
    AuthService.prototype.getMpinStatus = function () {
        return this.mpinExpiry.asObservable();
    };
    AuthService.prototype.getToken = function () {
        return this.authData.asObservable();
    };
    AuthService.prototype.getLoginStatus = function () {
        return this.timeLimitExceeded.asObservable();
    };
    AuthService.prototype.errorHandler = function (err) {
        //this.router.navigate(['/home']);
        if (err.status === 401) {
        }
        else {
            console.log(err);
        }
    };
    AuthService.prototype.successHandler = function (res) {
        this.setupJWTToken(res);
        var user = res.data;
        //this.router.navigate(['/home']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/data/data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/data/data.service.ts ***!
  \****************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.str = '';
        this.userId = '';
    }
    DataService.prototype.getData = function () {
        return this.str;
    };
    DataService.prototype.getUserId = function () {
        return this.userId;
    };
    DataService.prototype.setData = function (pData) {
        this.str = pData;
    };
    DataService.prototype.setUserId = function (pData) {
        this.userId = pData;
        console.log('this.userId', this.userId);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/services/http/http-request.modal.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/http/http-request.modal.ts ***!
  \**********************************************************/
/*! exports provided: HttpRequestModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestModal", function() { return HttpRequestModal; });
var HttpRequestModal = /** @class */ (function () {
    function HttpRequestModal(actionName, method, payload, apiBehaviorParams) {
        this.actionName = actionName;
        this.method = method;
        this.payload = payload;
        this.apiBehaviorParams = apiBehaviorParams;
    }
    return HttpRequestModal;
}());



/***/ }),

/***/ "./src/app/core/services/http/http-request.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/services/http/http-request.service.ts ***!
  \************************************************************/
/*! exports provided: HttpRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestService", function() { return HttpRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant_common_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/common.constant */ "./src/app/core/constant/common.constant.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpRequestService = /** @class */ (function () {
    function HttpRequestService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this._options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    HttpRequestService.prototype.createHttpRequest = function (dataObject) {
        this.storeDataObject = dataObject;
        this.payload = dataObject.payload;
        if (!dataObject.apiBehaviorParams.apiStub) {
            var headers = void 0;
            var url = _constant_common_constant__WEBPACK_IMPORTED_MODULE_2__["GLOBAL_PROPERTIES"].BASE_API_URL + dataObject.actionName;
            headers = this._options;
            switch (dataObject.method) {
                case 'POST':
                    return this.http.post(url, dataObject.payload, headers)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (errors) {
                        console.log(errors);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(errors));
                    }));
                case 'GET':
                    return this.http.get(url)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(dataObject.apiBehaviorParams.apiTimeOut * 1000));
                // .pipe(retry(3));
                case 'PUT':
                    return this.http.put(url, dataObject.payload, this._options)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(dataObject.apiBehaviorParams.apiTimeOut * 1000));
                // .pipe(retry(3));
                case 'DELETE':
                    return this.http.delete(url, this._options)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["timeout"])(dataObject.apiBehaviorParams.apiTimeOut * 1000));
            }
        }
        else {
            var url = './assets/json/' + dataObject.method.toLowerCase() + '/' + dataObject.actionName + '.json';
            return this.http.get(url);
            // .pipe(retry(1));
        }
    };
    HttpRequestService.prototype.refresh = function (obs) {
        var _this = this;
        return obs
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (x) {
            if (x.status === 401 || _this.storeDataObject.apiBehaviorParams.apiRetry) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(x);
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(x);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function (acc, value) {
            return acc + 1;
        }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(function (acc) { return acc < 3; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function () {
            console.log('Token refresh retry');
            _this.storeDataObject.payload = _this.payload;
            return _this.createHttpRequest(_this.storeDataObject);
        }));
    };
    HttpRequestService.prototype.showSuccessMsg = function (msg) {
        var _this = this;
        setTimeout(function () { return _this.toastr.success(msg, 'Success!', { timeOut: 2000, closeButton: true }); });
    };
    HttpRequestService.prototype.showErrorMsg = function (msg) {
        var _this = this;
        setTimeout(function () { return _this.toastr.error(msg, 'Error!', { timeOut: 2000, closeButton: true }); });
    };
    HttpRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], HttpRequestService);
    return HttpRequestService;
}());



/***/ }),

/***/ "./src/app/core/services/http/http.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/http/http.interceptor.ts ***!
  \********************************************************/
/*! exports provided: HttpsRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpsRequestInterceptor", function() { return HttpsRequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _utility_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/loading.service */ "./src/app/core/services/utility/loading.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/utils */ "./src/app/shared/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpsRequestInterceptor = /** @class */ (function () {
    function HttpsRequestInterceptor(auth, loadingSrvc, dateTimeMethods) {
        this.auth = auth;
        this.loadingSrvc = loadingSrvc;
        this.dateTimeMethods = dateTimeMethods;
        this.sendGA = function (reqStartTime, response) {
            var timeTaken = this.dateTimeMethods.getTimeDiff(reqStartTime, (new Date()).getTime());
            window.ga('send', 'event', {
                eventCategory: 'Api Result',
                eventAction: 'response[\'config\'].url',
                eventLabel: 'response[\'meta\'][\'code\']',
                eventValue: JSON.stringify(response),
                // eventValue: 'response[\'meta\'][\'code\']',
                time: timeTaken
            });
        };
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.token = localStorage.getItem('token');
        if (this.token && !this.auth.isAuthed()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }
        var reqStartTime = (new Date()).getTime().toString();
        req = req.clone({ setHeaders: { 'req-start-time': reqStartTime } });
        if (this.token && !(req.url.indexOf('prisimic') > -1 || req.url.indexOf('login') > -1 || req.url.indexOf('register') > -1)) {
            req = req.clone({ setHeaders: { 'x-access-token': this.token } });
        }
        this.loadingSrvc.showLoader();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (response) {
            _this.sendGA(reqStartTime, response);
            _this.loadingSrvc.hideLoader();
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // this.auth.setupJWTToken(response.body);
            }
        }, function (err) {
            _this.loadingSrvc.hideLoader();
            _this.sendGA(reqStartTime, err);
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && err.status === 401) {
                // redirect to the login route// or show a modal
            }
        }));
    };
    HttpsRequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _utility_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
            _shared_utils__WEBPACK_IMPORTED_MODULE_6__["DateTimeMethods"]])
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());



/***/ }),

/***/ "./src/app/core/services/utility/loading.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/utility/loading.service.ts ***!
  \**********************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.userChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoadingService.prototype.showLoader = function () {
        this.userChangeEvent.emit(true);
    };
    LoadingService.prototype.hideLoader = function () {
        this.userChangeEvent.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoadingService.prototype, "userChangeEvent", void 0);
    LoadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/modules/login/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/modules/login/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_constant_common_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/constant/common.constant */ "./src/app/core/constant/common.constant.ts");
/* harmony import */ var _core_services_http_http_request_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/http/http-request.modal */ "./src/app/core/services/http/http-request.modal.ts");
/* harmony import */ var _core_services_http_http_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/http/http-request.service */ "./src/app/core/services/http/http-request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(comonSrvc) {
        this.comonSrvc = comonSrvc;
        this.apiBehaviorParams = {
            isSpinner: true,
            isEncrypted: true,
            preAuth: false,
            isIbmApi: false,
            apiStub: true,
            apiRetry: false,
            apiTimeOut: _core_constant_common_constant__WEBPACK_IMPORTED_MODULE_1__["GLOBAL_PROPERTIES"].REQUEST_TIMEOUT
        };
        this.apiPath = {
            loginUser: 'login',
            getOTP: 'generateotp',
            validateOtp: 'validateotp'
        };
    }
    LoginService.prototype.verifyUser = function (data) {
        var reqPayload = {
            username: data.mobile,
            password: data.password
        };
        var apiParams = Object.assign({}, this.apiBehaviorParams);
        apiParams.isSpinner = true;
        var httpRequest = new _core_services_http_http_request_modal__WEBPACK_IMPORTED_MODULE_2__["HttpRequestModal"](this.apiPath.loginUser, 'POST', reqPayload, apiParams);
        return this.comonSrvc.createHttpRequest(httpRequest);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_core_services_http_http_request_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/modules/offline/offline.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/offline/offline.component.ts ***!
  \******************************************************/
/*! exports provided: OfflineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineComponent", function() { return OfflineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OfflineComponent = /** @class */ (function () {
    function OfflineComponent() {
    }
    OfflineComponent.prototype.ngOnInit = function () {
    };
    OfflineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offline',
            template: __webpack_require__(/*! ./offline.html */ "./src/app/modules/offline/offline.html")
        }),
        __metadata("design:paramtypes", [])
    ], OfflineComponent);
    return OfflineComponent;
}());



/***/ }),

/***/ "./src/app/modules/offline/offline.html":
/*!**********************************************!*\
  !*** ./src/app/modules/offline/offline.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <title>Page Not Found</title>\r\n\r\n    <style media=\"screen\">\r\n      body { background: #ECEFF1; color: rgba(0,0,0,0.87); font-family: Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; }\r\n      #message { background: white; max-width: 360px; margin: 100px auto 16px; padding: 32px 24px 16px; border-radius: 3px; }\r\n      #message h3 { color: #888; font-weight: normal; font-size: 16px; margin: 16px 0 12px; }\r\n      #message h2 { color: #ffa100; font-weight: bold; font-size: 16px; margin: 0 0 8px; }\r\n      #message h1 { font-size: 22px; font-weight: 300; color: rgba(0,0,0,0.6); margin: 0 0 16px;}\r\n      #message p { line-height: 140%; margin: 16px 0 24px; font-size: 14px; }\r\n      #message a { display: block; text-align: center; background: #039be5; text-transform: uppercase; text-decoration: none; color: white; padding: 16px; border-radius: 4px; }\r\n      #message, #message a { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }\r\n      #load { color: rgba(0,0,0,0.4); text-align: center; font-size: 13px; }\r\n      @media (max-width: 600px) {\r\n        body, #message { margin-top: 0; background: white; box-shadow: none; }\r\n        body { border-top: 16px solid #ffa100; }\r\n      }\r\n    </style>\r\n  </head>\r\n  <body>\r\n    <div id=\"message\">\r\n      <h2>Offline</h2>\r\n      <h1>Connectivity lost</h1>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/shared/directives/char-only.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/char-only.directive.ts ***!
  \**********************************************************/
/*! exports provided: AlphaCharOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaCharOnlyDirective", function() { return AlphaCharOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlphaCharOnlyDirective = /** @class */ (function () {
    function AlphaCharOnlyDirective(el) {
        this.el = el;
        this.regex = new RegExp(/^[ a-zA-Z0-9]*$/g);
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    AlphaCharOnlyDirective.prototype.onKeyDown = function (event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AlphaCharOnlyDirective.prototype, "onKeyDown", null);
    AlphaCharOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAlphaCharOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AlphaCharOnlyDirective);
    return AlphaCharOnlyDirective;
}());



/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/modal-basic/modal-basic.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\r\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n  <div class=\"modal-dialog\" [ngClass]=\"dialogClass\">\r\n    <div class=\"modal-content\">\r\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\r\n        <ng-content select=\".app-modal-header\"></ng-content>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ng-content select=\".app-modal-body\"></ng-content>\r\n      </div>\r\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\r\n        <ng-content select=\".app-modal-footer\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/modal-basic/modal-basic.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.basic.fade {\n  opacity: 0;\n  transition: opacity .15s linear; }\n\n.basic.fade.in {\n    opacity: 1; }\n\n.basic.modal.fade.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.basic.modal.fade .modal-dialog {\n  transition: all .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%); }\n\n.basic .basic-close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 16px;\n  color: #292b2c; }\n\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none; }\n\n.basic h5 {\n  margin-bottom: 0;\n  color: #757575;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/modal-basic/modal-basic.component.ts ***!
  \*************************************************************/
/*! exports provided: ModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBasicComponent", function() { return ModalBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalBasicComponent = /** @class */ (function () {
    function ModalBasicComponent() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalBasicComponent.prototype.ngOnInit = function () {
    };
    ModalBasicComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalBasicComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalBasicComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalBasicComponent.prototype, "dialogClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBasicComponent.prototype, "hideHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBasicComponent.prototype, "hideFooter", void 0);
    ModalBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-basic',
            template: __webpack_require__(/*! ./modal-basic.component.html */ "./src/app/shared/modal-basic/modal-basic.component.html"),
            styles: [__webpack_require__(/*! ./modal-basic.component.scss */ "./src/app/shared/modal-basic/modal-basic.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ModalBasicComponent);
    return ModalBasicComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var _directives_char_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/char-only.directive */ "./src/app/shared/directives/char-only.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]
            ],
            exports: [
                _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_3__["ModalBasicComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"],
                _directives_char_only_directive__WEBPACK_IMPORTED_MODULE_5__["AlphaCharOnlyDirective"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
            ],
            declarations: [
                _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_3__["ModalBasicComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"],
                _directives_char_only_directive__WEBPACK_IMPORTED_MODULE_5__["AlphaCharOnlyDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-line-material.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-line-material.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%; }\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both; }\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0); }\n  40% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1); } }\n\n@keyframes sk-line-material {\n  0% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0); }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1); } }\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0); }\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8); }\n"

/***/ }),

/***/ "./src/app/shared/spinner/spinkits.ts":
/*!********************************************!*\
  !*** ./src/app/shared/spinner/spinkits.ts ***!
  \********************************************/
/*! exports provided: Spinkit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
var Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\r\n    <div class=\"loader-bg\">\r\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\r\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n -->\r\n<div class=\"theme-loader\" *ngIf=\"isSpinnerVisible\">\r\n      <div class=\"loader-track\">\r\n        <div class=\"loader-bar\"></div>\r\n      </div>\r\n    </div> \r\n"

/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: .7;\n  background-color: #f1f1f1; }\n\n.colored-parent, .colored > div {\n  background-color: #333; }\n"

/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinkits */ "./src/app/shared/spinner/spinkits.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_services_utility_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/utility/loading.service */ "./src/app/core/services/utility/loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, loadingService, document) {
        this.router = router;
        this.loadingService = loadingService;
        this.document = document;
        this.isSpinnerVisible = false;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"];
        this.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"].skLine;
        /*this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.isSpinnerVisible = true;
            } else if ( event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });*/
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingService.userChangeEvent.subscribe(function (isActive) {
            _this.isSpinnerVisible = isActive;
        });
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "spinner", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/shared/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/shared/spinner/spinner.component.scss"), __webpack_require__(/*! ./spinkit-css/sk-line-material.scss */ "./src/app/shared/spinner/spinkit-css/sk-line-material.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_utility_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
            Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: DateTimeMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeMethods", function() { return DateTimeMethods; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateTimeMethods = /** @class */ (function () {
    function DateTimeMethods() {
    }
    DateTimeMethods.prototype.getTimeDiff = function (startTimeStr, endTime) {
        var startTime = typeof (startTimeStr) === 'string' ? Number(startTimeStr) : startTimeStr;
        var timeTaken = endTime - startTime;
        return timeTaken;
    };
    DateTimeMethods = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DateTimeMethods);
    return DateTimeMethods;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\xamp\htdocs\TestApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map