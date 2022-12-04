(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_approve-orders_approve-orders_module_ts"],{

/***/ 49147:
/*!*****************************************************************!*\
  !*** ./src/app/approve-orders/approve-orders-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApproveOrdersPageRoutingModule": () => (/* binding */ ApproveOrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _approve_orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approve-orders.page */ 12292);




const routes = [
    {
        path: '',
        component: _approve_orders_page__WEBPACK_IMPORTED_MODULE_0__.ApproveOrdersPage
    }
];
let ApproveOrdersPageRoutingModule = class ApproveOrdersPageRoutingModule {
};
ApproveOrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApproveOrdersPageRoutingModule);



/***/ }),

/***/ 30050:
/*!*********************************************************!*\
  !*** ./src/app/approve-orders/approve-orders.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApproveOrdersPageModule": () => (/* binding */ ApproveOrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _approve_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approve-orders-routing.module */ 49147);
/* harmony import */ var _approve_orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approve-orders.page */ 12292);







let ApproveOrdersPageModule = class ApproveOrdersPageModule {
};
ApproveOrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _approve_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApproveOrdersPageRoutingModule
        ],
        declarations: [_approve_orders_page__WEBPACK_IMPORTED_MODULE_1__.ApproveOrdersPage]
    })
], ApproveOrdersPageModule);



/***/ }),

/***/ 12292:
/*!*******************************************************!*\
  !*** ./src/app/approve-orders/approve-orders.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApproveOrdersPage": () => (/* binding */ ApproveOrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_approve_orders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./approve-orders.page.html */ 23377);
/* harmony import */ var _approve_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approve-orders.page.scss */ 90195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 22600);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navparam.service */ 61731);











let ApproveOrdersPage = class ApproveOrdersPage {
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
        this.orderid = this.navParamService.getOrderID();
        this.userid = this.navParamService.getNavData();
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            return new Promise(resolve => {
                console.log(this.orderid);
                let body = {
                    aksi: 'get_orders_to_approve',
                    orderid: this.orderid,
                    userid: this.userid
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
    approve() {
        console.log(this.num);
        return new Promise(resolve => {
            console.log(this.orderid);
            let body = {
                aksi: 'approve_order',
                num: this.num,
                orderid: this.orderid,
                name: this.fname
            };
            this.accessProviders.postData(body, 'approve_order.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.result);
                    this.navController.navigateRoot(['/orders']);
                }
                else {
                    this.presentToast('Failed');
                }
            });
        });
    }
    disapprove() {
        console.log(this.num);
        return new Promise(resolve => {
            console.log(this.orderid);
            let body = {
                aksi: 'disapprove_order',
                num: this.num,
                orderid: this.orderid,
                name: this.fname
            };
            this.accessProviders.postData(body, 'approve_order.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.result);
                    this.navController.navigateRoot(['/orders']);
                }
                else {
                    this.presentToast('Failed');
                }
            });
        });
    }
};
ApproveOrdersPage.ctorParameters = () => [
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
ApproveOrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-approve-orders',
        template: _raw_loader_approve_orders_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_approve_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ApproveOrdersPage);



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

/***/ 90195:
/*!*********************************************************!*\
  !*** ./src/app/approve-orders/approve-orders.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.cart-items ion-card {\n  margin-left: 25px;\n  margin-right: 25px;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cart-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.cart-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-img img {\n  object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.cart-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #000000;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #000000;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: #000000;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(4) {\n  color: #000000;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(5) {\n  color: #000000;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-button {\n  --color: #565656;\n  font-size: 16px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 16px;\n}\n\n.address ion-item {\n  --padding-start: 0;\n  font-size: 18px;\n  color: #434343;\n}\n\n.address ion-item ion-badge {\n  width: 12px;\n  height: 12px;\n  padding: 0;\n  border-radius: 50%;\n}\n\nhr {\n  background: #97979713;\n}\n\n.cart-total ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.cart-total ion-item ion-label {\n  margin-right: 0;\n}\n\n.cart-total ion-item ion-label:nth-child(1) {\n  color: #919191;\n}\n\n.cart-total ion-item ion-label:nth-child(2) {\n  color: #434343;\n}\n\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmUtb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0U7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFOOztBQUNNO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQ1Y7O0FBQ1U7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNkOztBQUNjO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FBQ2xCOztBQUljO0VBQ0ksZUFBQTtBQUZsQjs7QUFLYztFQUNJLGNBQUE7QUFIbEI7O0FBS2M7RUFDSSxjQUFBO0FBSGxCOztBQUtjO0VBQ0ksY0FBQTtBQUhsQjs7QUFLYztFQUNJLGNBQUE7QUFIbEI7O0FBS2M7RUFDRSxjQUFBO0FBSGhCOztBQU1jO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFKbEI7O0FBTWtCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUp0Qjs7QUFPa0I7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFMdEI7O0FBY0U7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWE47O0FBYU07RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVhWOztBQWdCQTtFQUNFLHFCQUFBO0FBYkY7O0FBaUJFO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQWROOztBQWdCTTtFQUNJLGVBQUE7QUFkVjs7QUFpQk07RUFDSSxjQUFBO0FBZlY7O0FBa0JNO0VBQ0ksY0FBQTtBQWhCVjs7QUFxQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBbEJGOztBQW9CRTtFQUNJLDJCQUFBO0FBbEJOIiwiZmlsZSI6ImFwcHJvdmUtb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjZweDtcclxuICAtLXBhZGRpbmctZW5kOiAyNnB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgY29sb3I6ICM0MzQzNDM7XHJcbn1cclxuXHJcbi5jYXJ0LWl0ZW1zIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgLml0ZW0taW1nIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaXRlbS1pbmZvIHtcclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5xdHktc2VsZWN0b3Ige1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiAjNTY1NjU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NjU2NTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFkZHJlc3Mge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjNDM0MzQzO1xyXG5cclxuICAgICAgaW9uLWJhZGdlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuaHIge1xyXG4gIGJhY2tncm91bmQ6ICM5Nzk3OTcxMztcclxufVxyXG5cclxuLmNhcnQtdG90YWwge1xyXG4gIGlvbi1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWxhYmVsOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICBjb2xvcjogIzkxOTE5MTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWxhYmVsOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBjb2xvcjogIzQzNDM0MztcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ 23377:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/approve-orders/approve-orders.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-buttons class=\"backbtn\" routerLink=\"/orders\" routerDirection=\"back\">\n        <img src=\"../../assets/back.svg\" />\n      </ion-buttons>\n    </ion-buttons>\n\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n    <p>Customer Name: {{fname}} {{lname}}</p>\n    <p> Number: {{num}}</p>\n    <p>Address: {{street}}, Brgy. {{brgy}}</p>\n   \n    <ion-col size=\"12\" size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n    <ion-grid fixed>\n      <ion-row>\n        <div class=\"cart-items\"   *ngFor=\"let order of order\">\n          <ion-card mode=\"ios\">\n            <ion-card-content >\n              <div class=\"item-info\">\n                <p>Product: {{order.product}}</p>\n                <p>Variation: {{order.classification1}}  {{order.classification2}}</p>\n                <p>Quantity: {{order.quantity}}</p> \n              </div>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </ion-col>\n\n \n</ion-content>\n<ion-footer>\n    <ion-button color=\"primary\" expand='full'(click)=\"approve()\" >Approve Order</ion-button>\n    <ion-button color=\"primary\" expand='full'(click)=\"disapprove()\" >Disapprove Order</ion-button>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_approve-orders_approve-orders_module_ts.js.map