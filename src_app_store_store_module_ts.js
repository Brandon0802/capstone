(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_store_store_module_ts"],{

/***/ 23737:
/*!***********************************************!*\
  !*** ./src/app/store/store-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorePageRoutingModule": () => (/* binding */ StorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.page */ 58107);




const routes = [
    {
        path: '',
        component: _store_page__WEBPACK_IMPORTED_MODULE_0__.StorePage
    }
];
let StorePageRoutingModule = class StorePageRoutingModule {
};
StorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StorePageRoutingModule);



/***/ }),

/***/ 57050:
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorePageModule": () => (/* binding */ StorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _store_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-routing.module */ 23737);
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.page */ 58107);







let StorePageModule = class StorePageModule {
};
StorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _store_routing_module__WEBPACK_IMPORTED_MODULE_0__.StorePageRoutingModule
        ],
        declarations: [_store_page__WEBPACK_IMPORTED_MODULE_1__.StorePage]
    })
], StorePageModule);



/***/ }),

/***/ 58107:
/*!*************************************!*\
  !*** ./src/app/store/store.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorePage": () => (/* binding */ StorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store.page.html */ 27843);
/* harmony import */ var _store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.page.scss */ 56799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);










let StorePage = class StorePage {
    constructor(http, router, toastCtrl, loadingCtrl, alertCtrl, accessProviders, storage, navController, navParamService) {
        this.http = http;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accessProviders = accessProviders;
        this.storage = storage;
        this.navController = navController;
        this.navParamService = navParamService;
        this.a = true;
        this.image = "";
        this.store_name = "";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.user_id = this.datastorage.user_id;
            this.sid = this.datastorage.store_id;
            return new Promise(resolve => {
                let body = {
                    aksi: 'get_store',
                    user_id: this.user_id
                };
                this.accessProviders.postData(body, 'get_store.php').subscribe((res) => {
                    if (res.success == true) {
                        console.log(res.success);
                        console.log(res.sname);
                        this.store_name = res.sname;
                        this.image = res.simage;
                        if (this.image == 'NULL') {
                            this.a = false;
                        }
                        else {
                            this.a = true;
                            console.log(this.image);
                        }
                    }
                    else {
                    }
                });
            });
        });
    }
    edit() {
        this.navController.navigateRoot(['/edit-store']);
    }
};
StorePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService }
];
StorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-store',
        template: _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StorePage);



/***/ }),

/***/ 56799:
/*!***************************************!*\
  !*** ./src/app/store/store.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 27843:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/panel-vendor\" routerDirection=\"back\">\n        <img src='../../assets/back-dark.svg' />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list> \n    <div class=\"\">\n      <ion-item>\n        <ion-label>Store Name: </ion-label>\n        <ion-input type=\"text\" placeholder=\"Store Name\" [(ngModel)]=\"store_name\" ></ion-input>\n      </ion-item>\n     \n      <ion-item *ngIf=\"a\">\n        <ion-label>Store Image: </ion-label>\n        \n     <img src=\"{{image}}\"/>\n     \n     </ion-item>\n\n\n    </div>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" (click)=\"edit()\" >Edit Store</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" color=\"light\" routerLink=\"/panel-vendor\">Cancel</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_store_store_module_ts.js.map