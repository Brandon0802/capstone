(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_register-vendor_register-vendor_module_ts"],{

/***/ 62950:
/*!*******************************************************************!*\
  !*** ./src/app/register-vendor/register-vendor-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterVendorPageRoutingModule": () => (/* binding */ RegisterVendorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _register_vendor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-vendor.page */ 56953);




const routes = [
    {
        path: '',
        component: _register_vendor_page__WEBPACK_IMPORTED_MODULE_0__.RegisterVendorPage
    }
];
let RegisterVendorPageRoutingModule = class RegisterVendorPageRoutingModule {
};
RegisterVendorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterVendorPageRoutingModule);



/***/ }),

/***/ 82774:
/*!***********************************************************!*\
  !*** ./src/app/register-vendor/register-vendor.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterVendorPageModule": () => (/* binding */ RegisterVendorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _register_vendor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-vendor-routing.module */ 62950);
/* harmony import */ var _register_vendor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-vendor.page */ 56953);







let RegisterVendorPageModule = class RegisterVendorPageModule {
};
RegisterVendorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_vendor_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterVendorPageRoutingModule
        ],
        declarations: [_register_vendor_page__WEBPACK_IMPORTED_MODULE_1__.RegisterVendorPage]
    })
], RegisterVendorPageModule);



/***/ }),

/***/ 56953:
/*!*********************************************************!*\
  !*** ./src/app/register-vendor/register-vendor.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterVendorPage": () => (/* binding */ RegisterVendorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_register_vendor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-vendor.page.html */ 81550);
/* harmony import */ var _register_vendor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-vendor.page.scss */ 67970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);







let RegisterVendorPage = class RegisterVendorPage {
    constructor(router, toastController, loadingController, alertController, accessProviders) {
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.first_name = "";
        this.last_name = "";
        this.contact_number = "";
        this.business_permit = "";
        this.street = "";
        this.barangay_name = "";
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.disabledButton = false;
    }
    tryRegister() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.first_name == "") {
                this.presentToast('Incomplete information!');
            }
            else if (this.last_name == "") {
                this.presentToast('Incomplete information!');
            }
            else if (this.contact_number == "") {
                this.presentToast('Incomplete information!');
            }
            else if (this.business_permit == "") {
                this.presentToast('Incomplete information!');
            }
            else if (this.street == "") {
                this.presentToast('Incomplete information!');
            }
            else if (this.barangay_name == "") {
                this.presentToast('Incomplete information!');
            }
            else if (this.username == "") {
                this.presentToast('Incomplete information!');
            }
            else if (this.password == "") {
                this.presentToast('Incomplete information!');
            }
            else {
                this.disabledButton = true;
                const loader = yield this.loadingController.create({
                    message: 'Creating your account. Please wait.',
                });
                loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'process_vendor',
                        first_name: this.first_name,
                        last_name: this.last_name,
                        contact_number: this.contact_number,
                        business_permit: this.business_permit,
                        street: this.street,
                        barangay_name: this.barangay_name,
                        username: this.username,
                        password: this.password
                    };
                    this.accessProviders.postData(body, 'process_vendor.php').subscribe((res) => {
                        if (res.success == true) {
                            loader.dismiss();
                            this.disabledButton = false;
                            this.presentToast(res.msg);
                            this.router.navigate(['/main']);
                        }
                        else {
                            loader.dismiss();
                            this.disabledButton = false;
                            this.presentToast(res.msg);
                        }
                    }, (err) => {
                        loader.dismiss();
                        this.disabledButton = false;
                        this.presentAlert('Timeout');
                    });
                });
            }
        });
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'top'
            });
            toast.present();
        });
    }
    presentAlert(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
RegisterVendorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders }
];
RegisterVendorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register-vendor',
        template: _raw_loader_register_vendor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_vendor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterVendorPage);



/***/ }),

/***/ 67970:
/*!***********************************************************!*\
  !*** ./src/app/register-vendor/register-vendor.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  padding-top: 10px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n.container .l {\n  padding-top: 10px;\n}\n.container .l .imga {\n  position: relative;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXZlbmRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0FBQ0o7QUFBSTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLXZlbmRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5se1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAuaW1nYXsgXHJcbiAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 81550:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-vendor/register-vendor.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar  color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/intro\" routerDirection=\"back\">\n        <img src='../../assets/back.svg' />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"container\">\n  <h1>Register Costumer</h1>\n  <ion-input type=\"text\" [(ngModel)]=\"first_name\" placeholder=\"First Name\"></ion-input>\n  <ion-input type=\"text\" [(ngModel)]=\"last_name\" placeholder=\"Last Name\"></ion-input>\n  <ion-input type=\"number\" [(ngModel)]=\"contact_number\" placeholder=\"Contact Number\"></ion-input>\n  <ion-input type=\"text\" [(ngModel)]=\"street\" placeholder=\"House Number/Street/Block Number/Sitio\"></ion-input>\n  <ion-list>\n    <ion-item>\n      <ion-label> Barangay </ion-label>\n      <ion-select [(ngModel)]=\"barangay_name\" placeholder=\"Select One\">\n      <ion-select-option value=\"Burgos\"> Burgos </ion-select-option>\n      <ion-select-option value=\"Luna\"> Luna </ion-select-option>\n      <ion-select-option value=\"Rillo\"> Rillo </ion-select-option>\n      <ion-select-option value=\"Rizal\"> Rizal </ion-select-option>\n      <ion-select-option value=\"Acle\"> Acle </ion-select-option>\n      <ion-select-option value=\"Bayudbud\"> Bayudbud </ion-select-option>\n      <ion-select-option value=\"Bolbok\"> Bolbok </ion-select-option>\n      <ion-select-option value=\"Dalima\"> Dalima </ion-select-option>\n      <ion-select-option value=\"Dao\"> Dao </ion-select-option>\n      <ion-select-option value=\"Guinhawa\"> Guinhawa </ion-select-option>\n      <ion-select-option value=\"Lumbangan\"> Lumbangan </ion-select-option>\n      <ion-select-option value=\"Luntal\"> Luntal </ion-select-option>\n      <ion-select-option value=\"Magahis\"> Magahis </ion-select-option>\n      <ion-select-option value=\"Malibu\"> Malibu </ion-select-option>\n      <ion-select-option value=\"Mataywanac\"> Mataywanac </ion-select-option>\n      <ion-select-option value=\"Palincaro\"> Palincaro </ion-select-option>\n      <ion-select-option value=\"Putol\"> Putol </ion-select-option>\n      <ion-select-option value=\"Sabang\"> Sabang </ion-select-option>\n      <ion-select-option value=\"San Jose\"> San Jose </ion-select-option>\n      <ion-select-option value=\"Talon\"> Talon </ion-select-option>\n      <ion-select-option value=\"Toong\"> Toong </ion-select-option>\n      <ion-select-option value=\"Tuyon-Tuyon\"> Tuyon-Tuyon </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  \n  <ion-label> Business Permit </ion-label>\n  <ion-input type=\"file\" [(ngModel)]=\"business_permit\"></ion-input>\n  <ion-input type=\"text\" [(ngModel)]=\"username\" placeholder=\"Username\"></ion-input>\n  <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"></ion-input>\n  <ion-button (click)=\"tryRegister()\"> Register </ion-button>\n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_register-vendor_register-vendor_module_ts.js.map