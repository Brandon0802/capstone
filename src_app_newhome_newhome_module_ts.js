(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_newhome_newhome_module_ts"],{

/***/ 92629:
/*!***************************************************!*\
  !*** ./src/app/newhome/newhome-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewhomePageRoutingModule": () => (/* binding */ NewhomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _newhome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newhome.page */ 80073);




const routes = [
    {
        path: '',
        component: _newhome_page__WEBPACK_IMPORTED_MODULE_0__.NewhomePage
    }
];
let NewhomePageRoutingModule = class NewhomePageRoutingModule {
};
NewhomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewhomePageRoutingModule);



/***/ }),

/***/ 97946:
/*!*******************************************!*\
  !*** ./src/app/newhome/newhome.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewhomePageModule": () => (/* binding */ NewhomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _productlist_productlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../productlist/productlist.page */ 11043);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _newhome_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newhome-routing.module */ 92629);
/* harmony import */ var _newhome_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newhome.page */ 80073);








let NewhomePageModule = class NewhomePageModule {
};
NewhomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _newhome_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewhomePageRoutingModule
        ],
        declarations: [_newhome_page__WEBPACK_IMPORTED_MODULE_2__.NewhomePage, _productlist_productlist_page__WEBPACK_IMPORTED_MODULE_0__.ProductlistPage
        ], entryComponents: [_productlist_productlist_page__WEBPACK_IMPORTED_MODULE_0__.ProductlistPage]
    })
], NewhomePageModule);



/***/ }),

/***/ 80073:
/*!*****************************************!*\
  !*** ./src/app/newhome/newhome.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewhomePage": () => (/* binding */ NewhomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_newhome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./newhome.page.html */ 46118);
/* harmony import */ var _newhome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newhome.page.scss */ 19693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ 22600);










let NewhomePage = class NewhomePage {
    constructor(router, menuCtrl, dataService, loadingController, toastController, alertController, accessProviders, navController, storage, platform, activatedRoute, navParamService) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.storage = storage;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.navParamService = navParamService;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.prods = [];
        this.id = 0;
        this.device = true;
        this.web = true;
        this.key = "";
        this.device = this.platform.is('mobile');
        this.web = this.platform.is('desktop');
        if (this.web == true) {
            //this.menuCtrl.enable(false);
        }
        ;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((data) => {
            this.id = data.id;
            console.log(this.id);
        });
    }
    newhome() {
        this.router.navigate(['/newhome/1']);
    }
    search() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.key == "") {
                this.presentToast('Please type keyword');
            }
            else {
                const loader = yield this.loadingController.create({
                    message: 'Please wait',
                });
                loader.present();
                this.navParamService.setKey(this.key);
                this.router.navigate(['/search']);
                loader.dismiss();
            }
        });
    }
    ionViewWillEnter() {
        if (this.id == 1) {
            window.location.reload();
        }
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.name = this.datastorage.first_name;
            this.uid = this.datastorage.user_id;
        });
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
        });
    }
    presentAlert(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                message: 'Please wait',
            });
            loader.present();
            loader.dismiss();
            this.storage.clear();
            this.presentToast('Log out successfully');
            this.navController.navigateRoot(['/intro']);
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
};
NewhomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService }
];
NewhomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-newhome',
        template: _raw_loader_newhome_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_newhome_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewhomePage);



/***/ }),

/***/ 19693:
/*!*******************************************!*\
  !*** ./src/app/newhome/newhome.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.menu {\n  color: white !important;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n\n.s {\n  border-radius: 9px;\n  margin-left: 9px;\n  margin-right: 9px;\n}\n\n.ss {\n  border-radius: 9px;\n  margin-left: 9px;\n  margin-right: 9px;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQUE7RUFDSSx1QkFBQTtBQUdKOztBQURBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7QUFNSjs7QUFMSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFPUjs7QUFKQTtFQUNJLHVCQUFBO0FBT0o7O0FBSkE7RUFDSSxrQkFBQTtBQU9KOztBQU5JO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFRUjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQU9KIiwiZmlsZSI6Im5ld2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDsgXHJcbn1cclxuLmhvci1zY3JvbGx7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLm1lbnUge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7ICAgIFxyXG59XHJcbi5teS1idG57XHJcbiAgICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgICBtYXJnaW46IDAgMTJweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWluLWhlaWdodDogMjVweDtcclxufVxyXG4udGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5idG4tYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG59XHJcbiNkYWd7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLnNlZ21lbnR0b29sYmFyU2VjdGlvbntcclxuICAgIC0tbWluLWhlaWdodDogMzBweDtcclxuICAgIC5zZWdTZWN0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6MzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnN7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbn1cclxuXHJcbi5zc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxuICAgIGhlaWdodDogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ 46118:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newhome/newhome.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\" color=\"light\">\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-menu-button>\n      <ion-button class=\"notification\" (click)=\"newhome()\"  >\n        <ion-icon name=\"home-outline\" color=\"light\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n    </ion-buttons>\n    <ion-input type=\"text\"  [(ngModel)]=\"key\" padding-start placeholder=\"Search for product...\" class=\"search-bar\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\" (click)=\"search()\"  >\n        <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n      <ion-button class=\"filter\" routerLink=\"/mycart\" routerDirection=\"forward\">\n        <ion-icon name=\"cart-outline\" color=\"light\" ></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"logout()\">\n        <ion-icon fill=\"white\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content > \n  \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <br>\n\n  <ion-slides *ngIf=\"device\"   [options]=\"slideOpts\" class=\"s\" >\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1041993056699772.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1042384636671754.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1159593211458665.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1189668678534992.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1924815844385323.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_2783694098599019.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_339734398057602.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_734750457541530.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_999155960989795.webp\"/>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides *ngIf=\"web\"  [options]=\"slideOpts\" class=\"ss\" >\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1041993056699772.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1042384636671754.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1159593211458665.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1189668678534992.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1924815844385323.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_2783694098599019.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_339734398057602.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_734750457541530.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_999155960989795.webp\"/>\n    </ion-slide>\n  </ion-slides>\n \n  <br>\n  <ion-slides >\n    <ion-slide >\n      <app-productlist></app-productlist>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_newhome_newhome_module_ts.js.map