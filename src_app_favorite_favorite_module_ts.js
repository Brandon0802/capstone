(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_favorite_favorite_module_ts"],{

/***/ 46487:
/*!*****************************************************!*\
  !*** ./src/app/favorite/favorite-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePageRoutingModule": () => (/* binding */ FavoritePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite.page */ 26322);




const routes = [
    {
        path: '',
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_0__.FavoritePage
    }
];
let FavoritePageRoutingModule = class FavoritePageRoutingModule {
};
FavoritePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritePageRoutingModule);



/***/ }),

/***/ 79530:
/*!*********************************************!*\
  !*** ./src/app/favorite/favorite.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePageModule": () => (/* binding */ FavoritePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-routing.module */ 46487);
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.page */ 26322);







let FavoritePageModule = class FavoritePageModule {
};
FavoritePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favorite_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritePageRoutingModule
        ],
        declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_1__.FavoritePage]
    })
], FavoritePageModule);



/***/ }),

/***/ 26322:
/*!*******************************************!*\
  !*** ./src/app/favorite/favorite.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePage": () => (/* binding */ FavoritePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_favorite_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./favorite.page.html */ 87353);
/* harmony import */ var _favorite_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.page.scss */ 32988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let FavoritePage = class FavoritePage {
    constructor() { }
    ngOnInit() {
    }
};
FavoritePage.ctorParameters = () => [];
FavoritePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-favorite',
        template: _raw_loader_favorite_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_favorite_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FavoritePage);



/***/ }),

/***/ 32988:
/*!*********************************************!*\
  !*** ./src/app/favorite/favorite.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.favorite-items {\n  margin-top: 20px;\n}\n\n.favorite-items ion-col {\n  padding: 10px;\n}\n\n.favorite-items ion-col img {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.favorite-items ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.favorite-items ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.padding-left0 {\n  padding-left: 0 !important;\n}\n\n.padding-right0 {\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNFO0VBQ0ksYUFBQTtBQUNOOztBQUNNO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ1Y7O0FBRU07RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBVjs7QUFHTTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQURWOztBQU1BO0VBQ0UsMEJBQUE7QUFIRjs7QUFNQTtFQUNFLDJCQUFBO0FBSEYiLCJmaWxlIjoiZmF2b3JpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tidG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDI2cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBjb2xvcjogIzQzNDM0MztcclxufVxyXG5cclxuLmZhdm9yaXRlLWl0ZW1zIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICBpb24tY29sIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoNiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFkZGluZy1sZWZ0MCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXJpZ2h0MCB7XHJcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 87353:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\n        <img src='../../assets/back-dark.svg' />\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"title\">Favorite</h1>\n\n  <ion-row class=\"favorite-items\">\n    <ion-col size=\"6\" class=\"ion-text-left padding-left0\">\n      <img src=\"../../assets/products/prod-1.png\" />\n      <p>$34.00</p>\n      <h6>Women t-shirt</h6>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-left padding-right0\">\n      <img src=\"../../assets/products/prod-2.png\" />\n      <p>$24.00</p>\n      <h6>Mens t-shirt</h6>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-left padding-left0\">\n      <img src=\"../../assets/products/prod-3.png\" />\n      <p>$54.00</p>\n      <h6>Women t-shirt</h6>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-left padding-right0\">\n      <img src=\"../../assets/products/prod-4.png\" />\n      <p>$44.00</p>\n      <h6>Blezer</h6>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-left padding-left0\">\n      <img src=\"../../assets/products/prod-5.png\" />\n      <p>$14.00</p>\n      <h6>T-shirt</h6>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-left padding-right0\">\n      <img src=\"../../assets/products/prod-6.png\" />\n      <p>$30.00</p>\n      <h6>Shirt</h6>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_favorite_favorite_module_ts.js.map