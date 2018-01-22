webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_adminauth_guard__ = __webpack_require__("../../../../../src/app/guards/adminauth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_day_view_day_view_component__ = __webpack_require__("../../../../../src/app/components/day-view/day-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__layouts_dash_layout_dash_component__ = __webpack_require__("../../../../../src/app/layouts/dash-layout/dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__layouts_auth_layout_auth_component__ = __webpack_require__("../../../../../src/app/layouts/auth-layout/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_shared_linechart_linechart_component__ = __webpack_require__("../../../../../src/app/components/shared/linechart/linechart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_transactions_view_transactions_view_component__ = __webpack_require__("../../../../../src/app/components/transactions-view/transactions-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_shared_barchart_barchart_component__ = __webpack_require__("../../../../../src/app/components/shared/barchart/barchart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_errors_view_errors_view_component__ = __webpack_require__("../../../../../src/app/components/errors-view/errors-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_shared_scatterchart_scatterchart_component__ = __webpack_require__("../../../../../src/app/components/shared/scatterchart/scatterchart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_manage_users_manage_users_component__ = __webpack_require__("../../../../../src/app/components/manage-users/manage-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_manage_notifications_manage_notifications_component__ = __webpack_require__("../../../../../src/app/components/manage-notifications/manage-notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_upload_log_file_upload_log_file_component__ = __webpack_require__("../../../../../src/app/components/upload-log-file/upload-log-file.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_20__layouts_auth_layout_auth_component__["a" /* AuthComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_19__layouts_dash_layout_dash_component__["a" /* DashComponent */],
        children: [
            { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_18__components_day_view_day_view_component__["a" /* DayViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'transactionsview', component: __WEBPACK_IMPORTED_MODULE_22__components_transactions_view_transactions_view_component__["a" /* TransactionsViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'errorsview', component: __WEBPACK_IMPORTED_MODULE_24__components_errors_view_errors_view_component__["a" /* ErrorsViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'manageusers', component: __WEBPACK_IMPORTED_MODULE_26__components_manage_users_manage_users_component__["a" /* ManageUsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_adminauth_guard__["a" /* AdminauthGuard */]] },
            { path: 'managenotifications', component: __WEBPACK_IMPORTED_MODULE_27__components_manage_notifications_manage_notifications_component__["a" /* ManageNotificationsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_adminauth_guard__["a" /* AdminauthGuard */]] },
            { path: 'uploadlog', component: __WEBPACK_IMPORTED_MODULE_28__components_upload_log_file_upload_log_file_component__["a" /* UploadLogFileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_adminauth_guard__["a" /* AdminauthGuard */]] },
        ]
    }
];
/**
{path:'',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
{path:'profile',component:ProfileComponent, canActivate:[AuthGuard]},
{ path: 'summary', component: DayViewComponent },
{ path: 'detailedview', component: DetailedViewComponent },
{ path: 'criticalerrors', component: CriticalErrorsViewComponent }
]
**/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_day_view_day_view_component__["a" /* DayViewComponent */],
                __WEBPACK_IMPORTED_MODULE_19__layouts_dash_layout_dash_component__["a" /* DashComponent */],
                __WEBPACK_IMPORTED_MODULE_20__layouts_auth_layout_auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_shared_linechart_linechart_component__["a" /* LinechartComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_transactions_view_transactions_view_component__["a" /* TransactionsViewComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_shared_barchart_barchart_component__["a" /* BarchartComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_errors_view_errors_view_component__["a" /* ErrorsViewComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_shared_scatterchart_scatterchart_component__["a" /* ScatterchartComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_manage_users_manage_users_component__["a" /* ManageUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_manage_notifications_manage_notifications_component__["a" /* ManageNotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_upload_log_file_upload_log_file_component__["a" /* UploadLogFileComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_adminauth_guard__["a" /* AdminauthGuard */], __WEBPACK_IMPORTED_MODULE_13__services_log_service__["a" /* LogService */], __WEBPACK_IMPORTED_MODULE_14__services_users_service__["a" /* UsersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/day-view/day-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scrolly{\r\n    overflow-y: scroll;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/day-view/day-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Summary</h1>\n<br>\n\n\n  <table class=\"\">\n    <tr>\n      <td>\n        <h4>Log:</h4>\n      </td>\n      <td>\n        <h4>{{selLogName}}</h4>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4>Log Valid From:</h4>\n      </td>\n      <td>\n        <h4>{{logDateFrom}}</h4>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4>Log Valid Till:</h4>\n      </td>\n      <td>\n        <h4>{{logDateTo}}</h4>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4>Log Uploaded On:</h4>\n      </td>\n      <td>\n        <h4>{{logUploadDate}}</h4>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4>ATM Id:</h4>\n      </td>\n      <td>\n        <h4>{{atmId}}</h4>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4>Device Type:</h4>\n      </td>\n      <td>\n        <h4>{{deviceType}}</h4>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h4>Location:</h4>\n      </td>\n      <td>\n        <h4>{{location}}</h4>\n      </td>\n    </tr>\n  </table>\n\n<br>\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <h4>Number of Successful Transactions: {{successTransactions}} </h4>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let transactionType of transactionsByType\">{{transactionType.type}}s : {{transactionType.count}}</li>\n    </ul>\n  </div>\n  <div class=\"col-md-2\">\n    <!--<app-linechart [ad]=\"gg\" [labelY]=\"labelY1\" [sName]=\"sName1\"></app-linechart>-->\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <br>\n    <h4>Number of Failed Transactions: {{failedTransactions}}</h4>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Due to User Errors : {{noUserErrors}}</li>\n      <li class=\"list-group-item\">Due to Technical Errors : {{noTechnicalTransactionErrors}}</li>\n    </ul>\n    <h4>Other Technical Errors: {{noTechnicalErrors-noTechnicalTransactionErrors}}</h4>\n    <br>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <h4>Total Transaction Value: {{totalTAmount}}</h4>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let transactionType of transactionsByType\">{{transactionType.type}}s : {{transactionType.amount}}</li>\n    </ul>\n  </div>\n  <div class=\"col-md-2\">\n\n  </div>\n</div>\n\n\n\n\n\n\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <br>\n    <h4>Uptime:</h4>\n    <app-linechart [dataSet]=\"dataSet\" [labelY]=\"labelY2\"></app-linechart>\n  </div>\n  <div class=\"col-md-2\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/day-view/day-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var DataSet = /** @class */ (function () {
    function DataSet(label, borderColor, fill, data) {
        this.label = label;
        this.borderColor = borderColor;
        this.fill = fill;
        this.data = data;
    }
    return DataSet;
}());
var DayViewComponent = /** @class */ (function () {
    function DayViewComponent(http, logService) {
        this.http = http;
        this.logService = logService;
        this.dateString = "2017-01-01T";
        this.labelY1 = "No of Transactions";
        this.labelY2 = "State";
        this.sName1 = "Transactions";
        this.sName2 = "Status";
        this.uptime = [];
        this.dataSet = [];
    }
    DayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logService.currentLog.subscribe(function (currentLog) {
            _this.selLogName = currentLog;
            _this.logService.getLogInfo(currentLog).subscribe(function (data) {
                _this.atmId = data[0].atmId;
                _this.deviceType = data[0].deviceType;
                _this.location = data[0].location;
                _this.logDateFrom = new Date(data[0].timeValidFrom).toString();
                _this.logDateOFrom = new Date(data[0].timeValidFrom);
                _this.logDateTo = new Date(data[0].timeValidTo).toString();
                _this.logDateOTo = new Date(data[0].timeValidTo);
                _this.logUploadDate = new Date(data[0].dateUploaded).toString();
            });
            _this.logService.getNoSuccessTransactions(currentLog).subscribe(function (data) {
                _this.successTransactions = data[0].count;
                _this.totalTAmount = data[0].amount;
            });
            _this.logService.getNoFailedTransactions(currentLog).subscribe(function (data) {
                _this.failedTransactions = data[0].count;
            });
            _this.logService.getTransactionSummaryByType(currentLog).subscribe(function (data) {
                _this.transactionsByType = data;
            });
            _this.logService.getTransactionTimesGraph(currentLog).subscribe(function (data) {
                _this.ttgraph = data;
                _this.gg = new Array(24);
                for (var i = 0; i < 24; i++) {
                    var lo = new Point(new Date(_this.logDateOFrom.getFullYear(), _this.logDateOFrom.getMonth(), _this.logDateOFrom.getDate(), i, 0, 1), 0);
                    _this.gg[i] = lo;
                }
                for (var i = 0; i < _this.ttgraph.length; i++) {
                    _this.gg[_this.ttgraph[i].x].y = _this.ttgraph[i].y;
                }
            });
            _this.logService.getNoUserErrors(currentLog).subscribe(function (data) {
                _this.noUserErrors = data[0].count;
            });
            _this.logService.getNoTransactionTechnicalErrors(currentLog).subscribe(function (data) {
                _this.noTechnicalTransactionErrors = data[0].count;
            });
            _this.logService.getNoTechnicalErrors(currentLog).subscribe(function (data) {
                _this.noTechnicalErrors = data[0].count;
            });
            _this.logService.getUpDown(currentLog).subscribe(function (data) {
                _this.updown = data;
                _this.uptime = [];
                for (var i = 0; i < _this.updown.length; i++) {
                    _this.updown[i]['at'] = new Date(_this.updown[i]['at']);
                }
                var trigger = 1;
                for (var k = _this.logDateOFrom.getHours(), i = 0; i < (_this.logDateOTo.getTime() - _this.logDateOFrom.getTime()) / 3600000; i++, k++) {
                    var l1 = new Point(new Date(_this.updown[0]['at'].getFullYear(), _this.updown[0]['at'].getMonth(), _this.updown[0]['at'].getDate(), k, 0, 0), trigger);
                    for (var j = 0; j < _this.updown.length; j++) {
                        if (_this.updown[j]['event'] == "down" && _this.updown[j]['at'].getHours() == k) {
                            var l1 = new Point(_this.updown[j]['at'], 0);
                            var l2 = new Point(new Date(l1.x.getTime() - 1000), 1);
                            trigger = 0;
                            _this.uptime.push(l2);
                            _this.uptime.push(l1);
                        }
                        if (_this.updown[j]['event'] == "up" && _this.updown[j]['at'].getHours() == k) {
                            var l1 = new Point(_this.updown[j]['at'], 1);
                            var l2 = new Point(new Date(l1.x.getTime() - 1000), 0);
                            trigger = 1;
                            _this.uptime.push(l2);
                            _this.uptime.push(l1);
                        }
                    }
                    _this.uptime.push(l1);
                }
                _this.dataSet = [];
                _this.dataSet.push(new DataSet("State", "#3e95cd", false, _this.uptime));
            });
        });
    };
    DayViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-day-view',
            template: __webpack_require__("../../../../../src/app/components/day-view/day-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/day-view/day-view.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */]) === "function" && _b || Object])
    ], DayViewComponent);
    return DayViewComponent;
    var _a, _b;
}());

