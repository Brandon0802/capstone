(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_order-list_order-list_module_ts"],{

/***/ 30779:
/*!*********************************************************!*\
  !*** ./src/app/order-list/order-list-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPageRoutingModule": () => (/* binding */ OrderListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list.page */ 95260);




const routes = [
    {
        path: '',
        component: _order_list_page__WEBPACK_IMPORTED_MODULE_0__.OrderListPage
    }
];
let OrderListPageRoutingModule = class OrderListPageRoutingModule {
};
OrderListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderListPageRoutingModule);



/***/ }),

/***/ 11960:
/*!*************************************************!*\
  !*** ./src/app/order-list/order-list.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPageModule": () => (/* binding */ OrderListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _order_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list-routing.module */ 30779);
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list.page */ 95260);







let OrderListPageModule = class OrderListPageModule {
};
OrderListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderListPageRoutingModule
        ],
        declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_1__.OrderListPage]
    })
], OrderListPageModule);



/***/ }),

/***/ 95260:
/*!***********************************************!*\
  !*** ./src/app/order-list/order-list.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPage": () => (/* binding */ OrderListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-list.page.html */ 1281);
/* harmony import */ var _order_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list.page.scss */ 8372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let OrderListPage = class OrderListPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderListPage.ctorParameters = () => [];
OrderListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-order-list',
        template: _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderListPage);



/***/ }),

/***/ 8372:
/*!*************************************************!*\
  !*** ./src/app/order-list/order-list.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  color: white;\n}\nion-toolbar ion-button ion-icon {\n  color: white;\n}\nion-content {\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\nion-content ion-col {\n  align-items: center;\n  border: solid 1.5px black;\n  padding: 1.5px;\n}\nion-content ion-button {\n  color: black;\n  position: relative;\n}\nion-content ion-card {\n  padding-top: 1%;\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-bottom: 1%;\n  color: black;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQ1E7RUFDSSxZQUFBO0FBQ1o7QUFLSTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRlI7QUFHUTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBRFo7QUFHUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQURaO0FBSVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRloiLCJmaWxlIjoib3JkZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBjb2xvciA6d2hpdGU7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICBpb24tY29udGVudHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxLjVweCBibGFjaztcclxuICAgICAgICAgICAgcGFkZGluZzogMS41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 1281:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-list/order-list.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/panel-driver\" routerDirection=\"back\">\n        <img src=\"../../assets/back.svg\" />\n      </ion-button>\n    </ion-buttons>\n    <ion-button slot=\"end\" fill=\"clear\">\n      <ion-icon fill=\"white\" name=\"notifications\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Municipality of TUY Map</ion-card-subtitle>\n      </ion-card-header>\n\n      <ion-card-content>\n      <ion-icon name=\"map-outline\"></ion-icon>\n      </ion-card-content>\n    </ion-card>\n    <div>\n      <ion-card >\n        <ion-text><h1 no-margin margin-bottom text-center class=\"title\">Orders</h1></ion-text>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"1\">\n              0001\n            </ion-col>\n            <ion-col size=\"3\">\n            Rizzalyn C. Ramirez  \n            </ion-col>\n            <ion-col size=\"4\">\n              216 Purok 3 Sitio Maligtong\n            </ion-col>\n            <ion-col size=\"2\">\n              San Jose\n            </ion-col>\n            <ion-col size=\"2\">\n                <ion-button size=\"extra small\" routerLink=\"/order-detail\">\n                  <ion-icon slot=\"icon-only\" color=\"light\" name=\"eye-outline\"></ion-icon>\n                </ion-button>\n            </ion-col>\n          </ion-row><br>\n          <ion-row>\n            <ion-col size=\"1\">\n              0001\n            </ion-col>\n            <ion-col size=\"3\">\n            Rizzalyn C. Ramirez  \n            </ion-col>\n            <ion-col size=\"4\">\n              216 Purok 3 Sitio Maligtong\n            </ion-col>\n            <ion-col size=\"2\">\n              San Jose\n            </ion-col>\n            <ion-col size=\"2\">\n                <ion-button size=\"extra small\" routerLink=\"/order-detail\">\n                  <ion-icon slot=\"icon-only\" color=\"light\" name=\"eye-outline\"></ion-icon>\n                </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n\n</ion-content>\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_order-list_order-list_module_ts.js.map