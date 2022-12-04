(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_admin-panel_admin-panel_module_ts"],{

/***/ 64330:
/*!***********************************************************!*\
  !*** ./src/app/admin-panel/admin-panel-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelPageRoutingModule": () => (/* binding */ AdminPanelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _admin_panel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-panel.page */ 3262);




const routes = [
    {
        path: '',
        component: _admin_panel_page__WEBPACK_IMPORTED_MODULE_0__.AdminPanelPage
    }
];
let AdminPanelPageRoutingModule = class AdminPanelPageRoutingModule {
};
AdminPanelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminPanelPageRoutingModule);



/***/ }),

/***/ 68369:
/*!***************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelPageModule": () => (/* binding */ AdminPanelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-panel-routing.module */ 64330);
/* harmony import */ var _admin_panel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-panel.page */ 3262);







let AdminPanelPageModule = class AdminPanelPageModule {
};
AdminPanelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPanelPageRoutingModule
        ],
        declarations: [_admin_panel_page__WEBPACK_IMPORTED_MODULE_1__.AdminPanelPage]
    })
], AdminPanelPageModule);



/***/ }),

/***/ 3262:
/*!*************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelPage": () => (/* binding */ AdminPanelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_admin_panel_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./admin-panel.page.html */ 63281);
/* harmony import */ var _admin_panel_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-panel.page.scss */ 35487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let AdminPanelPage = class AdminPanelPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminPanelPage.ctorParameters = () => [];
AdminPanelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin-panel',
        template: _raw_loader_admin_panel_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_admin_panel_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdminPanelPage);



/***/ }),

/***/ 35487:
/*!***************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wYW5lbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 63281:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-panel.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>admin-panel</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_admin-panel_admin-panel_module_ts.js.map