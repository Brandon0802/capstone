(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_address-manager_address-manager_module_ts"],{

/***/ 15114:
/*!*******************************************************************!*\
  !*** ./src/app/address-manager/address-manager-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressManagerPageRoutingModule": () => (/* binding */ AddressManagerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _address_manager_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-manager.page */ 14449);




const routes = [
    {
        path: '',
        component: _address_manager_page__WEBPACK_IMPORTED_MODULE_0__.AddressManagerPage
    }
];
let AddressManagerPageRoutingModule = class AddressManagerPageRoutingModule {
};
AddressManagerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddressManagerPageRoutingModule);



/***/ }),

/***/ 82579:
/*!***********************************************************!*\
  !*** ./src/app/address-manager/address-manager.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressManagerPageModule": () => (/* binding */ AddressManagerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _address_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-manager-routing.module */ 15114);
/* harmony import */ var _address_manager_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-manager.page */ 14449);







let AddressManagerPageModule = class AddressManagerPageModule {
};
AddressManagerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _address_manager_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddressManagerPageRoutingModule
        ],
        declarations: [_address_manager_page__WEBPACK_IMPORTED_MODULE_1__.AddressManagerPage]
    })
], AddressManagerPageModule);



/***/ }),

/***/ 14449:
/*!*********************************************************!*\
  !*** ./src/app/address-manager/address-manager.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressManagerPage": () => (/* binding */ AddressManagerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_address_manager_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./address-manager.page.html */ 70537);
/* harmony import */ var _address_manager_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-manager.page.scss */ 42778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 84105);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 75481);









let AddressManagerPage = class AddressManagerPage {
    constructor(router, toastController, loadingController, alertController, geolocation, accessProviders, storage) {
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.accessProviders = accessProviders;
        this.storage = storage;
        this.name = "";
        this.contact_number = "";
        this.street = "";
        this.barangay_name = "";
        this.specific = "";
        this.agree = false;
        this.openProceed = false;
        this.coordinates = false;
        this.no = true;
        this.uid = "";
    }
    ngOnInit() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.name = this.datastorage.first_name + ' ' + this.datastorage.last_name;
            this.uid = this.datastorage.user_id;
            this.contact_number = 0 + this.datastorage.contact_number;
            this.barangay_name = this.datastorage.barangay_name;
            this.street = this.datastorage.street;
        });
    }
    ionViewDidEnter() {
        this.openProceed = false;
        this.coordinates = false;
    }
    yesProceed() {
        this.coordinates = true;
    }
    noProceed() {
        if (this.coordinates == false) {
            this.openProceed = true;
        }
        else {
            this.openProceed = true;
            this.coordinates = false;
        }
    }
    cancel() {
        this.openProceed = true;
        this.coordinates = false;
    }
    getCurrentCoordinates() {
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            console.log(this.latitude);
            console.log(this.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        this.openProceed = true;
    }
    proceed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('storage_xxx').then((res) => {
                console.log(res);
                this.datastorage = res;
                this.name = this.datastorage.first_name + ' ' + this.datastorage.last_name;
                this.uid = this.datastorage.user_id;
                this.contact_number = 0 + this.datastorage.contact_number;
                this.barangay_name = this.datastorage.barangay_name;
                this.street = this.datastorage.street;
                if (this.name == "") {
                    this.presentToast('Incomplete information!');
                }
                else if (this.contact_number == "") {
                    this.presentToast('Incomplete information!');
                }
                else if (this.street == "") {
                    this.presentToast('Incomplete information!');
                }
                else if (this.barangay_name == "") {
                    this.presentToast('Incomplete information!');
                }
                else if (this.specific == "") {
                    this.presentToast('Incomplete information!');
                }
                else {
                    return new Promise(resolve => {
                        let body = {
                            aksi: 'process_address',
                            uid: this.uid,
                            name: this.name,
                            contact_number: this.contact_number,
                            street: this.street,
                            barangay: this.barangay_name,
                            specific: this.specific,
                            latitude: this.latitude,
                            longitude: this.longitude
                        };
                        this.accessProviders.postData(body, 'process_address.php').subscribe((res) => {
                            if (res.success == true) {
                                this.router.navigate(['/product-detail']);
                            }
                            else {
                            }
                        }, (err) => {
                            this.presentAlert('Timeout');
                        });
                    });
                }
            });
        });
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'top'
            });
            toast.present();
        });
    }
    presentAlert(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: a,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
        });
    }
};
AddressManagerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage }
];
AddressManagerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-address-manager',
        template: _raw_loader_address_manager_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_address_manager_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddressManagerPage);