//# sourceMappingURL=day-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/errors-view/errors-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/errors-view/errors-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Errors</h1>\n\n<br>\n<h4>Technical Errors: {{noTechnicalErrors}}</h4>\n<div *ngIf=\"showTechnicalErrors\" class=\"wellcol well\">\n<p class=\"lead\"><a data-toggle=\"collapse\" href=\"#collapse1\">During transactions: {{noTechnicalTransactionErrors}} <span class=\"caret\"></span></a></p>\n<div id=\"collapse1\" class=\"collapse\">\n<div class=\"well well-sm well-ex\" *ngFor=\"let terror of technicalTransactionErrors\">\n  <p>Error ID: {{terror.transactions.error.errorId}}</p>\n  <p>Description: {{terror.transactions.error.desc}}</p>\n  <p>Time: {{terror.transactions.time}}</p>\n  <p>Transaction Id: {{terror.transactions.transactionId}}</p>\n  <p>Transaction Type: {{terror.transactions.type}}</p>\n</div>\n</div>\n</div>\n\n<div *ngIf=\"showTechnicalErrors\" class=\"well\">\n<p class=\"lead\"><a data-toggle=\"collapse\" href=\"#collapse2\">Other Errrors: {{noTechnicalErrors-noTechnicalTransactionErrors}} <span class=\"caret\"></span></a></p>\n<div id=\"collapse2\" class=\"collapse\">\n<div class=\"well well-sm\" *ngFor=\"let terror of otherTechnicalErrors\">\n  <p>Error ID: {{terror.terrors.errorId}}</p>\n  <p>Description: {{terror.terrors.errorName}}</p>\n  <p>Time: {{terror.terrors.time}}</p>\n</div>\n</div>\n</div>\n<div *ngIf=\"showTechnicalErrors\" class=\"col-md-10\">\n<app-scatterchart [yLabels]=\"yLabels3\" [xLabels]=\"allErrorTimes\" [dataSet1]=\"tedataset\" [dataSet2]=\"oedataset\"></app-scatterchart>\n</div>\n\n<div class=\"row\">\n    <br>\n    <div class=\"col-md-6\">\n    <h4>Failed transactions due to user errors: {{noUserErrors}}</h4>\n    </div>\n    <div class=\"col-md-6\"></div>\n  </div>\n    <div *ngIf=\"showUserErrors\" class=\"row\">\n    <div class=\"col-md-6\"><app-barchart [labels]=\"barLabels\" [data]=\"barData\"></app-barchart></div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/errors-view/errors-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Error = /** @class */ (function () {
    function Error(name, time, type) {
        this.name = name;
        this.time = time;
        this.type = type;
    }
    return Error;
}());
var ErrorsViewComponent = /** @class */ (function () {
    function ErrorsViewComponent(http, logService) {
        this.http = http;
        this.logService = logService;
        this.yLabels = [];
        this.yLabels2 = [];
        this.yLabels3 = [];
        this.tedataset = [];
        this.oedataset = [];
    }
    ErrorsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showTechnicalErrors = true;
        this.showUserErrors = true;
        this.allErrorTimes = [];
        this.logService.currentLog.subscribe(function (currentLog) {
            _this.allErrorTimes = [];
            _this.yLabels = [];
            _this.yLabels2 = [];
            _this.yLabels3 = [];
            _this.allErrors = [];
            _this.allErrorsf = [];
            _this.allErrors2 = [];
            _this.allErrors3 = [];
            _this.tedataset = [];
            _this.oedataset = [];
            _this.otherTechnicalErrors = [];
            _this.selLogName = currentLog;
            _this.logService.getLogInfo(currentLog).subscribe(function (data) {
                _this.logDateOFrom = new Date(data[0].timeValidFrom);
                _this.logDateOTo = new Date(data[0].timeValidTo);
                _this.allErrors.push(new Error(null, _this.logDateOFrom, "none"));
                _this.allErrors.push(new Error(null, _this.logDateOTo, "none"));
            });
            //this.allErrors.push(new Error(null,this.logDateO,"none"));
            _this.logService.getNoTechnicalErrors(currentLog).subscribe(function (data) {
                _this.noTechnicalErrors = data[0].count;
                if (_this.noTechnicalErrors > 0) {
                    _this.showTechnicalErrors = true;
                }
                else {
                    _this.showTechnicalErrors = false;
                }
            });
            _this.logService.getNoTransactionTechnicalErrors(currentLog).subscribe(function (data) {
                _this.noTechnicalTransactionErrors = data[0].count;
            });
            _this.logService.getTransactionTechnicalErrors(currentLog).subscribe(function (data) {
                _this.technicalTransactionErrors = data;
                _this.yLabels.push(" ");
                for (var i = 0; i < _this.technicalTransactionErrors.length; i++) {
                    _this.technicalTransactionErrors[i].transactions.time = new Date(_this.technicalTransactionErrors[i].transactions.time);
                    _this.allErrors2.push(new Error(_this.technicalTransactionErrors[i].transactions.error.desc, new Date(_this.technicalTransactionErrors[i].transactions.time), "transaction"));
                    if (_this.yLabels.indexOf(_this.technicalTransactionErrors[i].transactions.error.desc) == -1) {
                        _this.yLabels.push(_this.technicalTransactionErrors[i].transactions.error.desc);
                    }
                }
                _this.logService.getOtherTechnicalErrors(currentLog).subscribe(function (data) {
                    _this.otherTechnicalErrors = data;
                    for (var i = 0; i < _this.otherTechnicalErrors.length; i++) {
                        _this.otherTechnicalErrors[i].terrors.time = new Date(_this.otherTechnicalErrors[i].terrors.time);
                        _this.allErrors3.push(new Error(_this.otherTechnicalErrors[i].terrors.errorName, new Date(_this.otherTechnicalErrors[i].terrors.time), "other"));
                        if (_this.yLabels.indexOf(_this.otherTechnicalErrors[i].terrors.errorName) == -1) {
                            _this.yLabels2.push(_this.otherTechnicalErrors[i].terrors.errorName);
                        }
                    }
                    _this.allErrorsf = _this.allErrors.concat(_this.allErrors2, _this.allErrors3);
                    _this.allErrorsf.sort(function (a, b) {
                        return a.time.getTime() - b.time.getTime();
                    });
                    for (var i = 0; i < _this.allErrorsf.length; i++) {
                        _this.allErrorTimes.push(_this.allErrorsf[i].time.toTimeString());
                        if (_this.allErrorsf[i].type == "transaction") {
                            _this.tedataset.push(_this.allErrorsf[i].name);
                            _this.oedataset.push(null);
                        }
                        else {
                            _this.oedataset.push(_this.allErrorsf[i].name);
                            _this.tedataset.push(null);
                        }
                    }
                    _this.yLabels2.push(" ");
                    _this.yLabels3 = _this.yLabels.concat(_this.yLabels2);
                });
            });
            _this.logService.getNoUserErrors(currentLog).subscribe(function (data) {
                _this.noUserErrors = data[0].count;
                if (_this.noUserErrors > 0) {
                    _this.showUserErrors = true;
                }
                else {
                    _this.showUserErrors = false;
                }
            });
            _this.logService.getUserErrorPoints(currentLog).subscribe(function (data) {
                _this.barLabels = [];
                _this.barData = [];
                for (var i = 0; i < data.length; i++) {
                    _this.barLabels.push(data[i].x);
                    _this.barData.push(data[i].y);
                }
            });
        });
    };
    ErrorsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-errors-view',
            template: __webpack_require__("../../../../../src/app/components/errors-view/errors-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/errors-view/errors-view.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */]) === "function" && _b || Object])
    ], ErrorsViewComponent);
    return ErrorsViewComponent;
    var _a, _b;
}());

