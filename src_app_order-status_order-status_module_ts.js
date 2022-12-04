(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_order-status_order-status_module_ts"],{

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

/***/ 45049:
/*!*************************************************************!*\
  !*** ./src/app/order-status/order-status-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatusPageRoutingModule": () => (/* binding */ OrderStatusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _order_status_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-status.page */ 82934);




const routes = [
    {
        path: '',
        component: _order_status_page__WEBPACK_IMPORTED_MODULE_0__.OrderStatusPage
    }
];
let OrderStatusPageRoutingModule = class OrderStatusPageRoutingModule {
};
OrderStatusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderStatusPageRoutingModule);



/***/ }),

/***/ 49323:
/*!*****************************************************!*\
  !*** ./src/app/order-status/order-status.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatusPageModule": () => (/* binding */ OrderStatusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _order_status_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-status-routing.module */ 45049);
/* harmony import */ var _order_status_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-status.page */ 82934);







let OrderStatusPageModule = class OrderStatusPageModule {
};
OrderStatusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderStatusPageRoutingModule
        ],
        declarations: [_order_status_page__WEBPACK_IMPORTED_MODULE_1__.OrderStatusPage]
    })
], OrderStatusPageModule);



/***/ }),

/***/ 82934:
/*!***************************************************!*\
  !*** ./src/app/order-status/order-status.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatusPage": () => (/* binding */ OrderStatusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_order_status_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-status.page.html */ 57132);
/* harmony import */ var _order_status_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-status.page.scss */ 62242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 22600);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navparam.service */ 61731);











let OrderStatusPage = class OrderStatusPage {
    constructor(animatioCntrl, data, router, loadingController, toastController, alertController, accessProviders, navController, storage, activatedRoute, navParamService) {
        this.animatioCntrl = animatioCntrl;
        this.data = data;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.navParamService = navParamService;
        this.order = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.order = [];
        this.orderid = this.navParamService.getNavData();
        console.log(this.orderid);
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.id = res.user_id;
            return new Promise(resolve => {
                console.log(this.orderid);
                let body = {
                    aksi: 'get_orders_costumer',
                    orderid: this.orderid,
                    id: this.id
                };
                this.accessProviders.postData(body, 'get_orders.php').subscribe((res) => {
                    if (res.success == true) {
                        console.log(res.result);
                        for (let datas of res.result) {
                            this.order.push(datas);
                        }
                        this.user = res.user;
                        this.fname = this.user.first_name;
                        this.lname = this.user.last_name;
                        this.num = this.user.contact_number;
                        this.brgy = this.user.barangay_name;
                        this.street = this.user.street;
                    }
                    else {
                        this.presentToast('Failed');
                    }
                });
            });
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
OrderStatusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AnimationController },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_4__.NavparamService }
];
OrderStatusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-order-status',
        template: _raw_loader_order_status_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_status_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderStatusPage);



/***/ }),

/***/ 62242:
/*!*****************************************************!*\
  !*** ./src/app/order-status/order-status.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content ion-grid {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\nion-content ion-grid ion-col {\n  border: 2px solid #080808;\n}\nion-content .bg {\n  background: linear-gradient(to bottom, #2188db 0%, #ffffff 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXN0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSE47QUFJTTtFQUNFLHlCQUFBO0FBRlI7QUFLTTtFQUNJLGdFQUFBO0FBSFYiLCJmaWxlIjoib3JkZXItc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudHtcclxuXHJcblxyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzA4MDgwODtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJne1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIxODhkYiAwJSwgI2ZmZmZmZiAxMDAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgIl19 */");

/***/ }),

/***/ 57132:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-status/order-status.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-buttons class=\"backbtn\" routerLink=\"/transactions-consumer\" routerDirection=\"back\">\n        <img src=\"../../assets/back.svg\" />\n      </ion-buttons>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngFor=\"let order of order\">\n  <br>\n  <h1>{{order.confirmation}}</h1>\n  <br>\n  <br>\n    <p>Customer Name: {{fname}} {{lname}}</p>\n    <p> Number: {{num}}</p>\n    <p>Address: {{street}}, Brgy. {{brgy}}</p>\n   \n    <ion-col size=\"12\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n    <ion-grid >\n      <ion-row>\n        <div class=\"cart-items\"   >\n          <ion-card mode=\"ios\">\n            <ion-card-content >\n              <div class=\"item-info\">\n                <p>Product: {{order.product}}</p>\n                <p>Variation: {{order.classification1}}  {{order.classification2}}</p>\n                <p>Quantity: {{order.quantity}}</p> \n              </div>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </ion-col>\n\n \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_order-status_order-status_module_ts.js.map