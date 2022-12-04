(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_checkout_checkout_module_ts"],{

/***/ 71963:
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageRoutingModule": () => (/* binding */ CheckoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page */ 66369);




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_0__.CheckoutPage
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ 16311:
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageModule": () => (/* binding */ CheckoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-routing.module */ 71963);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page */ 66369);







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutPageRoutingModule
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_1__.CheckoutPage]
    })
], CheckoutPageModule);



/***/ }),

/***/ 66369:
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPage": () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./checkout.page.html */ 66646);
/* harmony import */ var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page.scss */ 5554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 22600);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navparam.service */ 61731);











let CheckoutPage = class CheckoutPage {
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
                    aksi: 'get_cart',
                    uid: this.uid
                };
                this.accessProviders.postData(body, 'get_cart.php').subscribe((res) => {
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
        this.router.navigate(['/mycart']);
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
                        uid: this.uid,
                        shipping: this.shipping
                    };
                    this.accessProviders.postData(body, 'get_cart.php').subscribe((res) => {
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
CheckoutPage.ctorParameters = () => [
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
CheckoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckoutPage);



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

/***/ 5554:
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.cart-items ion-card {\n  margin-left: 25px;\n  margin-right: 25px;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cart-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.cart-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-img img {\n  object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.cart-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: #919191;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(4) {\n  color: var(--ion-color-primary);\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-button {\n  --color: #565656;\n  font-size: 16px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 16px;\n}\n\n.address ion-item {\n  --padding-start: 0;\n  font-size: 18px;\n  color: #434343;\n}\n\n.address ion-item ion-badge {\n  width: 12px;\n  height: 12px;\n  padding: 0;\n  border-radius: 50%;\n}\n\nhr {\n  background: #97979713;\n}\n\n.cart-total ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.cart-total ion-item ion-label {\n  margin-right: 0;\n}\n\n.cart-total ion-item ion-label:nth-child(1) {\n  color: #919191;\n}\n\n.cart-total ion-item ion-label:nth-child(2) {\n  color: #434343;\n}\n\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFSOztBQUNRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQ1o7O0FBQ1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNoQjs7QUFDZ0I7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUFDcEI7O0FBSWdCO0VBQ0ksZUFBQTtBQUZwQjs7QUFLZ0I7RUFDSSxjQUFBO0FBSHBCOztBQUtnQjtFQUNJLGNBQUE7QUFIcEI7O0FBS2dCO0VBQ0ksY0FBQTtBQUhwQjs7QUFLZ0I7RUFDSSwrQkFBQTtBQUhwQjs7QUFNZ0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUpwQjs7QUFNb0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSnhCOztBQU9vQjtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUx4Qjs7QUFjSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFYUjs7QUFhUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBWFo7O0FBZ0JBO0VBQ0kscUJBQUE7QUFiSjs7QUFpQkk7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBZFI7O0FBZ0JRO0VBQ0ksZUFBQTtBQWRaOztBQWlCUTtFQUNJLGNBQUE7QUFmWjs7QUFrQlE7RUFDSSxjQUFBO0FBaEJaOztBQXFCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFsQko7O0FBb0JJO0VBQ0ksMkJBQUE7QUFsQlIiLCJmaWxlIjoiY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tidG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDI2cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICM0MzQzNDM7XHJcbn1cclxuXHJcbi5jYXJ0LWl0ZW1zIHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5pdGVtLWltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pdGVtLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDM0MztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzkxOTE5MTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzkxOTE5MTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5xdHktc2VsZWN0b3Ige1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogIzU2NTY1NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTY1NjU2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZGRyZXNzIHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xyXG5cclxuICAgICAgICBpb24tYmFkZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5ociB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk3MTM7XHJcbn1cclxuXHJcbi5jYXJ0LXRvdGFsIHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxhYmVsOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxhYmVsOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 66646:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\" [text]=\"buttonText\" color=\"light\" routerLink=\"/newhome\" routerDirection=\"back\"> </ion-back-button>\n\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content fullscreen=\"true\">\n  <h1 class=\"title\">Checkout</h1>\n\n    <ion-col size=\"12\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" >\n  \n      <ion-grid fixed >\n        <ion-row>\n  <div class=\"cart-items\" *ngFor=\"let cart of cart\">\n   \n    <ion-card mode=\"ios\">\n      <ion-card-content >\n        <div class=\"item-img\">\n          <img src={{cart.image}}/>\n        </div>\n\n        <div class=\"item-info\">\n          <p >{{cart.product_name}}</p>\n          <p>{{cart.varname1}}: {{cart.classi1}}</p>\n          <p>{{cart.varname2}}: {{cart.classi2}}</p>\n          <p>₱{{cart.price}}</p>\n\n          <div class=\"qty-selector\">\n            <ion-button fill=\"clear\"> </ion-button>\n            <ion-label>{{cart.quantity}}</ion-label>\n            <ion-button fill=\"clear\"> </ion-button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n</div>\n</ion-row>\n</ion-grid>\n</ion-col>\n\n  <div class=\"address\">\n    <ion-label> Shipping Option</ion-label>\n    <ion-select (ionChange)=\"showbuy()\" interface=\"popover\"[(ngModel)]=\"shipping\" placeholder=\"Select One\">\n    <ion-select-option (click)=\"showfee()\" value=\"regular\" > Regular </ion-select-option>\n    <ion-select-option (click)=\"showfee()\" value=\"special\" > Solo/Special </ion-select-option>\n    </ion-select>\n  </div>\n\n  <div class=\"address\">\n    <ion-item lines=\"none\">\n      {{street}}, Barangay: {{brgy}} |  #: {{cont_num}}\n      <ion-badge slot=\"end\">&nbsp;</ion-badge>\n    </ion-item>\n  </div>\n\n  <hr>\n\n  <div class=\"cart-total\">\n    <ion-item lines=\"none\">\n      <ion-label>Sub Total</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">₱{{sum}}.00</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Shipping</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">₱{{fee}}.00</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label>Total</ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-right\">₱{{total}}.00</ion-label>\n    </ion-item>\n  </div>\n</ion-content>\n<ion-footer translucent=\"true\" class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar color=\"translucent\">\n    <ion-button expand=\"block\" class=\"main-button\"  *ngIf=\"a\" (click)=\"buy()\">Buy</ion-button>\n    <ion-button expand=\"block\" class=\"main-button\" routerLink=\"/mycart\" routerDirection=\"backward\">Cancel</ion-button>\n    </ion-toolbar>\n</ion-footer> ");

/***/ })

}]);
//# sourceMappingURL=src_app_checkout_checkout_module_ts.js.map