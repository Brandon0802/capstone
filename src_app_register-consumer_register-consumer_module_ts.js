(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_register-consumer_register-consumer_module_ts"],{

/***/ 11417:
/*!***********************************************************************!*\
  !*** ./src/app/register-consumer/register-consumer-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterConsumerPageRoutingModule": () => (/* binding */ RegisterConsumerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _register_consumer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-consumer.page */ 28174);




const routes = [
    {
        path: '',
        component: _register_consumer_page__WEBPACK_IMPORTED_MODULE_0__.RegisterConsumerPage
    }
];
let RegisterConsumerPageRoutingModule = class RegisterConsumerPageRoutingModule {
};
RegisterConsumerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterConsumerPageRoutingModule);



/***/ }),

/***/ 79560:
/*!***************************************************************!*\
  !*** ./src/app/register-consumer/register-consumer.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterConsumerPageModule": () => (/* binding */ RegisterConsumerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _register_consumer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-consumer-routing.module */ 11417);
/* harmony import */ var _register_consumer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-consumer.page */ 28174);







let RegisterConsumerPageModule = class RegisterConsumerPageModule {
};
RegisterConsumerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_consumer_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterConsumerPageRoutingModule
        ],
        declarations: [_register_consumer_page__WEBPACK_IMPORTED_MODULE_1__.RegisterConsumerPage]
    })
], RegisterConsumerPageModule);



/***/ }),

/***/ 28174:
/*!*************************************************************!*\
  !*** ./src/app/register-consumer/register-consumer.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterConsumerPage": () => (/* binding */ RegisterConsumerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_register_consumer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-consumer.page.html */ 17613);
/* harmony import */ var _register_consumer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-consumer.page.scss */ 5488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);







let RegisterConsumerPage = class RegisterConsumerPage {
    constructor(router, toastController, loadingController, alertController, accessProviders) {
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.first_name = "";
        this.last_name = "";
        this.contact_number = "";
        this.street = "";
        this.barangay_name = "";
        this.username = "";
        this.password = "";
        this.retype = "";
        this.agree = false;
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
            else if (this.password != this.retype) {
                this.presentToast('Password does not match');
            }
            else if (this.agree == false) {
                this.presentToast("Confirmation for Terms and Condition is required");
            }
            else {
                this.disabledButton = true;
                return new Promise(resolve => {
                    let body = {
                        aksi: 'process_consumer',
                        first_name: this.first_name,
                        last_name: this.last_name,
                        contact_number: this.contact_number,
                        street: this.street,
                        barangay_name: this.barangay_name,
                        username: this.username,
                        password: this.password
                    };
                    this.accessProviders.postData(body, 'process_consumer.php').subscribe((res) => {
                        if (res.success == true) {
                            this.disabledButton = false;
                            this.presentToast(res.msg);
                            this.router.navigate(['/main']);
                        }
                        else {
                            this.disabledButton = false;
                            this.presentToast(res.msg);
                        }
                    }, (err) => {
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
RegisterConsumerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders }
];
RegisterConsumerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register-consumer',
        template: _raw_loader_register_consumer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_consumer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterConsumerPage);



/***/ }),

/***/ 5488:
/*!***************************************************************!*\
  !*** ./src/app/register-consumer/register-consumer.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  padding-top: 10px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n.container .l {\n  padding-top: 10px;\n}\n.container .l .imga {\n  padding-left: 20px;\n  position: relative;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWNvbnN1bWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7QUFDSjtBQUFJO0VBQ0Qsa0JBQUE7RUFDQyxrQkFBQTtFQUNBLGFBQUE7QUFFSiIsImZpbGUiOiJyZWdpc3Rlci1jb25zdW1lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5se1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAuaW1nYXsgXHJcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 17613:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-consumer/register-consumer.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/intro\" routerDirection=\"back\">\n        <img src='../../assets/back.svg' />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div class=\"container\">\n  <h1 class=\"ion-text-center\">Register as Customer</h1>\n\n  <ion-input type=\"text\" [(ngModel)]=\"first_name\" placeholder=\"First Name\"></ion-input>\n  <ion-input type=\"text\" [(ngModel)]=\"last_name\" placeholder=\"Last Name\"></ion-input>\n  <ion-input type=\"number\" [(ngModel)]=\"contact_number\" placeholder=\"Contact Number\"></ion-input>\n  <ion-input type=\"text\" [(ngModel)]=\"street\" placeholder=\"House Number/Street/Block Number/Sitio\"></ion-input>\n  <ion-list>\n    <ion-item> \n      <ion-label> Barangay </ion-label>\n      <ion-select [(ngModel)]=\"barangay_name\" placeholder=\"Select One\">\n      <ion-select-option value=\"Burgos\"> Burgos </ion-select-option>\n      <ion-select-option value=\"Luna\"> Luna </ion-select-option>\n      <ion-select-option value=\"Rillo\"> Rillo </ion-select-option>\n      <ion-select-option value=\"Rizal\"> Rizal </ion-select-option>\n      <ion-select-option value=\"Acle\"> Acle </ion-select-option>\n      <ion-select-option value=\"Bayudbud\"> Bayudbud </ion-select-option>\n      <ion-select-option value=\"Bolbok\"> Bolbok </ion-select-option>\n      <ion-select-option value=\"Dalima\"> Dalima </ion-select-option>\n      <ion-select-option value=\"Dao\"> Dao </ion-select-option>\n      <ion-select-option value=\"Guinhawa\"> Guinhawa </ion-select-option>\n      <ion-select-option value=\"Lumbangan\"> Lumbangan </ion-select-option>\n      <ion-select-option value=\"Luntal\"> Luntal </ion-select-option>\n      <ion-select-option value=\"Magahis\"> Magahis </ion-select-option>\n      <ion-select-option value=\"Malibu\"> Malibu </ion-select-option>\n      <ion-select-option value=\"Mataywanac\"> Mataywanac </ion-select-option>\n      <ion-select-option value=\"Palincaro\"> Palincaro </ion-select-option>\n      <ion-select-option value=\"Putol\"> Putol </ion-select-option>\n      <ion-select-option value=\"Sabang\"> Sabang </ion-select-option>\n      <ion-select-option value=\"San Jose\"> San Jose </ion-select-option>\n      <ion-select-option value=\"Talon\"> Talon </ion-select-option>\n      <ion-select-option value=\"Toong\"> Toong </ion-select-option>\n      <ion-select-option value=\"Tuyon-Tuyon\"> Tuyon-Tuyon </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  \n  <ion-input type=\"text\" [(ngModel)]=\"username\" placeholder=\"Username\"></ion-input>\n  \n  <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"></ion-input>\n  <ion-input type=\"password\" [(ngModel)]=\"retype\" placeholder=\"Retype-Password\"></ion-input>\n  <ion-item>\n    <ion-label routerLink=\"/terms-and-condition\" routerDirection =\"forward\"> I have read and agree in the <a ion-text = \"positive\">Terms and Conditon</a> of E-Buyan</ion-label>\n    <ion-checkbox routerLink=\"/terms-and-condition\" routerDirection =\"forward\" slot=\"end\"[(ngModel)] = \"agree\"></ion-checkbox>\n  </ion-item>\n  <ion-button expand=\"full\" (click)=\"tryRegister()\"> Register </ion-button>\n<br>\n<br>\n\n<p class=\"ion-text-center\">Or.. register as a partner of Tuy Pocket-Market</p>\n<p class=\"ion-text-center\">  <ion-icon color=\"primary\" routerLink=\"/register-driver\"  name=\"log-in-outline\"></ion-icon></p>\n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_register-consumer_register-consumer_module_ts.js.map