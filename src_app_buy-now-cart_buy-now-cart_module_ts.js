(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_buy-now-cart_buy-now-cart_module_ts"],{

/***/ 30708:
/*!*************************************************************!*\
  !*** ./src/app/buy-now-cart/buy-now-cart-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyNowCartPageRoutingModule": () => (/* binding */ BuyNowCartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _buy_now_cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-now-cart.page */ 6537);




const routes = [
    {
        path: '',
        component: _buy_now_cart_page__WEBPACK_IMPORTED_MODULE_0__.BuyNowCartPage
    }
];
let BuyNowCartPageRoutingModule = class BuyNowCartPageRoutingModule {
};
BuyNowCartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuyNowCartPageRoutingModule);



/***/ }),

/***/ 5208:
/*!*****************************************************!*\
  !*** ./src/app/buy-now-cart/buy-now-cart.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyNowCartPageModule": () => (/* binding */ BuyNowCartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _buy_now_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-now-cart-routing.module */ 30708);
/* harmony import */ var _buy_now_cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-now-cart.page */ 6537);







let BuyNowCartPageModule = class BuyNowCartPageModule {
};
BuyNowCartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buy_now_cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuyNowCartPageRoutingModule
        ],
        declarations: [_buy_now_cart_page__WEBPACK_IMPORTED_MODULE_1__.BuyNowCartPage]
    })
], BuyNowCartPageModule);



/***/ }),

/***/ 6537:
/*!***************************************************!*\
  !*** ./src/app/buy-now-cart/buy-now-cart.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyNowCartPage": () => (/* binding */ BuyNowCartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_buy_now_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./buy-now-cart.page.html */ 41783);
/* harmony import */ var _buy_now_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-now-cart.page.scss */ 76129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 22600);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navparam.service */ 61731);











let BuyNowCartPage = class BuyNowCartPage {
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
        this.cart = [];
        this.shipping = "";
        this.a = false;
    }
    ngOnInit() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.name = this.datastorage.first_name;
            this.uid = this.datastorage.user_id;
            this.cart = [];
            return new Promise(resolve => {
                let body = {
                    aksi: 'get_buy_now',
                    uid: this.uid
                };
                this.accessProviders.postData(body, 'buy_now.php').subscribe((res) => {
                    if (res.success == true) {
                        console.log(res.sum);
                        console.log(res.userdata);
                        this.userdata = res.userdata;
                        this.street = this.userdata.street;
                        this.brgy = this.userdata.barangay_name;
                        this.cont_num = this.userdata.contact_number;
                        this.sum = res.sum;
                        this.regular = this.userdata.shipping_fee;
                        this.special = this.userdata.special_shipping;
                        console.log(this.regular);
                        console.log(this.special);
                        console.log(this.sum);
                        this.total = parseInt(res.sum);
                        for (let datas of res.result) {
                            this.cart.push(datas);
                        }
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
    showbuy() {
        this.a = true;
        this.showfee();
    }
    showfee() {
        if (this.shipping == 'regular') {
            this.fee = this.regular;
            this.total = parseInt(this.sum) + parseInt(this.fee);
        }
        else if (this.shipping == 'special') {
            this.fee = this.special;
            this.total = parseInt(this.sum) + parseInt(this.fee);
        }
    }
    cancel() {
        return new Promise(resolve => {
            let body = {
                aksi: 'remove_cart',
            };
            this.accessProviders.postData(body, 'buy_now.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.result);
                    this.router.navigate(['/newhome']);
                }
                else {
                    this.router.navigate(['/newhome']);
                }
            });
        });
    }
    buy() {
        if (this.shipping == "") {
            this.presentToast('Please select shipping option');
        }
        else {
            this.storage.get('storage_xxx').then((res) => {
                console.log(res);
                this.datastorage = res;
                this.name = this.datastorage.first_name;
                this.uid = this.datastorage.user_id;
                this.cart = [];
                return new Promise(resolve => {
                    let body = {
                        aksi: 'get_cart_to_order',
                        uid: this.uid
                    };
                    this.accessProviders.postData(body, 'buy_now.php').subscribe((res) => {
                        if (res.success == true) {
                            this.presentToast(res.result);
                            this.router.navigate(['/confirm-order']);
                        }
                        else {
                            this.presentToast('Failed');
                        }
                    });
                });
            });
        }
    }
};
BuyNowCartPage.ctorParameters = () => [
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
BuyNowCartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-buy-now-cart',
        template: _raw_loader_buy_now_cart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_buy_now_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BuyNowCartPage);



/***/ }),

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

