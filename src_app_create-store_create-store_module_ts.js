(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_create-store_create-store_module_ts"],{

/***/ 45833:
/*!*************************************************************!*\
  !*** ./src/app/create-store/create-store-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateStorePageRoutingModule": () => (/* binding */ CreateStorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _create_store_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-store.page */ 699);




const routes = [
    {
        path: '',
        component: _create_store_page__WEBPACK_IMPORTED_MODULE_0__.CreateStorePage
    }
];
let CreateStorePageRoutingModule = class CreateStorePageRoutingModule {
};
CreateStorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateStorePageRoutingModule);



/***/ }),

/***/ 43017:
/*!*****************************************************!*\
  !*** ./src/app/create-store/create-store.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateStorePageModule": () => (/* binding */ CreateStorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _create_store_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-store-routing.module */ 45833);
/* harmony import */ var _create_store_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-store.page */ 699);







let CreateStorePageModule = class CreateStorePageModule {
};
CreateStorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_store_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateStorePageRoutingModule
        ],
        declarations: [_create_store_page__WEBPACK_IMPORTED_MODULE_1__.CreateStorePage]
    })
], CreateStorePageModule);



/***/ }),

/***/ 699:
/*!***************************************************!*\
  !*** ./src/app/create-store/create-store.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateStorePage": () => (/* binding */ CreateStorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_create_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-store.page.html */ 64754);
/* harmony import */ var _create_store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-store.page.scss */ 10189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);










let CreateStorePage = class CreateStorePage {
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
        this.xyz = 2;
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
        });
    }
    tryCreate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.navParamService.setNavData(1);
            if (this.store_name == "") {
                this.presentToast('Store Name is required');
            } //else if(this.image==""){
            // this.presentToast('Store Image is required');}
            else {
                const loader = yield this.loadingCtrl.create({
                    message: 'Please wait.....',
                });
                loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'process_create-store',
                        store_name: this.store_name,
                        user_id: this.user_id
                    };
                    this.accessProviders.postData(body, 'process_create-store.php').subscribe((res) => {
                        if (res.success == true) {
                            this.navParamService.setNavData(1);
                            //const formData = new FormData();
                            //  formData.append('image', this.image);
                            // formData.append('id', this.user_id);
                            //  this.http.post('http://localhost/Capstone2/capstone_project_backend_001/create_store_image.php', formData).subscribe((response: any)=>{
                            //    console.log(response);
                            //   });
                            loader.dismiss();
                            console.log(res.success);
                            console.log(res.msg);
                            this.disabledButton = false;
                            this.presentToast(res.msg);
                            this.navParamService.setStoreId(res.sid);
                            this.router.navigate(['/panel-vendor']);
                        }
                        else {
                            loader.dismiss();
                            this.disabledButton = false;
                            this.presentToast(res.msg);
                        }
                    });
                });
            }
        });
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
CreateStorePage.ctorParameters = () => [
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
CreateStorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-create-store',
        template: _raw_loader_create_store_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_store_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateStorePage);



/***/ }),

/***/ 10189:
/*!*****************************************************!*\
  !*** ./src/app/create-store/create-store.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtc3RvcmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 64754:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-store/create-store.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/panel-vendor\" routerDirection=\"back\">\n        <img src='../../assets/back-dark.svg' />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list> \n    <div class=\"\">\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Store Name\" [(ngModel)]=\"store_name\" ></ion-input>\n      </ion-item>\n     <!-- <ion-label> Store Image </ion-label>\n      <ion-item>\n     <ion-input type=\"file\" [(ngModel)]=\"image\" (change)=\"selectedFile($event)\" ></ion-input>\n     </ion-item>\n    -->\n      <ion-button expand=\"full\" class=\"ion-padding\" (click)=\"tryCreate()\" [disabled]=\"disabledButton\" >Create Store</ion-button>\n    </div>\n  </ion-list>\n</ion-content> \n");

/***/ })

}]);
//# sourceMappingURL=src_app_create-store_create-store_module_ts.js.map