//# sourceMappingURL=errors-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jump-height{\r\n    height:450px;\r\n}\r\n\r\n.logo-set{\r\n    height: 100%;\r\n    margin-left: -24px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.jumbotron{\r\n    background-color: #35353C ;\r\n    color:#000;\r\n}\r\n.btn-default{\r\n    background-color: #f8f8f8;\r\n    border-color: #f8f8f8;\r\n}\r\n\r\n.navbar{\r\n    background-color: #f8f8f8;\r\n    margin-bottom:0px;\r\n}\r\n\r\n.navbar-default{\r\n    border-color: #fff;\r\n}\r\n\r\nh1, .h1, h2, .h2, h3, .h3{\r\n    margin-bottom:20px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Main component for a primary marketing message or call to action -->\n  <div class=\"jumbotron jump-height\">\n    <h1>DEEPL }</h1>\n    <h2>Log Management System.</h2>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n      <div class=\"col-md-3\">\n        <h3>Built Using:</h3>\n      </div>\n      <div class=\"col-md-9 logo-set\"><img src=\"assets/meanstack-logo.jpg\" alt=\"logos\" height=\"42\"></div>\n    </div>\n\n    <div class=\"col-md-3\">\n      <h3>Contact Us:</h3>\n      <p>Developed By Team Pie <span class=\"glyphicon glyphicon-copyright-mark\"></span></p>\n      <p>teamPie@icloud.com</p>\n      <p>+9477TEAMPIE</p>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.data = [
            { name: 'A', yVal: 1 },
            { name: 'B', yVal: 4 },
            { name: 'C', yVal: 2 },
            { name: 'D', yVal: 3 }
        ];
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-4\">\n    <h2 class=\"page-header\">Login</h2>\n    <flash-messages></flash-messages>\n    <form (submit)=\"onLoginSubmit()\">\n      <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n    </form>\n  </div>\n  <div class=\"col-md-4\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['summary']);
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                //this.flashMessagesService.show('You are now logged in!',{cssClass: 'alert-success',timeout:5000});
                _this.router.navigate(['summary']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manage-notifications/manage-notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage-notifications/manage-notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Manage Notifications</h1>\n<br>\n\n<div class=\"row\">\n<flash-messages></flash-messages>\n  <div class=\"col-md-4 well\">\n    <h4>Send Notification</h4>\n\n    \n    <form (submit)=\"onSend()\">\n      <div class=\"form-group\">\n        <label>Title</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" name=\"title\">\n      </div>\n      <div class=\"form-group\">\n        <label>Body</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"body\" name=\"body\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Send\">\n    </form>\n  </div>\n  <div class=\"col-md-1\"></div>\n  <div class=\"col-md-6 well\">\n    <h4>Set auto notification time</h4>\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <label for=\"hour\">HH(0-24)</label>\n        <input (keyup)=\"checkTime()\" type=\"text\" class=\"form-control\"  name=\"hour\" [(ngModel)]=\"hour\" placeholder=\"HH(0-24)\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"minute\">HH(0-24)</label>\n        <input (keyup)=\"checkTime()\" type=\"text\" class=\"form-control\" name=\"minute\" [(ngModel)]=\"min\" placeholder=\":MM(0-59)\">\n      </div>\n      <button [disabled]=\"check\" type=\"submit\" class=\"btn btn-primary\" (click)=\"setTime()\">Set</button>\n    </form>\n  </div>\n</div>\n<h4>Sent Notifications</h4>\n\n<div class=\"row\">\n\n  <div class=\"col-md-8 well well-format\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Title</th>\n          <th>Body</th>\n          <th>Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let notification of notifications\">\n          <td>{{notification.title}}</td>\n          <td>{{notification.body}}</td>\n          <td>{{notification.date}}</td>\n\n        </tr>\n      </tbody>\n    </table>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/manage-notifications/manage-notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageNotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageNotificationsComponent = /** @class */ (function () {
    function ManageNotificationsComponent(usersService, flashMessagesService) {
        this.usersService = usersService;
        this.flashMessagesService = flashMessagesService;
    }
    ManageNotificationsComponent.prototype.ngOnInit = function () {
        this.setNotifications();
        this.getNotificationTime();
    };
    ManageNotificationsComponent.prototype.onSend = function () {
        var _this = this;
        this.usersService.sendNotification(this.title, this.body).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.title = "";
                _this.body = "";
                _this.setNotifications();
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.setNotifications();
    };
    ManageNotificationsComponent.prototype.setNotifications = function () {
        var _this = this;
        this.usersService.getNotifications().subscribe(function (data) {
            _this.notifications = data.notf;
            for (var i = 0; i < _this.notifications.length; i++) {
                _this.notifications[i].date = new Date(_this.notifications[i].date);
            }
        });
    };
    ManageNotificationsComponent.prototype.getNotificationTime = function () {
        var _this = this;
        this.usersService.getNotificationTime().subscribe(function (data) {
            _this.hour = data.hour;
            _this.min = data.min;
            if (_this.hour != -1 && _this.min != -1) {
                _this.hour = _this.hour + 5;
                _this.min = _this.min + 30;
                if (_this.min > 59) {
                    _this.hour++;
                    _this.min = _this.min - 60;
                }
                if (_this.hour > 23) {
                    _this.hour = _this.hour - 24;
                }
            }
            if (_this.hour == -1) {
                _this.check = true;
            }
        });
    };
    ManageNotificationsComponent.prototype.setTime = function () {
        var _this = this;
        var h = this.hour - 5;
        var m = this.min - 30;
        if (m < 0) {
            m = 60 + m;
            h--;
        }
        if (h < 0) {
            h = 24 + h;
        }
        this.usersService.setNotificationTime(h, m).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ManageNotificationsComponent.prototype.checkTime = function () {
        if (this.hour >= 0 && this.hour < 24 && this.min >= 0 && this.min <= 59) {
            this.check = false;
        }
        else {
            this.check = true;
        }
    };
    ManageNotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-notifications',
            template: __webpack_require__("../../../../../src/app/components/manage-notifications/manage-notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manage-notifications/manage-notifications.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
    ], ManageNotificationsComponent);
    return ManageNotificationsComponent;
    var _a, _b;
}());

