(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-welcome-welcome-module"],{

/***/ "./src/app/modules/welcome/welcome-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/welcome/welcome-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: welcomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "welcomeRoutingModule", function() { return welcomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component */ "./src/app/modules/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '**',
        component: _welcome_component__WEBPACK_IMPORTED_MODULE_2__["welcomeComponent"],
        pathMatch: 'full'
    }
];
var welcomeRoutingModule = /** @class */ (function () {
    function welcomeRoutingModule() {
    }
    welcomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], welcomeRoutingModule);
    return welcomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/welcome/welcome.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/welcome/welcome.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\r\n <header class=\"bg-white\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-xs-6 text-left\"><a href=\"javascript:void(0);\">My App</a></div>\r\n        <div class=\"col-md-6 col-xs-6 text-right\"><a [routerLink]=\"['/login']\" >Login</a></div>\r\n      </div>\r\n  </div>\r\n</header>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"container-fluid text-center pt-12p\">\r\n  <div class=\"row m-0\">\r\n    <div class=\"col-md-4\"></div>\r\n    <div class=\"col-md-4 bg-white p-20 rounded-edge\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h2 class=\"color-blue\">Welcome</h2>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row m-0\">\r\n        <div class=\"col-md-4 col-xs-4\"></div>\r\n        <div class=\"col-md-4 col-xs-4 mobile-padd-0 pl-15 pr-15 mt-15 mb-15\"><div class=\"profile\"><img src=\"\" alt=\"\"></div></div>\r\n         \r\n        <div class=\"col-md-4 col-xs-4\"></div>\r\n      </div>\r\n\r\n     <!--  <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <p class=\"color-black fs-21 mb-0\">User Id -{{userId}}</p>\r\n        </div>\r\n      </div> -->\r\n      \r\n    </div>\r\n    <div class=\"col-md-4\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/welcome/welcome.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/welcome/welcome.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  border-bottom: 1px solid #ccc;\n  padding: 15px 0; }\n  header .logo > a > img {\n    max-width: 100px; }\n  @media screen and (max-width: 768px) {\n  .col-xs-6 {\n    width: 50%; } }\n  .container-wrapper {\n  min-height: 100vh; }\n  .bg-white {\n  background-color: #fff; }\n  .color-blue {\n  color: #007bff; }\n  .color-black {\n  color: #232323; }\n  .profile {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: #eee;\n  position: relative;\n  border: 1px solid #ccc;\n  box-shadow: 1px 9px 8px -4px #ddd; }\n  .profile img {\n  width: 100%;\n  border-radius: 50%;\n  overflow: hidden; }\n  .m-0 {\n  margin: 0px; }\n  .pt-12p {\n  padding-top: 12%; }\n  .p-20 {\n  padding: 20px; }\n  .rounded-edge {\n  border-radius: 5px;\n  border: 1px solid #ccc; }\n  .mt-15 {\n  margin-top: 15px; }\n  .mb-15 {\n  margin-bottom: 15px; }\n  .fs-21 {\n  font-size: 21px; }\n  .mb-0 {\n  margin-bottom: 0px; }\n  @media screen and (max-width: 768px) {\n  .col-xs-4 {\n    width: 33.33333%; }\n  .mobile-padd-0 {\n    padding: 0px !important; }\n  .profile {\n    width: 80px;\n    height: 80px; } }\n"

/***/ }),

/***/ "./src/app/modules/welcome/welcome.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/welcome/welcome.component.ts ***!
  \******************************************************/
/*! exports provided: welcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "welcomeComponent", function() { return welcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var welcomeComponent = /** @class */ (function () {
    function welcomeComponent(dataService) {
        this.dataService = dataService;
    }
    welcomeComponent.prototype.ngOnInit = function () {
        console.log(this.dataService);
        this.userId = this.dataService.getUserId();
        console.log('this.dataService.getUserId', this.userId);
    };
    welcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuration',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/modules/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/modules/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], welcomeComponent);
    return welcomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/welcome/welcome.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/welcome/welcome.module.ts ***!
  \***************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/modules/welcome/welcome-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome.component */ "./src/app/modules/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _welcome_routing_module__WEBPACK_IMPORTED_MODULE_2__["welcomeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_4__["welcomeComponent"]]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-welcome-welcome-module.js.map