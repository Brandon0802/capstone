(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_main_main_module_ts"],{

/***/ 94656:
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 7629);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 79580:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 94656);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 7629);







let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 7629:
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main.page.html */ 52788);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 37960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);









let MainPage = class MainPage {
    constructor(router, loadingController, toastController, alertController, accessProviders, navController, storage, navParamService) {
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.storage = storage;
        this.navParamService = navParamService;
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.disabledButton = false;
    }
    openRegister() {
        this.router.navigate(['/register']);
    }
    intro() {
        this.router.navigate(['/intro']);
    }
    tryLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.username == "") {
                this.presentToast('Username is blank!');
            }
            else if (this.password == "") {
                this.presentToast('Password is blank!');
            }
            else {
                this.disabledButton = true;
                const loader = yield this.loadingController.create({
                    message: 'Please wait',
                });
                loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'processii_login',
                        username: this.username,
                        password: this.password
                    };
                    this.accessProviders.postData(body, 'process_login.php').subscribe((res) => {
                        console.log(res.result);
                        console.log(res.msg);
                        if (res.success == true) {
                            this.storage.set('storage_xxx', res.result);
                            loader.dismiss();
                            this.disabledButton = false;
                            this.presentToast('Login Successfully!');
                            if (res.msg == "Admin") {
                                this.navController.navigateRoot(['/panel-admin/']);
                                this.storage.set('storage_xxx', res.result);
                                console.log(res.result);
                            }
                            else if (res.msg == "Consumer") {
                                this.navController.navigateRoot(['/newhome/']);
                                this.storage.set('storage_xxx', res.result);
                            }
                            else if (res.msg == "Driver") {
                                this.navController.navigateRoot(['/panel-driver/']);
                                this.storage.set('storage_xxx', res.result);
                            }
                            else if (res.msg == "Vendor") {
                                this.navController.navigateRoot(['/panel-vendor/']);
                                this.storage.set('storage_xxx', res.result);
                            }
                            this.storage.set('storage_xxx', res.result);
                        }
                        else {
                            loader.dismiss();
                            this.disabledButton = false;
                            this.presentToast('Wrong login credentials');
                        }
                    });
                });
            }
        });
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
MainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService }
];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainPage);



/***/ }),

/***/ 37960:
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  padding-top: 10px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n.container .l .imga {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUk7RUFDQSxhQUFBO0FBQUoiLCJmaWxlIjoibWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5se1xyXG4gICAgLmltZ2F7IFxyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 52788:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  \n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n\n    <div class=\"l\"(click) = \"intro()\">\n      <img class=\"imga\" src=\"../assets/logo (2).png\">\n      \n\n  </div>\n    \n\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"username\" placeholder=\"Username\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-button expand=\"full\"  (click)=\"tryLogin()\"> Login </ion-button>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <p> Don't have an account? <a routerLink=\"/register-consumer\"> Register </a></p>\n    </ion-item>\n    \n  </div>\n    \n\n  \n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_module_ts.js.map