//# sourceMappingURL=manage-notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manage-users/manage-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage-users/manage-users.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Manage Users</h1>\n<br>\n<h4>Un-Approved Users</h4>\n<div class=\"row\">\n  <div class=\"col-md-10 well well-format\">\n      <flash-messages></flash-messages>\n      <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th>Username</th>\n              <th>Email</th>\n              <th>Name</th>\n              <th>Requested Level</th>\n\n              <th>Approval</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of unApprovedUsers\">\n              <td>{{user.username}}</td>\n              <td>{{user.email}}</td>\n              <td>{{user.name}}</td>\n              \n              <td>{{user.requestusertype}}</td>\n              <td><button class=\"btn-success\" (click)=\"approveOnClick(user)\">Approve</button>\n                <button class=\"btn-warning\" (click)=\"rejectOnClick(user)\">Reject</button>\n              </td>\n            </tr>\n          </tbody>\n      </table>\n  </div>\n  <div class=\"col-md-2\">\n\n  </div>  \n</div>\n\n<h4>Approved Users</h4>\n\n<div class=\"row\">\n  <div class=\"col-md-10 well well-format\">\n      <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th>Username</th>\n              <th>Email</th>\n              <th>Name</th>\n              <th>User Type</th>\n\n              <th>Reset Password: pass123</th>\n              <th>Delete User</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let user of approvedUsers\">\n              <td>{{user.username}}</td>\n              <td>{{user.email}}</td>\n              <td>{{user.name}}</td>\n              \n              <td>{{user.usertype}}</td>\n              <td>\n                <button class=\"btn-warning\" (click)=\"resetPasswordOnClick(user)\">Reset</button>\n              </td>\n              <td>\n                <button class=\"btn-warning\" (click)=\"rejectOnClick(user)\">Delete</button>\n              </td>\n            </tr>\n          </tbody>\n      </table>\n  </div>\n  <div class=\"col-md-2\">\n\n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/manage-users/manage-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageUsersComponent = /** @class */ (function () {
    function ManageUsersComponent(authService, usersService, flashMessagesService) {
        this.authService = authService;
        this.usersService = usersService;
        this.flashMessagesService = flashMessagesService;
    }
    ManageUsersComponent.prototype.ngOnInit = function () {
        this.setApprovedUsers();
        this.setunApprovedUsers();
    };
    ManageUsersComponent.prototype.setApprovedUsers = function () {
        var _this = this;
        this.usersService.getApprovedUsers().subscribe(function (data) {
            _this.approvedUsers = data;
        });
    };
    ManageUsersComponent.prototype.setunApprovedUsers = function () {
        var _this = this;
        this.usersService.getUnApprovedUsers().subscribe(function (data) {
            _this.unApprovedUsers = data;
        });
    };
    ManageUsersComponent.prototype.approveOnClick = function (user) {
        var _this = this;
        this.usersService.approveUser(user).subscribe(function (data) {
            if (data.success)
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            else
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            _this.setApprovedUsers();
            _this.setunApprovedUsers();
        });
    };
    ManageUsersComponent.prototype.rejectOnClick = function (user) {
        var _this = this;
        this.usersService.removeUser(user).subscribe(function (data) {
            if (data.success)
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            else
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
            _this.setApprovedUsers();
            _this.setunApprovedUsers();
        });
    };
    ManageUsersComponent.prototype.resetPasswordOnClick = function (user) {
        var _this = this;
        this.usersService.resetPassword(user.username, "pass123").subscribe(function (data) {
            if (data.success)
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 5000 });
            else
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        });
    };
    ManageUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-users',
            template: __webpack_require__("../../../../../src/app/components/manage-users/manage-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/manage-users/manage-users.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], ManageUsersComponent);
    return ManageUsersComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=manage-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.navbar{\r\n    margin-bottom: 0px !important;\r\n    background-color: #fff;\r\n    color: rgba(255,255,255 ,.60);\r\n    border: 0px solid rgba(32, 55, 252, 0.00);\r\n    border-radius: 0px;\r\n}\r\n\r\n\r\n.navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand{\r\n    margin-left:0px;\r\n    color:#000;\r\n}\r\n\r\n.container-fluid{\r\n    padding-left:0px;\r\n    padding-right:0px;\r\n}\r\n\r\n.side-bar{\r\n    background-color: #f7b709;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.nav-pills > li > a {\r\n    color: rgba(255,255,255 ,.60);\r\n    background-color: #252528;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"col-md-2 side-bar\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/home']\">DEEPL</a>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <select [(ngModel)]=\"selLogName\" class=\"form-control\" default=\"test\">\n        <option *ngFor=\"let log of logNames\">\n          {{ log['logName'] }}\n        </option>\n      </select> \n    </div>\n    <div class=\"col-md-4\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">LogIn</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register </a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" [routerLink]=\"['/home']\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessagesService, logService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.logService = logService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            return false;
        });
        this.logService.getLogNames().subscribe(function (data) {
            _this.logNames = data.log;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/home']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_log_service__["a" /* LogService */]) === "function" && _d || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".window-div{\r\n    background-color: #fff;\r\n    padding:15px 15px 15px 15px;\r\n    margin-top:10px; \r\n}\r\n\r\n.list-group-item{\r\n    border: 1px solid #fff;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div class=\"row\">\n\n\n    <h2>{{user.name}}</h2>\n\n\n    <div class=\"col-md-12 window-div\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Username: {{user.username}}</li>\n        <li class=\"list-group-item\">Email: {{user.email}}</li>\n        <li class=\"list-group-item\">Type: {{user.usertype}}</li>\n      </ul>\n    </div>\n\n  </div>\n  <div class=\"row\">\n    <h4>Change Password:</h4>\n    <form (submit)=\"changePassword()\">\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input (keyup)=\"confirmPass()\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Confirm Password</label>\n        <input (keyup)=\"confirmPass()\" type=\"password\" [(ngModel)]=\"cpassword\" name=\"cpassword\" class=\"form-control\">\n      </div>\n      <div *ngIf=\"!checkP\" class=\"warn\"><label>Passwords don't match!</label></div>\n      <input [disabled]=\"!check||!checkP\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, usersService) {
        this.authService = authService;
        this.router = router;
        this.usersService = usersService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            return false;
        });
        this.checkP = true;
        this.check = false;
    };
    ProfileComponent.prototype.confirmPass = function () {
        if (this.password == this.cpassword) {
            this.checkP = true;
        }
        else {
            this.checkP = false;
        }
        if (this.password == "" && this.cpassword == "") {
            this.check = false;
        }
        else {
            this.check = true;
        }
    };
    ProfileComponent.prototype.changePassword = function () {
        this.usersService.resetPassword(this.user.username, this.password).subscribe(function (data) {
            console.log(data);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _c || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".warn{\r\n    margin-top: -11px;\r\n    margin-bottom: 15px;\r\n    margin-left: 2px;\r\n    color:rgba(255, 0,0, 0.6);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-md-8\">\n        <h2 class=\"page-header\"> Register </h2>\n        <flash-messages></flash-messages>\n        <form (submit)=\"onRegisterSubmit()\">\n            <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Username</label>\n                <input (keyup)=\"checkUserName()\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n            </div>\n            <div *ngIf=\"check\" class=\"warn\"><label>Username already taken!</label></div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input (keyup)=\"confirmPass()\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>Confirm Password</label>\n                <input (keyup)=\"confirmPass()\" type=\"password\" [(ngModel)]=\"cpassword\" name=\"cpassword\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label>User Type</label>\n                <select [(ngModel)]=\"usertype\" name=\"usertype\" class=\"form-control\">\n                <option value=\"admin\">Admin</option>\n                <option value=\"user\">User</option>\n                </select>\n            </div>\n            <div *ngIf=\"!checkP\" class=\"warn\"><label>Passwords don't match!</label></div>\n            <input [disabled]=\"check||!checkP\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        </form>\n    </div>\n    <div class=\"col-md-4\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.authService.loggedIn()) {
            //this.router.navigate(['summary']);
        }
        this.checkP = true;
    };
    RegisterComponent.prototype.confirmPass = function () {
        if (this.password === this.cpassword) {
            this.checkP = true;
            return true;
        }
        else {
            this.checkP = false;
            return false;
        }
    };
    RegisterComponent.prototype.checkUserName = function () {
        var _this = this;
        var user = {
            username: this.username,
        };
        this.authService.findUser(user).subscribe(function (data) {
            if (data.success) {
                _this.check = true;
                return true;
            }
            else {
                _this.check = false;
                return false;
            }
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            requestusertype: this.usertype
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.vaidateEmail(user.email)) {
            this.flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.sucess) {
                _this.flashMessagesService.show('Sucessfully registered!', { cssClass: 'alert-sucess', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show('Something went wrong!!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/barchart/barchart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/barchart/barchart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <canvas #graphcanvas2 class=\"chartjs\" width=\"\" height=\"\">\n    </canvas>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/shared/barchart/barchart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarchartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarchartComponent = /** @class */ (function () {
    function BarchartComponent() {
    }
    BarchartComponent.prototype.ngOnInit = function () {
    };
    BarchartComponent.prototype.ngOnChanges = function () {
        if (this.labels && this.data) {
            this.draw();
        }
    };
    BarchartComponent.prototype.ngAfterViewInit = function () {
        this.draw();
    };
    BarchartComponent.prototype.draw = function () {
        if (this.mychart) {
            this.mychart.destroy();
        }
        var ctx = this.mycanvas2.nativeElement.getContext('2d');
        this.mychart = new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: [
                    {
                        label: "No of Errors",
                        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                        data: this.data
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'User Errors'
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                min: 0,
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('graphcanvas2'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], BarchartComponent.prototype, "mycanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BarchartComponent.prototype, "labels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BarchartComponent.prototype, "data", void 0);
    BarchartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-barchart',
            template: __webpack_require__("../../../../../src/app/components/shared/barchart/barchart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/barchart/barchart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarchartComponent);
    return BarchartComponent;
    var _a;
}());

//# sourceMappingURL=barchart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/linechart/linechart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/linechart/linechart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <canvas #graphcanvas class=\"chartjs\" width=\"\" height=\"75\">\n    </canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/linechart/linechart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinechartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinechartComponent = /** @class */ (function () {
    function LinechartComponent() {
    }
    LinechartComponent.prototype.ngOnChanges = function () {
        console.log(this.dataSet);
        if (this.labelY && this.dataSet) {
            if (this.dataSet.length) {
                this.draw();
            }
        }
    };
    LinechartComponent.prototype.ngOnInit = function () {
        //console.log(this.dataSet.length);
    };
    LinechartComponent.prototype.ngAfterViewInit = function () {
    };
    LinechartComponent.prototype.draw = function () {
        if (this.mychart) {
            this.mychart.destroy();
        }
        var ctx = this.mycanvas.nativeElement.getContext('2d');
        this.mychart = new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx, { type: 'line',
            data: {
                labels: this.labels,
                datasets: this.dataSet
            },
            options: {
                responsive: true,
                elements: {
                    line: {
                        tension: 0 // disables bezier curves
                    }
                },
                scales: {
                    xAxes: [{
                            type: "time",
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Time'
                            },
                            ticks: {
                                major: {
                                    fontStyle: "bold",
                                    fontColor: "#FF0000"
                                }
                            }
                        }],
                    yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: this.labelY
                            },
                            ticks: {
                                min: 0,
                                beginAtZero: true,
                                stepSize: 1 // if i use this it always set it '1', which look very awkward if it have high value  e.g. '100'.
                            }
                        }]
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('graphcanvas'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], LinechartComponent.prototype, "mycanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LinechartComponent.prototype, "labelY", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LinechartComponent.prototype, "dataSet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LinechartComponent.prototype, "labels", void 0);
    LinechartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-linechart',
            template: __webpack_require__("../../../../../src/app/components/shared/linechart/linechart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/linechart/linechart.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], LinechartComponent);
    return LinechartComponent;
    var _a;
}());

//# sourceMappingURL=linechart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/scatterchart/scatterchart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/scatterchart/scatterchart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <canvas #graphcanvas3 class=\"chartjs\" width=\"\" height=\"\">\n    </canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/scatterchart/scatterchart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterchartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScatterchartComponent = /** @class */ (function () {
    function ScatterchartComponent() {
    }
    ScatterchartComponent.prototype.ngOnChanges = function () {
        if (this.yLabels && this.xLabels && this.dataSet1 && this.dataSet2) {
            this.draw();
        }
        //setTimeout(()=>{this.draw();},500);
    };
    ScatterchartComponent.prototype.ngOnInit = function () { };
    ScatterchartComponent.prototype.draw = function () {
        if (this.mychart) {
            this.mychart.destroy();
        }
        var ctx = this.mycanvas3.nativeElement.getContext('2d');
        var chartColors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(231,233,237)'
        };
        this.mychart = new __WEBPACK_IMPORTED_MODULE_1_chart_js___default.a(ctx, {
            type: 'line',
            data: {
                xLabels: this.xLabels,
                yLabels: this.yLabels,
                datasets: [{
                        label: "Transaction Errors",
                        data: this.dataSet1,
                        fill: false,
                        showLine: false,
                        borderColor: chartColors.red,
                        backgroundColor: chartColors.red
                    }, {
                        label: "Other Errors",
                        data: this.dataSet2,
                        fill: false,
                        showLine: false,
                        borderColor: chartColors.blue,
                        backgroundColor: chartColors.blue
                    }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Error Timeline'
                },
                scales: {
                    xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Time'
                            },
                            ticks: {
                                min: 0,
                                beginAtZero: true,
                            }
                        }],
                    yAxes: [{
                            type: 'category',
                            position: 'left',
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Error'
                            },
                            ticks: {}
                        }]
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('graphcanvas3'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ScatterchartComponent.prototype, "mycanvas3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ScatterchartComponent.prototype, "yLabels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ScatterchartComponent.prototype, "xLabels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ScatterchartComponent.prototype, "dataSet1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ScatterchartComponent.prototype, "dataSet2", void 0);
    ScatterchartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scatterchart',
            template: __webpack_require__("../../../../../src/app/components/shared/scatterchart/scatterchart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/scatterchart/scatterchart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScatterchartComponent);
    return ScatterchartComponent;
    var _a;
}());

//# sourceMappingURL=scatterchart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/transactions-view/transactions-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".well-format{\r\n    background-color: #ffffff;\r\n    margin-left:14px;\r\n    padding:10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/transactions-view/transactions-view.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <h1>Transactions</h1>\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <h4>Number of successful transactions: {{successTransactions}}</h4>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let transactionType of transactionsByType\">{{transactionType.type}}s : {{transactionType.count}}</li>\n      </ul>\n    </div>\n    <div class=\"col-md-2\">\n    </div>  \n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10\"><app-linechart [dataSet]=\"dataSetf\" [labelY]=\"labelY1\"></app-linechart></div>\n  </div>\n  <div class=\"row\">\n  \n</div>\n  <div class=\"row\">\n      <div class=\"col-md-10\">\n        <h4>Total Transaction Value: {{totalTAmount}} </h4>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let transactionType of transactionsByType\">{{transactionType.type}}s : {{transactionType.amount}}</li>\n        </ul>\n      </div>\n      <div class=\"col-md-2\">\n   \n      </div>  \n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-10 well well-format\">\n            <table class=\"table table-hover\">\n                <thead>\n                  <tr>\n                    <th>Type</th>\n                    <th>Time</th>\n                    <th>Total Value</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let tValue of tValuesByTime\">\n                    <td>{{tValue.type}}</td>\n                    <td>{{tValue.hour}}:00</td>\n                    <td>{{tValue.total}}</td>\n                  </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"col-md-2\">\n     \n        </div>  \n      </div>\n\n \n  "

/***/ }),

/***/ "../../../../../src/app/components/transactions-view/transactions-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var DataSet = /** @class */ (function () {
    function DataSet(label, borderColor, fill, data) {
        this.label = label;
        this.borderColor = borderColor;
        this.fill = fill;
        this.data = data;
    }
    return DataSet;
}());
var TransactionsViewComponent = /** @class */ (function () {
    function TransactionsViewComponent(http, logService) {
        this.http = http;
        this.logService = logService;
        this.chartOptions = {
            responsive: true,
            elements: {
                line: {
                    tension: 0 // disables bezier curves
                }
            },
            scales: {
                xAxes: [{
                        type: "time",
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Time'
                        },
                        ticks: {
                            major: {
                                fontStyle: "bold",
                                fontColor: "#FF0000"
                            }
                        }
                    }],
                yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Sex"
                        },
                        ticks: {
                            min: 0,
                            beginAtZero: true,
                            stepSize: 1 // if i use this it always set it '1', which look very awkward if it have high value  e.g. '100'.
                        }
                    }]
            }
        };
        this.dataSet1 = [];
        this.dataSetf = [];
        this.dataSet = [];
        this.labelY1 = "No of transactions";
        //test1:Array<any>;
        this.colors = ["#8e5ea2", "#3cba9f", "#e8c3b9", "#cac3b1"];
    }
    TransactionsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logService.currentLog.subscribe(function (currentLog) {
            _this.dataSet = [];
            _this.dataSetf = [];
            _this.dataSet1 = [];
            _this.selLogName = currentLog;
            _this.logService.getLogInfo(currentLog).subscribe(function (data) {
                _this.logDateOFrom = new Date(data[0].timeValidFrom);
                _this.logDateOTo = new Date(data[0].timeValidTo);
                _this.logService.getTransactionSummaryByType(currentLog).subscribe(function (data) {
                    _this.transactionsByType = data;
                    _this.logService.getTransactionTimesGraph(currentLog).subscribe(function (data) {
                        _this.ttgraph = data;
                        _this.totalt = [];
                        for (var k = _this.logDateOFrom.getHours(), i = 0; i < (_this.logDateOTo.getTime() - _this.logDateOFrom.getTime()) / 3600000; i++, k++) {
                            var lo = new Point(new Date(_this.logDateOFrom.getFullYear(), _this.logDateOFrom.getMonth(), _this.logDateOFrom.getDate(), k, 0, 1), 0);
                            _this.totalt.push(lo);
                        }
                        for (var i = 0; i < _this.ttgraph.length; i++) {
                            for (var z = 0; z < _this.totalt.length; z++) {
                                if (_this.totalt[z].x.getHours() == _this.ttgraph[i].x) {
                                    _this.totalt[z].y = _this.ttgraph[i].y;
                                    break;
                                }
                            }
                        }
                        _this.dataSet = [];
                        _this.dataSet.push(new DataSet("Total Transactions", "#3e95cd", false, _this.totalt));
                        _this.logService.getTransactionTypeGraph(currentLog).subscribe(function (data) {
                            _this.wtttgraph = [];
                            _this.dtttgraph = [];
                            _this.btttgraph = [];
                            _this.dataSet1 = [];
                            _this.testgraph = [];
                            //this.test1=this.transactionsByType;
                            for (var k = _this.logDateOFrom.getHours(), i = 0; i < (_this.logDateOTo.getTime() - _this.logDateOFrom.getTime()) / 3600000; i++, k++) {
                                var point1 = new Point(new Date(_this.logDateOFrom.getFullYear(), _this.logDateOFrom.getMonth(), _this.logDateOFrom.getDate(), k, 0, 1), 0);
                                _this.testgraph.push(point1);
                            }
                            for (var a = 0; a < _this.transactionsByType.length; a++) {
                                var gggraph = [];
                                for (var k = _this.logDateOFrom.getHours(), i = 0; i < (_this.logDateOTo.getTime() - _this.logDateOFrom.getTime()) / 3600000; i++, k++) {
                                    var point1 = new Point(new Date(_this.logDateOFrom.getFullYear(), _this.logDateOFrom.getMonth(), _this.logDateOFrom.getDate(), k, 0, 1), 0);
                                    gggraph.push(point1);
                                }
                                for (var b = 0; b < data.length; b++) {
                                    if (_this.transactionsByType[a].type == data[b].type) {
                                        for (var z = 0; z < gggraph.length; z++) {
                                            if (gggraph[z].x.getHours() == data[b].x) {
                                                gggraph[z].y = data[b].y;
                                                break;
                                            }
                                        }
                                    }
                                }
                                _this.dataSet1.push(new DataSet(_this.transactionsByType[a].type, _this.colors[a], false, gggraph));
                            }
                            _this.dataSetf = _this.dataSet.concat(_this.dataSet1);
                            /**
                           for(var k=this.logDateOFrom.getHours(),i=0;i<(this.logDateOTo.getTime()-this.logDateOFrom.getTime())/3600000;i++,k++){
                             var point1=new Point(new Date(this.logDateOFrom.getFullYear(),this.logDateOFrom.getMonth(),this.logDateOFrom.getDate(),k,0,1),0);
                             var point2=new Point(new Date(this.logDateOFrom.getFullYear(),this.logDateOFrom.getMonth(),this.logDateOFrom.getDate(),k,0,1),0);
                             var point3=new Point(new Date(this.logDateOFrom.getFullYear(),this.logDateOFrom.getMonth(),this.logDateOFrom.getDate(),k,0,1),0);
                             this.wtttgraph.push(point1);
                             this.dtttgraph.push(point2);
                             this.btttgraph.push(point3);
                           }
                           for(var i=0;i<data.length;i++){
                             for(var z=0;z<this.wtttgraph.length;z++){
                               if(this.wtttgraph[z].x.getHours()==data[i].x){
                                 //this.totalt[z].y=this.ttgraph[i].y;
                                 if(data[i].type=="Withdrawl"){
                                   this.wtttgraph[z].y=data[i].y;
                                 }
                                 else if(data[i].type=="Deposit"){
                                   this.dtttgraph[z].y=data[i].y;
                                 }
                                 else{
                                   this.btttgraph[z].y=data[i].y;
                                 }
                                 break;
                               }
                             }
                           }
                           this.dataSet.push(new DataSet("Withdrawls","#8e5ea2",false,this.wtttgraph));
                           
                           this.dataSet.push(new DataSet("Deposits","#3cba9f",false,this.dtttgraph));
                           
                           this.dataSet.push(new DataSet("Bill Payments","#e8c3b9",false,this.btttgraph));
                           */
                        });
                    });
                    _this.logService.getTransactionTypeGraph(currentLog).subscribe(function (data) {
                        _this.wtttgraph = [];
                        _this.dtttgraph = [];
                        _this.btttgraph = [];
                        _this.dataSet1 = [];
                        _this.testgraph = [];
                        //this.test1=this.transactionsByType;
                        for (var k = _this.logDateOFrom.getHours(), i = 0; i < (_this.logDateOTo.getTime() - _this.logDateOFrom.getTime()) / 3600000; i++, k++) {
                            var point1 = new Point(new Date(_this.logDateOFrom.getFullYear(), _this.logDateOFrom.getMonth(), _this.logDateOFrom.getDate(), k, 0, 1), 0);
                            _this.testgraph.push(point1);
                        }
                        for (var a = 0; a < _this.transactionsByType.length; a++) {
                            var gggraph = [];
                            for (var k = _this.logDateOFrom.getHours(), i = 0; i < (_this.logDateOTo.getTime() - _this.logDateOFrom.getTime()) / 3600000; i++, k++) {
                                var point1 = new Point(new Date(_this.logDateOFrom.getFullYear(), _this.logDateOFrom.getMonth(), _this.logDateOFrom.getDate(), k, 0, 1), 0);
                                gggraph.push(point1);
                            }
                            for (var b = 0; b < data.length; b++) {
                                if (_this.transactionsByType[a].type == data[b].type) {
                                    for (var z = 0; z < gggraph.length; z++) {
                                        if (gggraph[z].x.getHours() == data[b].x) {
                                            gggraph[z].y = data[b].y;
                                            break;
                                        }
                                    }
                                }
                            }
                            _this.dataSet1.push(new DataSet(_this.transactionsByType[a].type, _this.colors[a], false, gggraph));
                        }
                        _this.dataSetf = _this.dataSet.concat(_this.dataSet1);
                        /**
                       for(var k=this.logDateOFrom.getHours(),i=0;i<(this.logDateOTo.getTime()-this.logDateOFrom.getTime())/3600000;i++,k++){
                         var point1=new Point(new Date(this.logDateOFrom.getFullYear(),this.logDateOFrom.getMonth(),this.logDateOFrom.getDate(),k,0,1),0);
                         var point2=new Point(new Date(this.logDateOFrom.getFullYear(),this.logDateOFrom.getMonth(),this.logDateOFrom.getDate(),k,0,1),0);
                         var point3=new Point(new Date(this.logDateOFrom.getFullYear(),this.logDateOFrom.getMonth(),this.logDateOFrom.getDate(),k,0,1),0);
                         this.wtttgraph.push(point1);
                         this.dtttgraph.push(point2);
                         this.btttgraph.push(point3);
                       }
                       for(var i=0;i<data.length;i++){
                         for(var z=0;z<this.wtttgraph.length;z++){
                           if(this.wtttgraph[z].x.getHours()==data[i].x){
                             //this.totalt[z].y=this.ttgraph[i].y;
                             if(data[i].type=="Withdrawl"){
                               this.wtttgraph[z].y=data[i].y;
                             }
                             else if(data[i].type=="Deposit"){
                               this.dtttgraph[z].y=data[i].y;
                             }
                             else{
                               this.btttgraph[z].y=data[i].y;
                             }
                             break;
                           }
                         }
                       }
                       this.dataSet.push(new DataSet("Withdrawls","#8e5ea2",false,this.wtttgraph));
                       
                       this.dataSet.push(new DataSet("Deposits","#3cba9f",false,this.dtttgraph));
                       
                       this.dataSet.push(new DataSet("Bill Payments","#e8c3b9",false,this.btttgraph));
                       */
                    });
                });
            });
            _this.logService.getNoSuccessTransactions(currentLog).subscribe(function (data) {
                _this.successTransactions = data[0].count;
                _this.totalTAmount = data[0].amount;
            });
            _this.logService.getTransactionValuesByTime(currentLog).subscribe(function (data) {
                _this.tValuesByTime = data;
                /**code here */
            });
        });
    };
    TransactionsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transactions-view',
            template: __webpack_require__("../../../../../src/app/components/transactions-view/transactions-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/transactions-view/transactions-view.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */]) === "function" && _b || Object])
    ], TransactionsViewComponent);
    return TransactionsViewComponent;
    var _a, _b;
}());