/***/ }),

/***/ 42778:
/*!***********************************************************!*\
  !*** ./src/app/address-manager/address-manager.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  padding-top: 10px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n.container .l {\n  padding-top: 10px;\n}\n.container .l .imga {\n  padding-left: 20px;\n  position: relative;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MtbWFuYWdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLGlCQUFBO0FBQ047QUFBTTtFQUNELGtCQUFBO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0FBRU4iLCJmaWxlIjoiYWRkcmVzcy1tYW5hZ2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgLmx7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAuaW1nYXsgXHJcbiAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ 70537:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-manager/address-manager.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/newhome\" routerDirection=\"back\">\n        <img src='../../assets/back.svg' />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"container\">\n  <h1 class=\"ion-text-center\">To place order, please add a delivery address</h1>\n   <ion-item>\n    <ion-input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Full Name\"></ion-input>\n   </ion-item> \n   <ion-item>\n    <ion-input type=\"number\" [(ngModel)]=\"contact_number\" placeholder=\"Contact Number\"></ion-input>\n  </ion-item>\n  <ion-list>\n    <ion-item>\n      <ion-label>Select Barangay </ion-label>\n      <ion-select [(ngModel)]=\"barangay_name\" placeholder=\"Select One\">\n      <ion-select-option value=\"Burgos\"> Burgos </ion-select-option>\n      <ion-select-option value=\"Luna\"> Luna </ion-select-option>\n      <ion-select-option value=\"Rillo\"> Rillo </ion-select-option>\n      <ion-select-option value=\"Rizal\"> Rizal </ion-select-option>\n      <ion-select-option value=\"Acle\"> Acle </ion-select-option>\n      <ion-select-option value=\"Bayudbud\"> Bayudbud </ion-select-option>\n      <ion-select-option value=\"Bolbok\"> Bolbok </ion-select-option>\n      <ion-select-option value=\"Dalima\"> Dalima </ion-select-option>\n      <ion-select-option value=\"Dao\"> Dao </ion-select-option>\n      <ion-select-option value=\"Guinhawa\"> Guinhawa </ion-select-option>\n      <ion-select-option value=\"Lumbangan\"> Lumbangan </ion-select-option>\n      <ion-select-option value=\"Luntal\"> Luntal </ion-select-option>\n      <ion-select-option value=\"Magahis\"> Magahis </ion-select-option>\n      <ion-select-option value=\"Malibu\"> Malibu </ion-select-option>\n      <ion-select-option value=\"Mataywanac\"> Mataywanac </ion-select-option>\n      <ion-select-option value=\"Palincaro\"> Palincaro </ion-select-option>\n      <ion-select-option value=\"Putol\"> Putol </ion-select-option>\n      <ion-select-option value=\"Sabang\"> Sabang </ion-select-option>\n      <ion-select-option value=\"San Jose\"> San Jose </ion-select-option>\n      <ion-select-option value=\"Talon\"> Talon </ion-select-option>\n      <ion-select-option value=\"Toong\"> Toong </ion-select-option>\n      <ion-select-option value=\"Tuyon-Tuyon\"> Tuyon-Tuyon </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-item>\n    <ion-input type=\"text\" [(ngModel)]=\"street\" placeholder=\"Street Name, Building, House No.\"></ion-input>\n  </ion-item> \n  <ion-item>\n    <ion-textarea [(ngModel)]=\"specific\" placeholder=\"Landmark Ex. (Near Chapel)\"></ion-textarea>\n  </ion-item>\n  <ion-item>\n       <p>Are you currently located to the\n      location you specied above?</p>\n  </ion-item>\n \n      <ion-radio-group >\n      <ion-item>\n        <ion-label>Yes</ion-label>\n        <ion-radio (click)=\"yesProceed()\" checked color=\"primary\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>No</ion-label>\n        <ion-radio (click)=\"noProceed()\" color=\"primary\">No</ion-radio>\n      </ion-item> \n    </ion-radio-group>\n  <ion-item *ngIf=\"coordinates\">\n    <div class=\"ion-padding\">\n      <ion-button (click)=\"getCurrentCoordinates()\">\n        Save Location\n      </ion-button>\n      <ion-button (click)=\"cancel()\">Cancel</ion-button>\n    </div>\n  </ion-item>\n  <ion-button *ngIf=\"openProceed\" expand=\"full\" (click)=\"proceed()\"> Proceed </ion-button>\n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_address-manager_address-manager_module_ts.js.map