(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_order-history_order-history_module_ts"],{

/***/ 62859:
/*!***************************************************************!*\
  !*** ./src/app/order-history/order-history-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPageRoutingModule": () => (/* binding */ OrderHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history.page */ 47636);




const routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryPage
    }
];
let OrderHistoryPageRoutingModule = class OrderHistoryPageRoutingModule {
};
OrderHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderHistoryPageRoutingModule);



/***/ }),

/***/ 51611:
/*!*******************************************************!*\
  !*** ./src/app/order-history/order-history.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPageModule": () => (/* binding */ OrderHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _order_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history-routing.module */ 62859);
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history.page */ 47636);







let OrderHistoryPageModule = class OrderHistoryPageModule {
};
OrderHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryPageRoutingModule
        ],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryPage]
    })
], OrderHistoryPageModule);



/***/ }),

/***/ 47636:
/*!*****************************************************!*\
  !*** ./src/app/order-history/order-history.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPage": () => (/* binding */ OrderHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_order_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-history.page.html */ 62208);
/* harmony import */ var _order_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history.page.scss */ 353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);









let OrderHistoryPage = class OrderHistoryPage {
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
    }
    ngOnInit() {
    }
    back() {
        this.router.navigate(['panel-driver/1']);
    }
};
OrderHistoryPage.ctorParameters = () => [
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
OrderHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-order-history',
        template: _raw_loader_order_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderHistoryPage);



/***/ }),

/***/ 353:
/*!*******************************************************!*\
  !*** ./src/app/order-history/order-history.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: url(\"/src/assets/icon/bg.jpg\");\n  --background-repeat: no-repeat;\n  --background-size: cover;\n  color: white;\n}\nion-content ion-col {\n  border: solid 1.5px black;\n  padding: 1.5px;\n}\nion-content ion-button {\n  --background:#3880ff;\n  color: black;\n}\nion-content ion-card {\n  padding-top: 1%;\n  padding-left: 1%;\n  padding-bottom: 1%;\n  background-color: lightgrey;\n  color: black;\n  text-align: center;\n}\nion-content ion-card ion-card-subtitle {\n  color: #3880ff;\n}\nion-content ion-card ion-badge {\n  color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNENBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBRUosWUFBQTtBQURBO0FBRUE7RUFFSSx5QkFBQTtFQUNBLGNBQUE7QUFESjtBQUdBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBREo7QUFJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUdJO0VBQ0ksY0FBQTtBQURSO0FBR0k7RUFDSSxjQUFBO0FBRFIiLCJmaWxlIjoib3JkZXItaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuXHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL3NyYy9hc3NldHMvaWNvbi9iZy5qcGcnKTtcclxuICAgIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC0tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG5cclxuY29sb3I6IHdoaXRlO1xyXG5pb24tY29se1xyXG4gICAgXHJcbiAgICBib3JkZXI6IHNvbGlkIDEuNXB4IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMS41cHg7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDojMzg4MGZmO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgfVxyXG4gICAgaW9uLWJhZGdle1xyXG4gICAgICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgfVxyXG59XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 62208:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/panel-driver\" routerDirection=\"back\">\n        <img src=\"../../assets/back.svg\" />\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Order Details</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\">\n      <ion-icon fill=\"white\" name=\"notifications\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item routerLink=\"/history-details\">\n      <ion-avatar slot=\"start\"> \n      <img src=\"../../../assets/icon/user.png\"/>\n      </ion-avatar>\n      <ion-label>Ramrez,Rizzalyn C.</ion-label> <!-- kapag binuksan dertso sa order details -->\n      <ion-badge>1</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_order-history_order-history_module_ts.js.map