//# sourceMappingURL=transactions-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/upload-log-file/upload-log-file.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/upload-log-file/upload-log-file.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Upload Parsed Log File</h2>\n<input type=\"file\" accept=\"text/plain\" multiple (change)=\"openFile($event)\">\n\n<button class=\"btn-primary\" (click)=\"upload()\">Upload</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/upload-log-file/upload-log-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadLogFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadLogFileComponent = /** @class */ (function () {
    function UploadLogFileComponent(http, logService) {
        this.http = http;
        this.logService = logService;
    }
    UploadLogFileComponent.prototype.ngOnInit = function () {
        this.filesToUpload = [];
    };
    UploadLogFileComponent.prototype.openFile = function (event) {
        this.input = event.target;
    };
    UploadLogFileComponent.prototype.upload = function () {
        var _this = this;
        var _loop_1 = function () {
            var reader = new FileReader();
            reader.onload = function () {
                // this 'text' is the content of the file
                var text = reader.result;
                _this.logService.saveLog(text).subscribe(function (data) {
                    console.log(data);
                });
            };
            reader.readAsText(this_1.input.files[index]);
        };
        var this_1 = this;
        for (var index = 0; index < this.input.files.length; index++) {
            _loop_1();
        }
        ;
    };
    UploadLogFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-log-file',
            template: __webpack_require__("../../../../../src/app/components/upload-log-file/upload-log-file.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/upload-log-file/upload-log-file.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_log_service__["a" /* LogService */]) === "function" && _b || Object])
    ], UploadLogFileComponent);
    return UploadLogFileComponent;
    var _a, _b;
}());

