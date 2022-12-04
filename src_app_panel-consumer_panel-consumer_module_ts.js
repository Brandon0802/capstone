(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_panel-consumer_panel-consumer_module_ts"],{

/***/ 42355:
/*!*****************************************************************!*\
  !*** ./src/app/panel-consumer/panel-consumer-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelConsumerPageRoutingModule": () => (/* binding */ PanelConsumerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _panel_consumer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-consumer.page */ 2146);




const routes = [
    {
        path: '',
        component: _panel_consumer_page__WEBPACK_IMPORTED_MODULE_0__.PanelConsumerPage
    }
];
let PanelConsumerPageRoutingModule = class PanelConsumerPageRoutingModule {
};
PanelConsumerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PanelConsumerPageRoutingModule);



/***/ }),

/***/ 49525:
/*!*********************************************************!*\
  !*** ./src/app/panel-consumer/panel-consumer.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelConsumerPageModule": () => (/* binding */ PanelConsumerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _panel_consumer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-consumer-routing.module */ 42355);
/* harmony import */ var _panel_consumer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-consumer.page */ 2146);







let PanelConsumerPageModule = class PanelConsumerPageModule {
};
PanelConsumerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _panel_consumer_routing_module__WEBPACK_IMPORTED_MODULE_0__.PanelConsumerPageRoutingModule
        ],
        declarations: [_panel_consumer_page__WEBPACK_IMPORTED_MODULE_1__.PanelConsumerPage]
    })
], PanelConsumerPageModule);



/***/ }),

/***/ 2146:
/*!*******************************************************!*\
  !*** ./src/app/panel-consumer/panel-consumer.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelConsumerPage": () => (/* binding */ PanelConsumerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_panel_consumer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./panel-consumer.page.html */ 74389);
/* harmony import */ var _panel_consumer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-consumer.page.scss */ 6365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 75481);








let PanelConsumerPage = class PanelConsumerPage {
    constructor(router, loadingController, toastController, alertController, accessProviders, navController, storage) {
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.storage = storage;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.name = this.datastorage.first_name;
        });
    }
    logout() {
        this.storage.clear();
        this.navController.navigateRoot(['/main']);
    }
};
PanelConsumerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage }
];
PanelConsumerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-panel-consumer',
        template: _raw_loader_panel_consumer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_panel_consumer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PanelConsumerPage);



/***/ }),

/***/ 6365:
/*!*********************************************************!*\
  !*** ./src/app/panel-consumer/panel-consumer.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW5lbC1jb25zdW1lci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 74389:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panel-consumer/panel-consumer.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Customer</ion-title>\n    <ion-button color =\"light\" (click)=\"logout()\">\n      <ion-icon slot='icon-only' name = 'exit'></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    Hi {{ name }}\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_panel-consumer_panel-consumer_module_ts.js.map