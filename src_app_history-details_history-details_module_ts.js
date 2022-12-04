(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_history-details_history-details_module_ts"],{

/***/ 54437:
/*!*******************************************************************!*\
  !*** ./src/app/history-details/history-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryDetailsPageRoutingModule": () => (/* binding */ HistoryDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _history_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-details.page */ 62816);




const routes = [
    {
        path: '',
        component: _history_details_page__WEBPACK_IMPORTED_MODULE_0__.HistoryDetailsPage
    }
];
let HistoryDetailsPageRoutingModule = class HistoryDetailsPageRoutingModule {
};
HistoryDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoryDetailsPageRoutingModule);



/***/ }),

/***/ 12013:
/*!***********************************************************!*\
  !*** ./src/app/history-details/history-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryDetailsPageModule": () => (/* binding */ HistoryDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _history_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-details-routing.module */ 54437);
/* harmony import */ var _history_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-details.page */ 62816);







let HistoryDetailsPageModule = class HistoryDetailsPageModule {
};
HistoryDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _history_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryDetailsPageRoutingModule
        ],
        declarations: [_history_details_page__WEBPACK_IMPORTED_MODULE_1__.HistoryDetailsPage]
    })
], HistoryDetailsPageModule);



/***/ }),

/***/ 62816:
/*!*********************************************************!*\
  !*** ./src/app/history-details/history-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryDetailsPage": () => (/* binding */ HistoryDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_history_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./history-details.page.html */ 8186);
/* harmony import */ var _history_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-details.page.scss */ 26752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);









let HistoryDetailsPage = class HistoryDetailsPage {
    constructor(router, loadingController, toastController, alertController, accessProviders, navController, activatedRoute, storage, navParamService) {
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.navParamService = navParamService;
        this.bid = 0;
        this.id = 0;
        this.orders = [];
        this.his = [];
        this.oid = this.navParamService.getOrderID();
        this.latitude = 0;
        this.longitude = 0;
    }
    ;
    ngOnInit() {
        console.log(this.oid);
        this.orders = [];
        return new Promise(resolve => {
            let body = {
                aksi: 'get_orders_details',
                oid: this.oid,
            };
            console.log(this.oid);
            this.accessProviders.postData(body, 'get_orders.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.user);
                    console.log(res.result);
                    this.user = res.user;
                    this.fname = this.user.first_name;
                    this.lname = this.user.last_name;
                    this.street = this.user.street;
                    this.barangay = this.user.barangay_name;
                    this.number = this.user.contact_number;
                    this.total = res.total;
                    for (let datas of res.result) {
                        this.orders.push(datas);
                    }
                    console.log(this.orders);
                }
                else {
                    console.log('x');
                }
            });
        });
    }
    ionViewWillEnter() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.did = this.datastorage.user_id;
            this.bid = this.datastorage.barangay_id;
            return new Promise(resolve => {
                let body = {
                    aksi: 'get_history_details',
                    oid: this.oid,
                    did: this.did,
                    bid: this.bid
                };
                console.log(this.oid);
                this.accessProviders.postData(body, 'get_orders.php').subscribe((res) => {
                    if (res.success == true) {
                        console.log(res.result);
                        for (let datas of res.result) {
                            this.his.push(datas);
                        }
                        console.log(this.his);
                    }
                    else {
                        console.log('x');
                    }
                });
            });
        });
    }
    back() {
        this.router.navigate(['panel-driver']);
    }
};
HistoryDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService }
];
HistoryDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-history-details',
        template: _raw_loader_history_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_history_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoryDetailsPage);



/***/ }),

