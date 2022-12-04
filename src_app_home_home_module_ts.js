(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_home_home_module_ts"],{

/***/ 65089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 19460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 82711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 65089);
/* harmony import */ var _productlist_productlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../productlist/productlist.page */ 11043);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 19460);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ], declarations: [_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage, _productlist_productlist_page__WEBPACK_IMPORTED_MODULE_1__.ProductlistPage
        ], entryComponents: [_productlist_productlist_page__WEBPACK_IMPORTED_MODULE_1__.ProductlistPage]
    })
], HomePageModule);



/***/ }),

/***/ 19460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ 22600);










let HomePage = class HomePage {
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
        this.device = this.platform.is('mobile');
        this.web = this.platform.is('desktop');
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((data) => {
            this.id = data.id;
            console.log(this.id);
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
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  margin-left: 10px;\n}\n\n.filter {\n  margin-right: 10px;\n}\n\n.search {\n  margin-bottom: 20px;\n}\n\n.search ion-item {\n  border-radius: 10px;\n  box-shadow: 0px 13px 30px 0px rgba(168, 157, 157, 0.09);\n  padding: 8px;\n}\n\n.search ion-item ion-icon {\n  margin-right: 16px;\n}\n\n.search ion-item ion-input {\n  padding-left: 10px !important;\n  border-left: 1px solid #F4F4F4;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n}\n\n.title h2 {\n  margin: 0 0 0 16px;\n  color: #434343;\n}\n\n.title p {\n  margin: 0 16px 0 0;\n  color: #656565;\n}\n\n.category-slider ion-slide {\n  width: 150px;\n  height: 100px;\n  margin-right: 10px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.16);\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.product-slider {\n  margin-bottom: 30px;\n}\n\n.product-slider ion-slide {\n  width: 300px;\n  height: auto;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.product-slider ion-slide ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.product-slider ion-slide ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\nion-slide:focus {\n  outline: none !important;\n}\n\nion-col:focus {\n  outline: none !important;\n}\n\nion-grid {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n}\n\nion-grid ion-row ion-card img {\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 25%;\n}\n\nion-grid ion-row ion-card h1 {\n  padding-left: 10px;\n}\n\nion-grid ion-row ion-card p {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUNFO0VBQ0ksbUJBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7QUFDTjs7QUFDTTtFQUNJLGtCQUFBO0FBQ1Y7O0FBRU07RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0FBQVY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBRkY7O0FBSUU7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFGTjs7QUFLRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUhOOztBQVFFO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUxOOztBQU9NO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTFY7O0FBT1U7RUFDSSxjQUFBO0VBQ0EsU0FBQTtBQUxkOztBQVFVO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxpREFBQTtBQU5kOztBQVlBO0VBQ0UsaUJBQUE7QUFURjs7QUFZQTtFQUNFLG1CQUFBO0FBVEY7O0FBV0U7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUTjs7QUFZVTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVZkOztBQWFVO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBWGQ7O0FBY1U7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFaZDs7QUFtQkE7RUFDRSx3QkFBQTtBQWhCRjs7QUFtQkE7RUFDRSx3QkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFoQkY7O0FBbUJVO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBakJaOztBQW1CVTtFQUNFLGtCQUFBO0FBakJaOztBQW1CVTtFQUNFLGtCQUFBO0FBakJaIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDMwcHggMHB4IHJnYmEoMTY4LCAxNTcsIDE1NywgMC4wOSk7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRjRGNEY0O1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcblxyXG4gIGgyIHtcclxuICAgICAgbWFyZ2luOiAwIDAgMCAxNnB4O1xyXG4gICAgICBjb2xvcjogIzQzNDM0MztcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgICBtYXJnaW46IDAgMTZweCAwIDA7XHJcbiAgICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gIH1cclxufVxyXG5cclxuLmNhdGVnb3J5LXNsaWRlciB7XHJcbiAgaW9uLXNsaWRlIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9udC1ib2xkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnByb2R1Y3Qtc2xpZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICBpb24tc2xpZGUge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFJlbW92aW5nIGhpZ2hsaWdodCB3aGVuIGZvY3VzZWQvY2xpY2tlZCBvbiBwcm9kdWN0XHJcbmlvbi1zbGlkZTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29sOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\" color=\"light\">\n        <ion-menu-button color=\"light\"></ion-menu-button>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-input type=\"text\" (click)=\"search('key')\" padding-start placeholder=\"Search for product...\" class=\"search-bar\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\"  >\n        <ion-icon name=\"notifications-outline\" color=\"light\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n      <ion-button class=\"filter\">\n        <ion-icon name=\"funnel-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content >\n\n  <br>\n\n  <ion-slides *ngIf=\"device\"   [options]=\"slideOpts\" class=\"s\" >\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1041993056699772.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1042384636671754.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1159593211458665.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1189668678534992.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1924815844385323.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_2783694098599019.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_339734398057602.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_734750457541530.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_999155960989795.webp\"/>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-slides *ngIf=\"web\"  [options]=\"slideOpts\" class=\"ss\" >\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1041993056699772.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1042384636671754.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1159593211458665.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1189668678534992.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_1924815844385323.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_2783694098599019.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_339734398057602.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_734750457541530.webp\"/>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/slider/received_999155960989795.webp\"/>\n    </ion-slide>\n  </ion-slides>\n\n  <br>\n  <ion-slides >\n    <ion-slide >\n      <app-productlist></app-productlist>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map