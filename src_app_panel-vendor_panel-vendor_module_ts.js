(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_panel-vendor_panel-vendor_module_ts"],{

/***/ 22600:
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);







let DataService = class DataService {
    constructor(http, accessProviders, storage, toastController, activatedRoute) {
        this.http = http;
        this.accessProviders = accessProviders;
        this.storage = storage;
        this.toastController = toastController;
        this.activatedRoute = activatedRoute;
        this.prods = [];
    }
    getCategories() {
        let categories = [];
        let cat1 = {
            id: 1,
            name: 'Womens',
            image: '../../assets/categories/category-1.png'
        };
        let cat2 = {
            id: 2,
            name: 'Mens',
            image: '../../assets/categories/category-2.png'
        };
        let cat3 = {
            id: 3,
            name: 'Kids',
            image: '../../assets/categories/category-3.png'
        };
        categories.push(cat1, cat2, cat3);
        return categories;
    }
    getFeaturedProducts() {
        let products = [];
        let prod1 = {
            id: 1,
            name: 'Black turtleneck top',
            price: 420,
            image: '../../assets/product-slider/prod-slide1.png'
        };
        let prod2 = {
            id: 2,
            name: "Cat's Eye",
            price: 450,
            image: '../../assets/products/prod-2.png'
        };
        let prod3 = {
            id: 1,
            name: 'Denim',
            price: 540,
            image: '../../assets/products/prod-3.png'
        };
        let prod4 = {
            id: 1,
            name: 'Denim',
            price: 540,
            image: '../../assets/products/prod-3.png'
        };
        let prod5 = {
            id: 1,
            name: 'Denim',
            price: 540,
            image: '../../assets/products/prod-3.png'
        };
        let prod6 = {
            id: 1,
            name: 'Denim',
            price: 540,
            image: '../../assets/products/prod-3.png'
        };
        products.push(prod1, prod2, prod3, prod4, prod5, prod6);
        return products;
    }
    getBestSellProducts() {
        let products = [];
        let prod1 = {
            id: 1,
            name: 'Lotto.LTD',
            price: 380,
            image: '../../assets/products/prod-4.png'
        };
        let prod2 = {
            id: 2,
            name: 'MineSweep',
            price: 320,
            image: '../../assets/products/prod-5.png'
        };
        let prod3 = {
            id: 1,
            name: 'Plus Point',
            price: 390,
            image: '../../assets/cart/cart4.png'
        };
        products.push(prod1, prod2, prod3);
        return products;
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
        });
    }
    getProducts() {
        return new Promise(resolve => {
            let body = {
                aksi: 'get_products',
            };
            this.accessProviders.postData(body, 'get_products.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.msg);
                    console.log(res.result);
                    for (let datas of res.result) {
                        this.prods.push(datas);
                    }
                    console.log(this.prods);
                }
                else {
                    this.presentToast('Failed');
                }
            });
            return this.prods;
        });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_0__.AccessProviders },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 42706:
/*!*************************************************************!*\
  !*** ./src/app/panel-vendor/panel-vendor-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelVendorPageRoutingModule": () => (/* binding */ PanelVendorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _panel_vendor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-vendor.page */ 88163);




const routes = [
    {
        path: '',
        component: _panel_vendor_page__WEBPACK_IMPORTED_MODULE_0__.PanelVendorPage
    }
];
let PanelVendorPageRoutingModule = class PanelVendorPageRoutingModule {
};
PanelVendorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PanelVendorPageRoutingModule);



/***/ }),

/***/ 48536:
/*!*****************************************************!*\
  !*** ./src/app/panel-vendor/panel-vendor.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelVendorPageModule": () => (/* binding */ PanelVendorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _panel_vendor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-vendor-routing.module */ 42706);
/* harmony import */ var _panel_vendor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-vendor.page */ 88163);







let PanelVendorPageModule = class PanelVendorPageModule {
};
PanelVendorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _panel_vendor_routing_module__WEBPACK_IMPORTED_MODULE_0__.PanelVendorPageRoutingModule
        ],
        declarations: [_panel_vendor_page__WEBPACK_IMPORTED_MODULE_1__.PanelVendorPage]
    })
], PanelVendorPageModule);



/***/ }),

/***/ 88163:
/*!***************************************************!*\
  !*** ./src/app/panel-vendor/panel-vendor.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelVendorPage": () => (/* binding */ PanelVendorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_panel_vendor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./panel-vendor.page.html */ 70481);
/* harmony import */ var _panel_vendor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-vendor.page.scss */ 2806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 22600);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navparam.service */ 61731);