/***/ 26752:
/*!***********************************************************!*\
  !*** ./src/app/history-details/history-details.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #3880ff;\n  color: white;\n}\nion-toolbar ion-segment-button {\n  color: #3880ff;\n}\nion-toolbar ion-button ion-icon {\n  color: white;\n}\nion-content {\n  --background-repeat: no-repeat;\n  --background-size: cover;\n  color: white;\n}\nion-content ion-col {\n  border: solid 1.5px black;\n  padding: 1.5px;\n}\nion-content ion-button {\n  --background:#3880ff;\n  color: black;\n}\nion-content ion-card {\n  padding-top: 1%;\n  padding-left: 1%;\n  padding-bottom: 1%;\n  color: black;\n  text-align: center;\n}\nion-content ion-card ion-card-subtitle {\n  color: #3880ff;\n}\nion-content ion-card ion-badge {\n  color: #3880ff;\n}\n.a {\n  padding-top: 1%;\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-bottom: 1%;\n  height: 50%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnktZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBQ1E7RUFDSSxZQUFBO0FBQ1o7QUFLSTtFQUVRLDhCQUFBO0VBQ0Esd0JBQUE7RUFFTCxZQUFBO0FBSlA7QUFLUTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtBQUpaO0FBTVE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFKWjtBQVFRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFOWjtBQU9ZO0VBQ0ksY0FBQTtBQUxoQjtBQU9ZO0VBQ0ksY0FBQTtBQUxoQjtBQVdJO0VBQ0ksZUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUloiLCJmaWxlIjoiaGlzdG9yeS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgIGNvbG9yIDp3aGl0ZTtcclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICBjb2xvcjojMzg4MGZmO1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4gICAgaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG5cclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxLjVweCBibGFjaztcclxuICAgICAgICAgICAgcGFkZGluZzogMS41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDojMzg4MGZmO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1iYWRnZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuYXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMSU7IFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ 8186:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history-details/history-details.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"back()\" class=\"backbtn\" >\n        <img src=\"../../assets/back.svg\"  />\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\">\n      <ion-icon fill=\"white\" name=\"notifications\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor=\"let his of his\">\n    <ion-label >\n      <br>\n      <b></b>{{his.pick}}<br>\n      <b></b>{{his.ship}}<br>\n      <br>\n      <h1>Status: {{his.decline}} {{his.deliver}}</h1>\n      <br>\n      <h1></h1>\n    </ion-label>\n  </ion-card>\n  \n  <br>\n  <ion-card>\n\n    <ion-label class=\"i\"> \n      ORDER ID: <b>{{oid}}</b> <br>\n    </ion-label>\n    <ion-label class=\"i\">\n    CUTOMER NAME: <b>{{fname}} {{lname}} </b> <br>\n    </ion-label>\n    <ion-label class=\"i\">\n      HOUSE NO./PUROK/SITIO: <b>{{street}}</b> <br>\n    </ion-label >\n    <ion-label class=\"i\">\n      BARANGAY: <b>{{barangay}}</b> <br>\n    </ion-label>\n    <ion-label class=\"i\">\n      CONTACT NO.: <b>{{number}}</b> <br>\n    </ion-label>\n    <br>\n    <br>\n    \n    <ion-grid *ngFor=\"let orders of orders\" >\n        <ion-row>\n          <ion-col size=\"3\">\n            <b>Items</b>\n          </ion-col>\n          <ion-col size=\"3\">\n            <b>Quantity</b>\n          </ion-col>\n          <ion-col size=\"3\">\n            <b>Price</b>\n          </ion-col>\n          <ion-col size=\"3\">\n            <b>Total Price</b>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\">\n            {{orders.product}}\n          </ion-col>\n          <ion-col size=\"3\">\n            {{orders.quantity}} \n          </ion-col>\n          <ion-col size=\"3\">\n            Php{{orders.price}}\n          </ion-col>\n          <ion-col size=\"3\" >\n            Php{{orders.price*orders.quantity}}\n          </ion-col>\n        </ion-row>\n      \n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"9\" class=\"ion-text-right\">\n         <b > Total Purchase</b>\n        </ion-col>\n        <ion-col size=\"3\">\n          <b>Php{{total}}</b>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n  \n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_history-details_history-details_module_ts.js.map