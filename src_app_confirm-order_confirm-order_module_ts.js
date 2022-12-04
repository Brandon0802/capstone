(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_confirm-order_confirm-order_module_ts"],{

/***/ 98162:
/*!***************************************************************!*\
  !*** ./src/app/confirm-order/confirm-order-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmOrderPageRoutingModule": () => (/* binding */ ConfirmOrderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _confirm_order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-order.page */ 36875);




const routes = [
    {
        path: '',
        component: _confirm_order_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmOrderPage
    }
];
let ConfirmOrderPageRoutingModule = class ConfirmOrderPageRoutingModule {
};
ConfirmOrderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmOrderPageRoutingModule);



/***/ }),

/***/ 90441:
/*!*******************************************************!*\
  !*** ./src/app/confirm-order/confirm-order.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmOrderPageModule": () => (/* binding */ ConfirmOrderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _confirm_order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-order-routing.module */ 98162);
/* harmony import */ var _confirm_order_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-order.page */ 36875);







let ConfirmOrderPageModule = class ConfirmOrderPageModule {
};
ConfirmOrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirm_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmOrderPageRoutingModule
        ],
        declarations: [_confirm_order_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmOrderPage]
    })
], ConfirmOrderPageModule);



/***/ }),

/***/ 36875:
/*!*****************************************************!*\
  !*** ./src/app/confirm-order/confirm-order.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmOrderPage": () => (/* binding */ ConfirmOrderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_confirm_order_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confirm-order.page.html */ 87014);
/* harmony import */ var _confirm_order_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-order.page.scss */ 72841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let ConfirmOrderPage = class ConfirmOrderPage {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmOrderPage.ctorParameters = () => [];
ConfirmOrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-confirm-order',
        template: _raw_loader_confirm_order_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirm_order_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfirmOrderPage);



/***/ }),

/***/ 72841:
/*!*******************************************************!*\
  !*** ./src/app/confirm-order/confirm-order.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".confirmation {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.confirmation .outer-circle {\n  width: 200px;\n  height: 200px;\n  background: #f8f8f8;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.confirmation .outer-circle .inner-circle {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.confirmation .outer-circle .inner-circle img {\n  max-width: 30%;\n}\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQ007RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNWO0FBQ1U7RUFDSSxjQUFBO0FBQ2Q7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0ksMkJBQUE7QUFETiIsImZpbGUiOiJjb25maXJtLW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtYXRpb24ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5vdXRlci1jaXJjbGUge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAuaW5uZXItY2lyY2xlIHtcclxuICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAubWFpbi1idXR0b246OmFmdGVyIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 87014:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-order/confirm-order.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"confirmation\">\n    <div class=\"ion-text-center\">\n\n      <div class=\"outer-circle\">\n        <div class=\"inner-circle\">\n          <img src=\"../../assets/like.png\" />\n        </div>\n      </div>\n\n      <h2>Confirmation</h2>\n      <p>\n        You have successfully <br>\n        completed your payment procedure\n      </p>\n    </div>\n  </div>\n</ion-content>\n<ion-footer translucent=\"true\" class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar color=\"translucent\">\n    <ion-button expand=\"block\" class=\"main-button\" routerLink=\"/newhome\" routerDirection=\"back\">Back to Home</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_confirm-order_confirm-order_module_ts.js.map