let PanelVendorPage = class PanelVendorPage {
    constructor(data, router, loadingController, toastController, alertController, accessProviders, navController, platform, storage, activatedRoute, navParamService) {
        this.data = data;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.platform = platform;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.navParamService = navParamService;
        this.categories = [];
        this.featuredProducts = [];
        this.bestSellProducts = [];
        this.prods = [];
        this.a = false;
        this.b = false;
        this.search = "";
        this.i = 1;
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
        this.categories = this.data.getCategories();
        this.featuredProducts = this.data.getFeaturedProducts();
        this.bestSellProducts = this.data.getBestSellProducts();
        this.prods = [];
        return new Promise(resolve => {
            let body = {
                aksi: 'get_products',
                sid_id: this.sid
            };
            this.accessProviders.postData(body, 'get_products.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.msg);
                    console.log(res.result);
                    for (let datas of res.result) {
                        this.prods.push(datas);
                    }
                }
                else {
                    this.presentToast('Failed');
                }
            });
        });
    }
    doSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.search);
            if (this.search == "") {
                this.presentToast('Please type keyword');
            }
            else {
                const loader = yield this.loadingController.create({
                    message: 'Please wait',
                });
                loader.present();
                this.navParamService.setKey(this.search);
                this.router.navigate(['/search-product']);
                loader.dismiss();
            }
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    ionViewWillEnter() {
        console.log(this.id);
        if (this.id == 1) {
            window.location.reload();
        }
        this.navParamService.clear();
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.sid = this.navParamService.getStoreId();
            if (this.sid == 0) {
                this.sid = this.datastorage.store_id;
            }
            this.name = this.datastorage.first_name;
            this.xyz = this.navParamService.getNavData();
            if (this.sid == 0 && this.xyz == 0) {
                console.log('store does not exist');
                this.a = true;
                this.b = false;
            }
            else {
                console.log('store exist');
                this.b = true;
                this.a = false;
            }
        });
    }
    itemDetails(product_id) {
        console.log(product_id);
        this.navParamService.setNavData(product_id);
        this.router.navigate(['/item-details']);
    }
    navigate(path) {
        this.router.navigate([path]);
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
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'top'
            });
            toast.present();
        });
    }
};
PanelVendorPage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_4__.NavparamService }
];
PanelVendorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-panel-vendor',
        template: _raw_loader_panel_vendor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_panel_vendor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PanelVendorPage);



/***/ }),

