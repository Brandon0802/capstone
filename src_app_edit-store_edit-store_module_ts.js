(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_edit-store_edit-store_module_ts"],{

/***/ 41826:
/*!*********************************************************!*\
  !*** ./src/app/edit-store/edit-store-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditStorePageRoutingModule": () => (/* binding */ EditStorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _edit_store_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-store.page */ 14843);




const routes = [
    {
        path: '',
        component: _edit_store_page__WEBPACK_IMPORTED_MODULE_0__.EditStorePage
    }
];
let EditStorePageRoutingModule = class EditStorePageRoutingModule {
};
EditStorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditStorePageRoutingModule);



/***/ }),

/***/ 63929:
/*!*************************************************!*\
  !*** ./src/app/edit-store/edit-store.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditStorePageModule": () => (/* binding */ EditStorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _edit_store_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-store-routing.module */ 41826);
/* harmony import */ var _edit_store_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-store.page */ 14843);







let EditStorePageModule = class EditStorePageModule {
};
EditStorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_store_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditStorePageRoutingModule
        ],
        declarations: [_edit_store_page__WEBPACK_IMPORTED_MODULE_1__.EditStorePage]
    })
], EditStorePageModule);



/***/ }),

/***/ 14843:
/*!***********************************************!*\
  !*** ./src/app/edit-store/edit-store.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditStorePage": () => (/* binding */ EditStorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_edit_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-store.page.html */ 20411);
/* harmony import */ var _edit_store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-store.page.scss */ 38018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);










let EditStorePage = class EditStorePage {
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
        this.image = "";
        this.store_name = "";
    }
    ngOnInit() {
    }
    selectedFile(event) {
        this.image = event.target.files[0];
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
                    }
                    else {
                    }
                });
            });
        });
    }
    save() {
        const formData = new FormData();
        formData.append('image', this.image);
        formData.append('id', this.user_id);
        formData.append('name', this.store_name);
        this.http.post('http://165.232.160.89/api/create_store_image.php', formData).subscribe((response) => {
            console.log(response);
        });
        this.navController.navigateRoot(['/panel-vendor']);
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: a,
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
EditStorePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService }
];
EditStorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-edit-store',
        template: _raw_loader_edit_store_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_store_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditStorePage);



/***/ }),

/***/ 38018:
/*!*************************************************!*\
  !*** ./src/app/edit-store/edit-store.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXN0b3JlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 20411:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-store/edit-store.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/panel-vendor\" routerDirection=\"back\">\n        <img src='../../assets/back-dark.svg' />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list> \n    <div class=\"\">\n      <ion-item>\n        <ion-label>Store Name: </ion-label>\n        <ion-input type=\"text\" placeholder=\"Store Name\" [(ngModel)]=\"store_name\" ></ion-input>\n      </ion-item>\n     \n      <ion-item>\n        <ion-label>Store Image </ion-label>\n        <ion-input type=\"file\" [(ngModel)]=\"image\" (change)=\"selectedFile($event)\" ></ion-input>\n     </ion-item>\n    \n    </div>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" (click)=\"save()\" >Save</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" color=\"light\" routerLink=\"/store\">Cancel</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_edit-store_edit-store_module_ts.js.map