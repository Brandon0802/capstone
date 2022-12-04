(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_my-profile_my-profile_module_ts"],{

/***/ 6358:
/*!*********************************************************!*\
  !*** ./src/app/my-profile/my-profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfilePageRoutingModule": () => (/* binding */ MyProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-profile.page */ 26286);




const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_0__.MyProfilePage
    }
];
let MyProfilePageRoutingModule = class MyProfilePageRoutingModule {
};
MyProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyProfilePageRoutingModule);



/***/ }),

/***/ 37875:
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfilePageModule": () => (/* binding */ MyProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-profile-routing.module */ 6358);
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile.page */ 26286);







let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyProfilePageRoutingModule
        ],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_1__.MyProfilePage]
    })
], MyProfilePageModule);



/***/ }),

/***/ 26286:
/*!***********************************************!*\
  !*** ./src/app/my-profile/my-profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfilePage": () => (/* binding */ MyProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_my_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-profile.page.html */ 37955);
/* harmony import */ var _my_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile.page.scss */ 17506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 75481);








let MyProfilePage = class MyProfilePage {
    constructor(router, loadingController, toastController, alertController, accessProviders, navController, storage) {
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.storage = storage;
        this.img = "";
        this.disable = true;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.fname = this.datastorage.first_name;
            this.lname = this.datastorage.last_name;
            this.contactnumber = this.datastorage.contact_number;
            this.barangay = this.datastorage.barangay_name;
            this.business = this.datastorage.business_permit;
            this.licensce = this.datastorage.drivers_license;
            this.type = this.datastorage.type;
            if (this.business != null && this.licensce == null && this.type == null) {
                this.customer = true;
                this.driver = true;
                this.img = "../../assets/back-dark.svg";
            }
            else if (this.business == null && this.licensce != null && this.type == null) {
                this.customer = true;
                this.vendor = true;
                this.img = "../../assets/back-dark.svg";
            }
            else if (this.business == null && this.licensce == null && this.type != null) {
                this.vendor = true;
                this.driver = true;
                this.img = "../../assets/back-dark.svg";
            }
        });
    }
};
MyProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage }
];
MyProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-my-profile',
        template: _raw_loader_my_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyProfilePage);



/***/ }),

/***/ 17506:
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.profile-info {\n  padding-top: 20px;\n}\n\n.profile-info ion-item {\n  --padding-start: 0;\n  --border-color: #97979713;\n}\n\n.profile-info ion-item ion-label {\n  color: #919191;\n  font-size: larger;\n}\n\n.profile-info ion-item ion-input {\n  --color: #434343;\n}\n\nion-grid {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.button-container {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFHRTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUFETjs7QUFHTTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQURWOztBQUlNO0VBQ0ksZ0JBQUE7QUFGVjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKRiIsImZpbGUiOiJteS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjZweDtcclxuICAtLXBhZGRpbmctZW5kOiAyNnB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgY29sb3I6ICM0MzQzNDM7XHJcbn1cclxuXHJcbi5wcm9maWxlLWluZm8ge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgLS1ib3JkZXItY29sb3I6ICM5Nzk3OTcxMztcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBjb2xvcjogIzkxOTE5MTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgLS1jb2xvcjogIzQzNDM0MztcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ 37955:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\" [text]=\"buttonText\" color=\"light\" [hidden]=\"customer\" routerLink=\"/newhome\" >\n        <img src={{img}}/>\n      </ion-back-button>\n      <ion-back-button [icon]=\"buttonIcon\" [text]=\"buttonText\" color=\"light\" [hidden]=\"vendor\" routerLink=\"/panel-vendor\">\n        <img src={{img}}/>\n      </ion-back-button>\n      <ion-back-button [icon]=\"buttonIcon\" [text]=\"buttonText\" color=\"light\" [hidden]=\"driver\" routerLink=\"/panel-driver\">\n        <img src={{img}}/>\n      </ion-back-button>\n      </ion-buttons>\n\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <h1 class=\"title\">Profile</h1>\n\n    <ion-row>\n      <ion-col text-center>\n        <div class=\"profile-info\">\n          <ion-item>\n            <ion-label position=\"floating\">Name</ion-label>\n            <ion-input value=\"{{fname}} {{lname}}\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Address</ion-label>\n            <ion-input value=\"Barangay {{barangay}}\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input value=\"brandon@gmail.com\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Phone Number</ion-label>\n            <ion-input value=\"0{{contactnumber}}\"></ion-input>\n          </ion-item>\n          <br>\n          <br>\n          <br>\n        </div>\n            \n       \n      </ion-col>\n    </ion-row>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_my-profile_my-profile_module_ts.js.map