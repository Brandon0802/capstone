(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_terms-and-condition-driver_terms-and-condition-driver_module_ts"],{

/***/ 39985:
/*!*****************************************************************************************!*\
  !*** ./src/app/terms-and-condition-driver/terms-and-condition-driver-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionDriverPageRoutingModule": () => (/* binding */ TermsAndConditionDriverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _terms_and_condition_driver_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-condition-driver.page */ 44563);




const routes = [
    {
        path: '',
        component: _terms_and_condition_driver_page__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionDriverPage
    }
];
let TermsAndConditionDriverPageRoutingModule = class TermsAndConditionDriverPageRoutingModule {
};
TermsAndConditionDriverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsAndConditionDriverPageRoutingModule);



/***/ }),

/***/ 52700:
/*!*********************************************************************************!*\
  !*** ./src/app/terms-and-condition-driver/terms-and-condition-driver.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionDriverPageModule": () => (/* binding */ TermsAndConditionDriverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _terms_and_condition_driver_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-condition-driver-routing.module */ 39985);
/* harmony import */ var _terms_and_condition_driver_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-condition-driver.page */ 44563);







let TermsAndConditionDriverPageModule = class TermsAndConditionDriverPageModule {
};
TermsAndConditionDriverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _terms_and_condition_driver_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditionDriverPageRoutingModule
        ],
        declarations: [_terms_and_condition_driver_page__WEBPACK_IMPORTED_MODULE_1__.TermsAndConditionDriverPage]
    })
], TermsAndConditionDriverPageModule);



/***/ }),

/***/ 44563:
/*!*******************************************************************************!*\
  !*** ./src/app/terms-and-condition-driver/terms-and-condition-driver.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditionDriverPage": () => (/* binding */ TermsAndConditionDriverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_terms_and_condition_driver_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./terms-and-condition-driver.page.html */ 21784);
/* harmony import */ var _terms_and_condition_driver_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-and-condition-driver.page.scss */ 91750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let TermsAndConditionDriverPage = class TermsAndConditionDriverPage {
    constructor() { }
    ngOnInit() {
    }
};
TermsAndConditionDriverPage.ctorParameters = () => [];
TermsAndConditionDriverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-terms-and-condition-driver',
        template: _raw_loader_terms_and_condition_driver_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_terms_and_condition_driver_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermsAndConditionDriverPage);



/***/ }),

/***/ 91750:
/*!*********************************************************************************!*\
  !*** ./src/app/terms-and-condition-driver/terms-and-condition-driver.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy1hbmQtY29uZGl0aW9uLWRyaXZlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 21784:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-condition-driver/terms-and-condition-driver.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">Terms of Use and Data Privacy Policy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n<ion-card>\n  <ion-card-content>\n    <p>\n       I agree and give my consent to *name of the system* to collect, record, organize, update or modify, retrieve, consult, use, consolidate, block, erase or destruct my personal data as part of my personal information.\n    </p>\n    <br>\n    <p>\n       I hereby affirm my right to be informed, object to processing, access and rectify, suspend or withdraw my personal data, and be indemnified in case of damage pursuant to the provisions of the Republic Act No. 10173 of the Philippines, Data Privacy Act of 2012 and its Corresponding Implementing Rules and Regulations.\n<br>\n<br>\n<b>RULES AND REGULATIONS</b>\n<br>\n<b>1.\tPayment</b> <br>\n•\tThe driver will pay for the orders first to the vendor, then the driver will deliver it to the consumer's address and the consumer will pay it to the driver plus the delivery fee.\n<br>\n    </p>\n    <p>\n<b> 2.Shipping Policies</b><br>\n•\tThe consumers cannot cancel their orders once the vendor confirmed their orders.\n<br>\n    </p>\n    <p>\n      <b> 3. Cancellation Policies</b><br>\n      •\tThe shipping fee or the fare will be paid by the consumer based on how far the destination is. If the order/s is/are lost during the delivery, damaged and delayed to deliver on that day, the delivery driver will be held responsible. The vendor/seller will not be held responsible on what happen. \n      <br>\n          </p>\n    <b>CONTACT US</b>\n    <p>\n      If you have any concerns, questions, and complaints regarding to these terms and conditions, please contact us by the details below:\n    </p>\n    <p>\n      <a>brandon.cabatian@g.batstate-u.edu.ph</a>\n      <br>\n      <br>\n    </p>\n    <p>\n      <a>alexandragheil.emaas@g.batstate-u.edu.ph</a>\n      <br>\n      <br>\n    </p>\n    <p>\n      <a>rizzalyn.ramirez@g.batstate-u.edu.ph</a>\n      <br>\n      <br>\n    </p>\n    \n    \n    <ion-button expand=\"block\" color=\"primary\" routerLink=\"/register-driver\" routerDirection =\"back\">Back</ion-button>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_terms-and-condition-driver_terms-and-condition-driver_module_ts.js.map