//# sourceMappingURL=upload-log-file.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/adminauth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminauthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminauthGuard = /** @class */ (function () {
    function AdminauthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminauthGuard.prototype.canActivate = function () {
        var a = this.authService.isAdmin();
        if (this.authService.isAdmin() && this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/home']);
            return false;
        }
    };
    AdminauthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AdminauthGuard);
    return AdminauthGuard;
    var _a, _b;
}());

//# sourceMappingURL=adminauth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/auth-layout/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\r\n    background-color: #f8f8f8;\r\n    margin-bottom:0px;\r\n}\r\n\r\n.btn-default{\r\n    background-color: #f8f8f8;\r\n    border-color: #f8f8f8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/auth-layout/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/home']\">DEEPL</a>\r\n      </div>\r\n      <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a *ngIf=\"!authService.loggedIn()\" class=\"btn btn-default\" [routerLink]=\"['/register']\">Register</a></li>\r\n          <li><a *ngIf=\"!authService.loggedIn()\" class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a></li>\r\n          <li><a *ngIf=\"authService.loggedIn()\" class=\"btn btn-default\" [routerLink]=\"['/summary']\">Dashboard</a></li>\r\n        </ul>\r\n      </div>\r\n      <!--/.nav-collapse -->\r\n    </div>\r\n    <!--/.container-fluid -->\r\n  </nav>\r\n\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/layouts/auth-layout/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService) {
        this.authService = authService;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('root'),
        __metadata("design:type", Object)
    ], AuthComponent.prototype, "root", void 0);
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/layouts/auth-layout/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/auth-layout/auth.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AuthComponent);
    return AuthComponent;
    var _a;
}());

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/dash-layout/dash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fullheight{\r\n    height:100%;\r\n}\r\n.full-vh{\r\n    height:100vh;\r\n}\r\n.side-bar{\r\n    background-color: #252528;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-top:15px;\r\n}\r\n\r\n.nav-pills > li > a {\r\n    color: rgba(255,255,255 ,.60);\r\n    background-color: #252528;\r\n}\r\n\r\n.nav > li > a:hover, .nav > li > a:focus{\r\n    \r\n    color: rgba(255,255,255 ,.87);\r\n    background-color: #252528;\r\n    \r\n}\r\n\r\n.nav > li > a:hover, .nav > li > a:active{\r\n\r\n    color: rgba(255,255,255 ,1);\r\n}\r\n\r\n.background-body{\r\n    background-color: #f5f5f5 !important;\r\n}\r\n\r\n.dash-content{\r\n    padding: 5px 30px 30px 30px !important;\r\n}\r\n\r\n.drop-down-padding{\r\n    padding-top: 8px;\r\n}\r\n\r\n.navbar{\r\n    margin-bottom: 0px !important;\r\n    background-color: #fff;\r\n    color: #333;\r\n    border: 0px solid rgba(32, 55, 252, 0.00);\r\n    border-radius: 0px;\r\n}\r\n\r\n.scrolly{\r\n    margin: 0 auto; \r\n    overflow:scroll; \r\n    height: calc(100vh - 50px);\r\n}\r\n\r\n.fix-scrolly{\r\n    height: calc(100vh - 200px)!important;\r\n}\r\n\r\n.topbar{\r\n    padding: 0px 30px;\r\n}\r\n\r\n.body-padding{\r\n    padding-left:20px;\r\n    padding-bottom:20px;\r\n}\r\n\r\n.full-vh-calc{\r\n    height: calc(100vh - 50px);\r\n}\r\n\r\n\r\n.navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand{\r\n    margin-left:0px;\r\n    color:#000;\r\n}\r\n\r\n.container-fluid{\r\n}\r\n\r\n.side-bartop{\r\n    background-color: #2980b9;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.nav-pills > li > a {\r\n    color: rgba(255,255,255 ,.60);\r\n    background-color: #252528;\r\n}\r\n\r\n.logselect{\r\n    background-color: #fff;\r\n    padding-right: 15px;\r\n    width: 100%;\r\n    z-index: 999;\r\n    \r\n}\r\n\r\n.sidebar{\r\n    position: fixed;\r\n    top: 0px;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1000;\r\n    display: block;\r\n    padding: 0px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    background-color: #252528;\r\n    border-right: 1px solid #eee;\r\n}\r\n\r\n.brand{\r\n    background-color: #35353C!important;\r\n    padding-top: 5px!important;\r\n    padding-left: 4px!important;\r\n    padding:0px;\r\n    border-radius: 0px;\r\n    color:white!important;\r\n    font-size: 18px;\r\n    letter-spacing: 2px;\r\n    margin-bottom: 15px;\r\n    height: 50px;\r\n}\r\n\r\n.p-0{\r\n    padding:0px;\r\n}\r\n\r\n.p-10{\r\n    padding:10px;\r\n}\r\n\r\n.navbar-btn{\r\n   \r\n    \r\n}\r\n.btn{\r\n    padding: 6px 8px;\r\n}\r\n.btn-default{\r\n    color:#3443f6 !important;\r\n    font-weight: 500;\r\n    border-color: #fff;\r\n    outline: none !important;\r\n}\r\n\r\nlabel{\r\n    font-weight: 500 !important;\r\n    color: rgba(0, 0, 0, 0.44) !important;\r\n}\r\n\r\n.form-control{\r\n    margin-bottom:12px;\r\n}\r\n\r\n.inline{\r\n    display: inline-block;\r\n    width:40%;\r\n    margin: 0px!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/dash-layout/dash.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-2 sidebar\">\r\n        <ul class=\"nav nav-pills nav-stacked fullheight\">\r\n            <li><a class=\"brand\" [routerLink]=\"['/']\"><img src=\"assets/logo_deepl.png\" alt=\"logos\" height=\"42\"></a></li>\r\n            <li><a [routerLink]=\"['/summary']\">Summary <div class=\"pull-right\" style=\"margin-right:10px;\"> <img src=\"assets/activity.svg\" height=\"18px\"> </div></a>                </li>\r\n            <li><a [routerLink]=\"['/transactionsview']\">Transactions<div class=\"pull-right\" style=\"margin-right:10px;\"> <img src=\"assets/trending-up.svg\" height=\"18px\"> </div></a></li>\r\n            <li><a [routerLink]=\"['/errorsview']\">Errors<div class=\"pull-right\" style=\"margin-right:10px;\"> <img src=\"assets/alert-triangle.svg\" height=\"18px\"> </div></a></li>\r\n            <li *ngIf=\"isAdmin\"><a [routerLink]=\"['/manageusers']\">Manage Users<div class=\"pull-right\" style=\"margin-right:10px;\"> <img src=\"assets/users.svg\" height=\"18px\"> </div></a></li>\r\n            <li *ngIf=\"isAdmin\"><a [routerLink]=\"['/managenotifications']\">Manage Notifications<div class=\"pull-right\" style=\"margin-right:10px;\"> <img src=\"assets/bell.svg\" height=\"18px\"> </div></a></li>\r\n            <li *ngIf=\"isAdmin\"><a [routerLink]=\"['/uploadlog']\">Upload Log Files<div class=\"pull-right\" style=\"margin-right:10px;\"> <img src=\"assets/upload.svg\" height=\"18px\"> </div></a></li>\r\n\r\n        </ul>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 p-0\">\r\n\r\n        <!--<div class=\"col-md-6 drop-down-padding\">\r\n                    <select [(ngModel)]=\"selLogName\" class=\"form-control\" (ngModelChange)=\"changeLog()\">\r\n                  <option *ngFor=\"let log of logNames\">\r\n                    {{ log['logName'] }}\r\n                  </option>\r\n                </select>-->\r\n\r\n        <div class=\"topbar\">\r\n            <label>Selected Log : </label>\r\n\r\n            <button class=\"btn btn-default navbar-btn\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\"\r\n                aria-controls=\"navbarToggleExternalContent\" (click)=\"fixui()\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">   \r\n                {{selLogName}} <img src=\"assets/arrow-down-circle.svg\" height=\"18px\"> \r\n                      </button>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\"><img src=\"assets/user.svg\" height=\"16px\"> </a></li>\r\n                <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" [routerLink]=\"['/home']\"><img src=\"assets/log-out.svg\" height=\"18px\"></a></li>\r\n            </ul>\r\n            <div class=\"collapse logselect\" id=\"navbarToggleExternalContent\">\r\n\r\n                <div class=\"col-6 inline\">\r\n                    <label><img src=\"assets/map-pin.svg\" height=\"16px\">Location:</label>\r\n                    <select [(ngModel)]=\"selLocation\" (ngModelChange)=\"changeLogList()\" class=\"form-control\">\r\n                                                                    <option>Any</option>\r\n                                                                    <option *ngFor=\"let log of logLocations\">\r\n                                                                            {{ log['location'] }}\r\n                                                                          </option>\r\n                                                              </select>\r\n\r\n                </div>\r\n                <div class=\"col-6 inline\">\r\n                    <label><img src=\"assets/calendar.svg\" height=\"16px\"> Date:</label>\r\n\r\n                    <input type=\"date\" [(ngModel)]=\"selDate\" (ngModelChange)=\"changeLogList()\" class=\"form-control\">\r\n                </div>\r\n\r\n                <div style=\"margin-bottom: 20px;\">\r\n                    <label><img src=\"assets/file-text.svg\" height=\"16px\"> Log Name:</label>\r\n                    <select [(ngModel)]=\"selLogName\" class=\"form-control\" (ngModelChange)=\"changeLog()\">\r\n                                                                        <option *ngFor=\"let log of logNames\">\r\n                                                                          {{ log['logName'] }}\r\n                                                                        </option>\r\n                                                                      </select>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div id=\"ro\" class=\"dash-content fullheight background-body scrolly body-padding drop-down\">\r\n            <router-outlet></router-outlet>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/dash-layout/dash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashComponent = /** @class */ (function () {
    function DashComponent(authService, router, flashMessagesService, logService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.logService = logService;
        this.selLogName = "test";
        this.selLocation = "Any";
        this.isAdmin = false;
    }
    DashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = this.authService.isAdmin();
        this.username = this.authService.getUserName();
        //console.log(this.username);
        this.logService.getLogNames().subscribe(function (data) {
            _this.logNames = data.log;
        });
        this.logService.currentLog.subscribe(function (currentLog) {
            _this.selLogName = currentLog;
        });
        this.logService.getLogLocations().subscribe(function (data) {
            _this.logLocations = data.log;
        });
    };
    DashComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/home']);
        return false;
    };
    DashComponent.prototype.changeLog = function () {
        this.logService.changeLog(this.selLogName);
    };
    DashComponent.prototype.changeLogList = function () {
        var _this = this;
        if (this.selLocation == "Any" && !this.selDate) {
            this.logService.getLogNames().subscribe(function (data) {
                _this.logNames = data.log;
                _this.changeSelLog();
            });
        }
        else if (this.selLocation == "Any" && this.selDate) {
            this.logService.getLogNamesByDate(this.selDate).subscribe(function (data) {
                _this.logNames = data;
                _this.changeSelLog();
            });
        }
        else if (this.selLocation != "Any" && !this.selDate) {
            this.logService.getLogNamesByLocation(this.selLocation).subscribe(function (data) {
                _this.logNames = data;
                _this.changeSelLog();
            });
        }
        else {
            this.logService.getLogNamesByLocationDate(this.selDate, this.selLocation).subscribe(function (data) {
                _this.logNames = data;
                _this.changeSelLog();
            });
        }
    };
    DashComponent.prototype.changeSelLog = function () {
        this.selLogName = this.logNames[0]['logName'];
        this.changeLog();
    };
    DashComponent.prototype.fixui = function () {
        var elem = document.getElementById("ro");
        elem.classList.toggle("fix-scrolly");
        console.log("dsadasdassdasd");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('root'),
        __metadata("design:type", Object)
    ], DashComponent.prototype, "root", void 0);
    DashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/layouts/dash-layout/dash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/dash-layout/dash.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_log_service__["a" /* LogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_log_service__["a" /* LogService */]) === "function" && _d || Object])
    ], DashComponent);
    return DashComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=dash.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.findUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/finduser', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.user = localStorage.getItem('user');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.isAdmin = function () {
        this.loadToken();
        var tasd = JSON.parse(this.user);
        if (tasd.usertype == "admin") {
            return true;
        }
        else
            return false;
    };
    AuthService.prototype.getUserName = function () {
        this.loadToken();
        var tasd = JSON.parse(this.user);
        return tasd.name;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogService = /** @class */ (function () {
    function LogService(http) {
        this.http = http;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]("ATM00120170101");
        this.currentLog = this.messageSource.asObservable();
    }
    LogService.prototype.changeLog = function (logName) {
        this.messageSource.next(logName);
    };
    LogService.prototype.saveLog = function (text) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "text": text };
        return this.http.post('logdata/savelog', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getLogNames = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get('logdata/lognames', { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getLogLocations = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get('logdata/locations', { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getLogNamesByLocation = function (location) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "location": location };
        return this.http.post('logdata/lognamesbylocation', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getLogNamesByLocationDate = function (date, location) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "date": date, "location": location };
        return this.http.post('logdata/lognamesbylocationdate', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getLogNamesByDate = function (date) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "date": date };
        return this.http.post('logdata/lognamesbydate', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getNoSuccessTransactions = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/nosucesstransactions', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getNoFailedTransactions = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/nofailedtransactions', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getTransactionSummaryByType = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/transactionsummary', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getTransactionTimesGraph = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/transactiontimesgraph', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getNoUserErrors = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/nousererrors', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getNoTechnicalErrors = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/notechnicalerrors', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getUpDown = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/updown', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getLogInfo = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/loginfo', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getTransactionTypeGraph = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/transactiontypegraph', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getUserErrorPoints = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/usererrorpoints', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getNoTransactionTechnicalErrors = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/notechnicaltransactionerrors', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getTransactionTechnicalErrors = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/technicaltransactionerrors', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getOtherTechnicalErrors = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/othertechnicalerrors', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService.prototype.getTransactionValuesByTime = function (logName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = { "logName": logName };
        return this.http.post('logdata/transactionamountsbytime', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    LogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], LogService);
    return LogService;
    var _a;
}());

//# sourceMappingURL=log.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    UsersService.prototype.getUnApprovedUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/unapprovedusers', { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.getApprovedUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/approvedusers', { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.approveUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var body = { "username": user.username, "usertype": user.requestusertype };
        return this.http.post('users/approveuser', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.resetPassword = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var body = { "username": username, "password": password };
        return this.http.post('users/resetpassword', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.removeUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var body = { "username": user.username };
        return this.http.post('users/deleteuser', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.sendNotification = function (title, nbody) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var body = { "title": title, "body": nbody };
        return this.http.post('notifications/sendnotifications', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.getNotifications = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('notifications/getnotifications', { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.setNotificationTime = function (hour, min) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var body = { "hour": hour, "min": min };
        return this.http.post('notificationsettings/setnotificationtime', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.getNotificationTime = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var body = {};
        return this.http.post('notificationsettings/getnotificationtime', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], UsersService);
    return UsersService;
    var _a;
}());

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.vaidateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map