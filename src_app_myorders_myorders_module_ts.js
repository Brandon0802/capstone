(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_myorders_myorders_module_ts"],{

/***/ 15797:
/*!*****************************************************!*\
  !*** ./src/app/myorders/myorders-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyordersPageRoutingModule": () => (/* binding */ MyordersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _myorders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myorders.page */ 54047);




const routes = [
    {
        path: '',
        component: _myorders_page__WEBPACK_IMPORTED_MODULE_0__.MyordersPage
    }
];
let MyordersPageRoutingModule = class MyordersPageRoutingModule {
};
MyordersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyordersPageRoutingModule);



/***/ }),

/***/ 47327:
/*!*********************************************!*\
  !*** ./src/app/myorders/myorders.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyordersPageModule": () => (/* binding */ MyordersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _myorders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myorders-routing.module */ 15797);
/* harmony import */ var _myorders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myorders.page */ 54047);







let MyordersPageModule = class MyordersPageModule {
};
MyordersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myorders_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyordersPageRoutingModule
        ],
        declarations: [_myorders_page__WEBPACK_IMPORTED_MODULE_1__.MyordersPage]
    })
], MyordersPageModule);



/***/ }),

/***/ 54047:
/*!*******************************************!*\
  !*** ./src/app/myorders/myorders.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyordersPage": () => (/* binding */ MyordersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_myorders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./myorders.page.html */ 58249);
/* harmony import */ var _myorders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myorders.page.scss */ 22162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let MyordersPage = class MyordersPage {
    constructor() { }
    ngOnInit() {
    }
};
MyordersPage.ctorParameters = () => [];
MyordersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-myorders',
        template: _raw_loader_myorders_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_myorders_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyordersPage);



/***/ }),

/***/ 22162:
/*!*********************************************!*\
  !*** ./src/app/myorders/myorders.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.order-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.order-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.order-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.order-items ion-card ion-card-content .item-img img {\n  object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.order-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.order-items ion-card ion-card-content .item-info .main-button {\n  --border-radius: 5px;\n  margin: 10px 0 0 0;\n}\n\n.order-items ion-card ion-card-content .item-info .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15b3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0U7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQU47O0FBRU07RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFBVjs7QUFFVTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQWQ7O0FBRWM7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUFBbEI7O0FBS2M7RUFDSSxlQUFBO0FBSGxCOztBQU1jO0VBQ0ksY0FBQTtBQUpsQjs7QUFNYztFQUNJLGNBQUE7QUFKbEI7O0FBTWM7RUFDSSwrQkFBQTtBQUpsQjs7QUFPYztFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFMbEI7O0FBUWM7RUFDSSwyQkFBQTtBQU5sQiIsImZpbGUiOiJteW9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjZweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGNvbG9yOiAjNDM0MzQzO1xyXG59XHJcblxyXG4ub3JkZXItaXRlbXMge1xyXG4gIGlvbi1jYXJkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAuaXRlbS1pbWcge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pdGVtLWluZm8ge1xyXG4gICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAubWFpbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLm1haW4tYnV0dG9uOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 58249:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myorders/myorders.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\n        <img src='../../assets/back-dark.svg' />\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"title\">My Orders</h1>\n\n  <div class=\"order-items\">\n\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src='../../assets/cart/cart4.png' />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Women shirt</p>\n          <p>Plus Point</p>\n          <p>₱390.00</p>\n\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card mode=\"ios\">\n      <ion-card-content>\n        <div class=\"item-img\">\n          <img src='../../assets/cart/cart5.png' />\n        </div>\n\n        <div class=\"item-info\">\n          <p>Shirt</p>\n          <p>Cat's Eye</p>\n          <p>₱450.00</p>\n\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_myorders_myorders_module_ts.js.map