/***/ 2806:
/*!*****************************************************!*\
  !*** ./src/app/panel-vendor/panel-vendor.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  margin-left: 10px;\n}\n\n.filter {\n  margin-right: 10px;\n}\n\n.search {\n  margin-bottom: 20px;\n}\n\n.search ion-item {\n  border-radius: 10px;\n  box-shadow: 0px 13px 30px 0px rgba(168, 157, 157, 0.09);\n  padding: 8px;\n}\n\n.search ion-item ion-icon {\n  margin-right: 16px;\n}\n\n.search ion-item ion-input {\n  padding-left: 10px !important;\n  border-left: 1px solid #F4F4F4;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n}\n\n.title h2 {\n  margin: 0 0 0 16px;\n  color: #434343;\n}\n\n.title p {\n  margin: 0 16px 0 0;\n  color: #656565;\n}\n\n.category-slider ion-slide {\n  width: 150px;\n  height: 100px;\n  margin-right: 10px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.16);\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.product-slider {\n  margin-bottom: 30px;\n}\n\n.product-slider ion-slide {\n  width: 300px;\n  height: auto;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.product-slider ion-slide ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.product-slider ion-slide ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\nion-slide:focus {\n  outline: none !important;\n}\n\nion-col:focus {\n  outline: none !important;\n}\n\nion-grid {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  height: 50%;\n}\n\nion-grid ion-row ion-card img {\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\nion-grid ion-row ion-card h1 {\n  padding-left: 10px;\n}\n\nion-grid ion-row ion-card p {\n  padding-left: 10px;\n}\n\n.card {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n  align-items: center;\n  height: 100%;\n}\n\n.card .pclass p {\n  font-size: 20px;\n}\n\n.price {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n\n.inline {\n  font-size: 15px;\n  margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n\n.badge {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLXZlbmRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDSSxtQkFBQTtFQUNBLHVEQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUNNO0VBQ0ksa0JBQUE7QUFDVjs7QUFFTTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUFBVjs7QUFLQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFGRjs7QUFJRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUZOOztBQUtFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBSE47O0FBUUU7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTE47O0FBT007RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMVjs7QUFPVTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FBTGQ7O0FBUVU7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0FBTmQ7O0FBWUE7RUFDRSxpQkFBQTtBQVRGOztBQVlBO0VBQ0UsbUJBQUE7QUFURjs7QUFXRTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVROOztBQVlVO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVmQ7O0FBYVU7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFYZDs7QUFjVTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVpkOztBQW1CQTtFQUNFLHdCQUFBO0FBaEJGOztBQW1CQTtFQUNFLHdCQUFBO0FBaEJGOztBQW1CQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWhCRjs7QUFtQlU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQWpCWjs7QUFtQlU7RUFDRSxrQkFBQTtBQWpCWjs7QUFtQlU7RUFDRSxrQkFBQTtBQWpCWjs7QUF3QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFyQkY7O0FBdUJNO0VBQ0ksZUFBQTtBQXJCVjs7QUF5QkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUF0QkY7O0FBd0JBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFyQkY7O0FBdUJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFwQkY7O0FBc0JBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFuQkYiLCJmaWxlIjoicGFuZWwtdmVuZG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMTNweCAzMHB4IDBweCByZ2JhKDE2OCwgMTU3LCAxNTcsIDAuMDkpO1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0Y0RjRGNDtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG5cclxuICBoMiB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcclxuICAgICAgY29sb3I6ICM0MzQzNDM7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgICAgbWFyZ2luOiAwIDE2cHggMCAwO1xyXG4gICAgICBjb2xvcjogIzY1NjU2NTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1zbGlkZXIge1xyXG4gIGlvbi1zbGlkZSB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvbnQtYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXNsaWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgaW9uLXNsaWRlIHtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZW1vdmluZyBoaWdobGlnaHQgd2hlbiBmb2N1c2VkL2NsaWNrZWQgb24gcHJvZHVjdFxyXG5pb24tc2xpZGU6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gICAgICBpb24tcm93e1xyXG4gICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4OyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiB1bnNldDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAucGNsYXNze1xyXG4gICAgICBwe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG59IFxyXG4ucHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDNweDtcclxufVxyXG4uaW5saW5lIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMTIsIDEyLCAuNzUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 70481:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panel-vendor/panel-vendor.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-menu-button slot=\"start\" menu=\"main-menu\" color=\"light\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-menu-button>\n    <ion-buttons slot=\"end\">\n\n      <ion-button routerLink=\"/add-products\"  >\n        <ion-icon name=\"add-circle-outline\" color=\"light\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n      <ion-button routerLink=\"/orders\">\n        <ion-icon name=\"receipt-outline\" color=\"light\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"logout()\">\n        <ion-icon fill=\"white\" name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n \n</ion-header>\n \n<ion-content> \n    \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ng-container *ngIf =\"a\" >\n   <div class=\"container\">\n        <ion-item lines=\"none\"  class =\"ion-text-center\" detail=\"false\" >\n          <ion-label>Hi {{ name }}! Lets first name your store. </ion-label>\n        </ion-item>\n        <ion-button expand=\"full\" class=\"ion-padding\" (click)=\"navigate('/create-store')\" >Create Store</ion-button>\n\n    </div>\n  </ng-container>\n\n\n     <ng-container *ngIf =\"b\" >\n      <div class=\"search ion-padding\">\n        <ion-item lines=\"none\">\n          <ion-input placeholder=\"Search Your Product\" [(ngModel)]=\"search\"> </ion-input>\n          <ion-icon (click)=\"doSearch()\" name=\"search-outline\" slot=\"end\"></ion-icon>\n        </ion-item>\n        <br>\n        <br>\n           <ion-button (click)=\"navigate('/add-products')\" >Add Product</ion-button>\n           <ion-button (click)=\"navigate('/orders')\" >View Orders</ion-button>\n         \n      </div>\n    \n      <div class=\"title ion-padding\">\n        <h2 class=\"font-bold\">Your Products</h2>\n      </div>\n     \n      <div class=\"product-slider ion-padding-start\" *ngIf=\"web\">\n        <ion-row>\n          <ion-col *ngFor=\"let prods of prods\" size=\"3\">\n            <ion-card class=\"card\" no-margin  (click)=\"itemDetails(prods.product_id)\" routerDirection=\"forward\">\n              <ion-badge class=\"badge\" ></ion-badge>\n              <img [src]=\"prods.product_image\" [alt]=\"prods.product_name\">\n              <ion-card-content>\n                <ion-card-title>\n                  <ion-row>\n                    <ion-col class=\"pclass\" no-padding>\n                      <p >{{prods.product_name}}</p>\n                    </ion-col>\n                  </ion-row>\n                  <p>₱{{prods.var_price}}.00</p>\n                </ion-card-title>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n  </ng-container>\n\n\n  <ion-grid *ngIf=\"device\">\n    <ion-row>\n      <ion-col *ngFor=\"let prods of prods\" size=\"6\">\n        <ion-card class=\"card\" no-margin  (click)=\"itemDetails(prods.product_id)\" routerDirection=\"forward\">\n          <ion-badge class=\"badge\" ></ion-badge>\n          <img [src]=\"prods.product_image\" [alt]=\"prods.product_name\">\n          <ion-card-content>\n            <ion-card-title>\n              <ion-row>\n                <ion-col class=\"pclass\" no-padding>\n                  <p >{{prods.product_name}}</p>\n                </ion-col>\n              </ion-row>\n              <p>₱{{prods.var_price}}.00</p>\n            </ion-card-title>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_panel-vendor_panel-vendor_module_ts.js.map