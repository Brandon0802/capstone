(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_try_try_module_ts"],{

/***/ 72620:
/*!*******************************************!*\
  !*** ./src/app/try/try-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TryPageRoutingModule": () => (/* binding */ TryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _try_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./try.page */ 37918);




const routes = [
    {
        path: '',
        component: _try_page__WEBPACK_IMPORTED_MODULE_0__.TryPage
    }
];
let TryPageRoutingModule = class TryPageRoutingModule {
};
TryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TryPageRoutingModule);



/***/ }),

/***/ 9726:
/*!***********************************!*\
  !*** ./src/app/try/try.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TryPageModule": () => (/* binding */ TryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _try_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./try-routing.module */ 72620);
/* harmony import */ var _try_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./try.page */ 37918);







let TryPageModule = class TryPageModule {
};
TryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _try_routing_module__WEBPACK_IMPORTED_MODULE_0__.TryPageRoutingModule
        ],
        declarations: [_try_page__WEBPACK_IMPORTED_MODULE_1__.TryPage]
    })
], TryPageModule);



/***/ }),

/***/ 37918:
/*!*********************************!*\
  !*** ./src/app/try/try.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TryPage": () => (/* binding */ TryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_try_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./try.page.html */ 9944);
/* harmony import */ var _try_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./try.page.scss */ 46531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 75481);









let TryPage = class TryPage {
    constructor(http, router, toastCtrl, loadingCtrl, alertCtrl, accessProviders, storage) {
        this.http = http;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accessProviders = accessProviders;
        this.storage = storage;
    }
    ngOnInit() {
    }
    selectedFile(event) {
        this.image = event.target.files[0];
    }
    try() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.i = Date.now().toString();
            console.log(this.i);
            const formData = new FormData();
            formData.append('image', this.image);
            this.http.post('http://localhost/Capstone2/capstone_project_backend_001/set_info.php', formData).subscribe((response) => {
                console.log(response);
            });
        });
    }
};
TryPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage }
];
TryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-try',
        template: _raw_loader_try_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_try_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TryPage);



/***/ }),

/***/ 46531:
/*!***********************************!*\
  !*** ./src/app/try/try.page.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9944:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/try/try.page.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>try</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-input type=\"file\" [(ngModel)]=\"image\" (change)=\"selectedFile($event)\" ></ion-input>\n  </ion-item>\n  <ion-button expand=\"full\" class=\"ion-padding\" (click)=\"try()\" [disabled]=\"disabledButton\" >Create Store</ion-button>\n  <ion-row class=\"hover-buttons\">\n    <ion-icon size=\"small\" float-right name=\"logo-instagram\" class=\"fab\"></ion-icon>\n    <ion-icon size=\"small\" float-right name=\"share\" class=\"fab\" ></ion-icon>\n    <ion-icon *ngIf=\"!liked\" size=\"small\" float-right name=\"heart\"  class=\"fab\" (click)=\"like()\"></ion-icon>\n    <ion-icon *ngIf=\"liked\" size=\"small\" float-right name=\"heart\" class=\"fab red\" (click)=\"like()\"></ion-icon> \n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_try_try_module_ts.js.map