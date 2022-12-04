(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_productlist_productlist_module_ts"],{

/***/ 16488:
/*!***********************************************************!*\
  !*** ./src/app/productlist/productlist-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductlistPageRoutingModule": () => (/* binding */ ProductlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _productlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productlist.page */ 11043);




const routes = [
    {
        path: '',
        component: _productlist_page__WEBPACK_IMPORTED_MODULE_0__.ProductlistPage
    }
];
let ProductlistPageRoutingModule = class ProductlistPageRoutingModule {
};
ProductlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductlistPageRoutingModule);



/***/ }),

/***/ 82393:
/*!***************************************************!*\
  !*** ./src/app/productlist/productlist.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductlistPageModule": () => (/* binding */ ProductlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _productlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productlist-routing.module */ 16488);
/* harmony import */ var _productlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productlist.page */ 11043);







let ProductlistPageModule = class ProductlistPageModule {
};
ProductlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _productlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductlistPageRoutingModule
        ],
        declarations: [_productlist_page__WEBPACK_IMPORTED_MODULE_1__.ProductlistPage]
    })
], ProductlistPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_productlist_productlist_module_ts.js.map