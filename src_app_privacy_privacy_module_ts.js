(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_privacy_privacy_module_ts"],{

/***/ 87786:
/*!***************************************************!*\
  !*** ./src/app/privacy/privacy-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPageRoutingModule": () => (/* binding */ PrivacyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy.page */ 48622);




const routes = [
    {
        path: '',
        component: _privacy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPage
    }
];
let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {
};
PrivacyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrivacyPageRoutingModule);



/***/ }),

/***/ 72550:
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPageModule": () => (/* binding */ PrivacyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-routing.module */ 87786);
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.page */ 48622);







let PrivacyPageModule = class PrivacyPageModule {
};
PrivacyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPageRoutingModule
        ],
        declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPage]
    })
], PrivacyPageModule);



/***/ }),

/***/ 48622:
/*!*****************************************!*\
  !*** ./src/app/privacy/privacy.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPage": () => (/* binding */ PrivacyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_privacy_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./privacy.page.html */ 71129);
/* harmony import */ var _privacy_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.page.scss */ 8373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let PrivacyPage = class PrivacyPage {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyPage.ctorParameters = () => [];
PrivacyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-privacy',
        template: _raw_loader_privacy_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_privacy_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrivacyPage);



/***/ }),

/***/ 8373:
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 71129:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy/privacy.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Data Privacy Policy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n<ion-card>\n  <ion-card-content>\n    <p>\n       I agree and give my consent to Tuy Pocket-Market to collect, record, organize, update or modify, retrieve, consult, use, consolidate, block, erase or destruct my personal data as part of my personal information.\n    </p>\n    <br>\n    <p>\n       I hereby affirm my right to be informed, object to processing, access and rectify, suspend or withdraw my personal data, and be indemnified in case of damage pursuant to the provisions of the Republic Act No. 10173 of the Philippines, Data Privacy Act of 2012 and its Corresponding Implementing Rules and Regulations.\n<br>\n<br>\n\n    <b>CONTACT US</b>\n    <p>\n      If you have any concerns, questions, and complaints regarding to these terms and conditions, please contact us by the details below:\n    </p>\n    <p>\n      <br>\n      <a>brandon.cabatian@g.batstate-u.edu.ph</a>\n      <br>\n      <br>\n    </p>\n    <p>\n      <a>alexandragheil.emaas@g.batstate-u.edu.ph</a>\n      <br>\n      <br>\n    </p>\n    <p>\n      <a>rizzalyn.ramirez@g.batstate-u.edu.ph</a>\n      <br>\n      <br>\n    </p>\n    \n    \n    <ion-button expand=\"block\" color=\"primary\" routerLink=\"/intro\" routerDirection =\"back\">Back</ion-button>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_privacy_privacy_module_ts.js.map