/***/ 76129:
/*!*****************************************************!*\
  !*** ./src/app/buy-now-cart/buy-now-cart.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.cart-items ion-card {\n  margin-left: 25px;\n  margin-right: 25px;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cart-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.cart-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-img img {\n  object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.cart-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: #919191;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(4) {\n  color: var(--ion-color-primary);\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-button {\n  --color: #565656;\n  font-size: 16px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 16px;\n}\n\n.address ion-item {\n  --padding-start: 0;\n  font-size: 18px;\n  color: #434343;\n}\n\n.address ion-item ion-badge {\n  width: 12px;\n  height: 12px;\n  padding: 0;\n  border-radius: 50%;\n}\n\nhr {\n  background: #97979713;\n}\n\n.cart-total ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.cart-total ion-item ion-label {\n  margin-right: 0;\n}\n\n.cart-total ion-item ion-label:nth-child(1) {\n  color: #919191;\n}\n\n.cart-total ion-item ion-label:nth-child(2) {\n  color: #434343;\n}\n\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eS1ub3ctY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBUjs7QUFDUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUNaOztBQUNZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDaEI7O0FBQ2dCO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FBQ3BCOztBQUlnQjtFQUNJLGVBQUE7QUFGcEI7O0FBS2dCO0VBQ0ksY0FBQTtBQUhwQjs7QUFLZ0I7RUFDSSxjQUFBO0FBSHBCOztBQUtnQjtFQUNJLGNBQUE7QUFIcEI7O0FBS2dCO0VBQ0ksK0JBQUE7QUFIcEI7O0FBTWdCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFKcEI7O0FBTW9CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUp4Qjs7QUFPb0I7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFMeEI7O0FBY0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWFI7O0FBYVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVhaOztBQWdCQTtFQUNJLHFCQUFBO0FBYko7O0FBaUJJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQWRSOztBQWdCUTtFQUNJLGVBQUE7QUFkWjs7QUFpQlE7RUFDSSxjQUFBO0FBZlo7O0FBa0JRO0VBQ0ksY0FBQTtBQWhCWjs7QUFxQkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBbEJKOztBQW9CSTtFQUNJLDJCQUFBO0FBbEJSIiwiZmlsZSI6ImJ1eS1ub3ctY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjZweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogIzQzNDM0MztcclxufVxyXG5cclxuLmNhcnQtaXRlbXMge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLml0ZW0taW1nIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW0taW5mbyB7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnF0eS1zZWxlY3RvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiAjNTY1NjU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NjU2NTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFkZHJlc3Mge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICM0MzQzNDM7XHJcblxyXG4gICAgICAgIGlvbi1iYWRnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJhY2tncm91bmQ6ICM5Nzk3OTcxMztcclxufVxyXG5cclxuLmNhcnQtdG90YWwge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWw6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbGFiZWw6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0MzQzNDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgLm1haW4tYnV0dG9uOjphZnRlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 41783:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy-now-cart/buy-now-cart.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\" [text]=\"buttonText\" (click)=\"cancel()\" color=\"light\" routerLink=\"/newhome\" routerDirection=\"back\"> </ion-back-button>\n\n    </ion-buttons> \n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> \n \n<ion-content fullscreen=\"true\">\n  <h1 class=\"title\">Checkout</h1>\n\n    <ion-col size=\"12\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" >\n  \n      <ion-grid fixed >\n        <ion-row>\n  <div class=\"cart-items\" *ngFor=\"let cart of cart\">\n   \n    <ion-card mode=\"ios\">\n      <ion-card-content >\n        <div class=\"item-img\">\n          <img src={{cart.image}}/>\n        </div>\n\n        <div class=\"item-info\">\n          <p >{{cart.product_name}}</p>\n          <p>{{cart.varname1}}: {{cart.classi1}}</p>\n          <p>{{cart.varname2}}: {{cart.classi2}}</p>\n          <p>₱{{cart.price}}</p>\n\n          <div class=\"qty-selector\">\n            <ion-button fill=\"clear\"> </ion-button>\n            <ion-label>{{cart.quantity}}</ion-label>\n            <ion-button fill=\"clear\"> </ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n</div>\n</ion-row>\n</ion-grid>\n\n</ion-col>\n\n<div class=\"address\">\n  <ion-label> Shipping Option</ion-label>\n  <ion-select (ionChange)=\"showbuy()\" interface=\"popover\"[(ngModel)]=\"shipping\" placeholder=\"Select One\">\n  <ion-select-option (click)=\"showfee()\" value=\"regular\" > Regular </ion-select-option>\n  <ion-select-option (click)=\"showfee()\" value=\"special\" > Solo/Special </ion-select-option>\n  </ion-select>\n</div>\n\n  <div class=\"address\">\n    <ion-item lines=\"none\">\n      {{street}}, Barangay: {{brgy}} |  #: {{cont_num}}\n      <ion-badge slot=\"end\">&nbsp;</ion-badge>\n    </ion-item>\n  </div>\n\n  <hr> \n\n  <div class=\"cart-total\">\n    <ion-item lines=\"none\">\n      <ion-label>Sub Total</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">₱{{sum}}.00</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Shipping</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">₱{{fee}}.00</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label>Total</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">₱{{total}}.00</ion-label>\n    </ion-item>\n  </div>\n</ion-content>\n<ion-footer translucent=\"true\" class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar color=\"translucent\">\n    <ion-button expand=\"block\" class=\"main-button\" *ngIf=\"a\" (click)=\"buy()\">Buy</ion-button>\n    <ion-button expand=\"block\" class=\"main-button\" (click)=\"cancel()\">Cancel</ion-button>\n  </ion-toolbar>\n</ion-footer> ");

/***/ })

}]);
//# sourceMappingURL=src_app_buy-now-cart_buy-now-cart_module_ts.js.map