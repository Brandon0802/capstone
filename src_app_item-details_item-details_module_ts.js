(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_item-details_item-details_module_ts"],{

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

/***/ 68792:
/*!*************************************************************!*\
  !*** ./src/app/item-details/item-details-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetailsPageRoutingModule": () => (/* binding */ ItemDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-details.page */ 59776);




const routes = [
    {
        path: '',
        component: _item_details_page__WEBPACK_IMPORTED_MODULE_0__.ItemDetailsPage
    }
];
let ItemDetailsPageRoutingModule = class ItemDetailsPageRoutingModule {
};
ItemDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemDetailsPageRoutingModule);



/***/ }),

/***/ 70061:
/*!*****************************************************!*\
  !*** ./src/app/item-details/item-details.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetailsPageModule": () => (/* binding */ ItemDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _item_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-details-routing.module */ 68792);
/* harmony import */ var _item_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-details.page */ 59776);







let ItemDetailsPageModule = class ItemDetailsPageModule {
};
ItemDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _item_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemDetailsPageRoutingModule
        ],
        declarations: [_item_details_page__WEBPACK_IMPORTED_MODULE_1__.ItemDetailsPage]
    })
], ItemDetailsPageModule);



/***/ }),

/***/ 59776:
/*!***************************************************!*\
  !*** ./src/app/item-details/item-details.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetailsPage": () => (/* binding */ ItemDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_item_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-details.page.html */ 40623);
/* harmony import */ var _item_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-details.page.scss */ 44887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 22600);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navparam.service */ 61731);











let ItemDetailsPage = class ItemDetailsPage {
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
        this.img2 = false;
        this.img3 = false;
        this.v1 = true;
        this.v2 = true;
        this.vv1 = true;
        this.vv2 = false;
        this.var1 = [];
        this.var2 = [];
        this.varname1 = "";
        this.varname2 = "";
    }
    ngOnInit() {
        this.activeVariation = 'size';
        this.product_id = this.navParamService.getNavData();
        console.log(this.product_id);
    }
    ionViewWillEnter() {
        this.var1 = [];
        this.var2 = [];
        return new Promise(resolve => {
            let body = {
                aksi: 'get_product_details',
                product_id: this.product_id,
                user_id: null
            };
            this.accessProviders.postData(body, 'get_product_detail.php').subscribe((res) => {
                if (res.success == true) {
                    if (res.var1 != 'NULL') {
                        for (let datas of res.var1) {
                            this.var1.push(datas);
                        }
                        console.log(this.var1);
                    }
                    else {
                        this.v1 = false;
                    }
                    if (res.var2 != 'NULL') {
                        for (let datas of res.var2) {
                            this.var2.push(datas);
                        }
                        console.log(this.var2);
                    }
                    else {
                        this.v2 = false;
                    }
                    console.log(res.var1);
                    console.log(res.var2);
                    console.log(res);
                    console.log(res.result);
                    this.prods = res.result;
                    console.log(this.prods);
                    this.prod_img = this.prods.product_image;
                    this.prod_name = this.prods.product_name;
                    this.prod_desc = this.prods.product_desc;
                    this.stock = this.prods.stock;
                    this.ship_fee = this.prods.shipping_fee;
                    this.price = this.prods.price;
                    this.var_price = this.prods.var_price;
                    this.image2 = this.prods.image2;
                    this.image3 = this.prods.image3;
                    this.varname1 = this.prods.varname1;
                    this.varname2 = this.prods.varname2;
                    if (this.image2 != 'NULL') {
                        this.img2 = true;
                    }
                    if (this.image3 != 'NULL') {
                        this.img3 = true;
                    }
                }
                else {
                }
            });
        });
    }
    back() {
        this.navController.navigateRoot(['/panel-vendor']);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    deleteProd() {
        return new Promise(resolve => {
            let body = {
                aksi: 'delete_product',
                product_id: this.product_id,
                prod_name: this.prod_name
            };
            this.accessProviders.postData(body, 'delete_product.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.msg);
                    this.presentToast(res.msg);
                    this.navController.navigateRoot(['/panel-vendor']);
                    window.location.reload();
                    this.presentToast(res.msg);
                }
                else {
                    this.presentToast('Failed');
                }
            });
        });
    }
    showlog(e) {
        console.log(e);
    }
    segmentChanged(e) {
        if (this.vv1 == true) {
            this.vv2 = true;
            this.vv1 = false;
        }
        else if (this.vv2 == true) {
            this.vv2 = false;
            this.vv1 = true;
        }
        this.activeVariation = e.detail.value;
        if (this.activeVariation == 'color') {
            this.animatioCntrl.create()
                .addElement(document.querySelector('.sizes'))
                .duration(500)
                .iterations(1)
                .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
                .fromTo('opacity', '1', '0.2')
                .play();
            this.animatioCntrl.create()
                .addElement(document.querySelector('.colors'))
                .duration(500)
                .iterations(1)
                .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
                .fromTo('opacity', '0.2', '1')
                .play();
        }
        else {
            this.animatioCntrl.create()
                .addElement(document.querySelector('.sizes'))
                .duration(500)
                .iterations(1)
                .fromTo('transform', 'translateX(100%)', 'translateX(0)')
                .fromTo('opacity', '0.2', '1')
                .play();
            this.animatioCntrl.create()
                .addElement(document.querySelector('.colors'))
                .duration(500)
                .iterations(1)
                .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
                .fromTo('opacity', '1', '0.2')
                .play();
        }
    }
    changeSize(size) {
        this.selectedSize = size;
    }
    changeColor(color) {
        this.selectedColor = color;
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
};
ItemDetailsPage.ctorParameters = () => [
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
ItemDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-item-details',
        template: _raw_loader_item_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemDetailsPage);



/***/ }),

/***/ 44887:
/*!*****************************************************!*\
  !*** ./src/app/item-details/item-details.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.item-name {\n  color: #2a2a2a;\n}\n\n.price {\n  color: var(--ion-color-primary);\n}\n\n.price span {\n  color: #2a2a2a;\n  text-decoration: line-through;\n  margin-left: 20px;\n  font-size: medium;\n  vertical-align: top;\n}\n\n.seperator hr {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  background: #e2e2e2;\n}\n\n.seperator div {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  background-color: #3284d1;\n  width: 50px;\n  height: 50px;\n}\n\n.review {\n  margin-top: 16px;\n  color: #2a2a2a;\n}\n\n.review .rating {\n  display: inline-block;\n  color: #ffffff;\n  background: var(--ion-color-primary);\n  padding: 10px 20px 10px 20px;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n.review .count {\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: var(--ion-color-primary);\n}\n\n.description h5 {\n  color: #2a2a2a;\n  padding-top: 10px;\n}\n\n.description p {\n  color: #656565;\n}\n\n.stock h5 {\n  color: #2a2a2a;\n  padding-top: 20px;\n}\n\n.stock p {\n  color: #656565;\n}\n\n.variation {\n  padding-top: 16px;\n}\n\n.variation ion-segment-button {\n  color: #2a2a2a;\n}\n\n.variation-selector {\n  margin-top: 30px;\n  display: flex;\n  position: relative;\n}\n\n.variation-selector .active-variation {\n  opacity: 1 !important;\n  z-index: 1 !important;\n}\n\n.variation-selector .sizes {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  z-index: 0;\n  padding-bottom: 30px;\n}\n\n.variation-selector .sizes div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f3f3f3;\n  width: 50px;\n  height: 50px;\n  margin-right: 8px;\n  transition: 0.5s ease-in-out;\n}\n\n.variation-selector .sizes .active {\n  color: #ffffff;\n  background-color: var(--ion-color-primary);\n}\n\n.variation-selector .colors {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  z-index: 0;\n  padding-bottom: 30px;\n}\n\n.variation-selector .colors div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f3f3f3;\n  width: 70px;\n  height: 50px;\n  margin-right: 8px;\n  transition: 0.5s ease-in-out;\n}\n\n.variation-selector .colors .active {\n  color: #ffffff;\n  background-color: var(--ion-color-primary);\n}\n\nion-footer ion-row {\n  padding: 0;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col ion-button {\n  margin: 0;\n  height: 50px;\n  font-size: 18px;\n  box-shadow: none;\n}\n\n.footer-md::before {\n  background-image: none !important;\n}\n\n.product-slider {\n  margin-bottom: 30px;\n}\n\n.product-slider ion-slide {\n  width: auto;\n  height: auto;\n}\n\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.product-slider ion-slide ion-col ion-card {\n  margin-top: 5px;\n  margin-bottom: 0;\n  width: auto;\n}\n\n.product-slider ion-slide ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUNFO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ047O0FBS0U7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFGTjs7QUFJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBSEY7O0FBS0U7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhOOztBQU1FO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFKTjs7QUFTRTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQU5OOztBQVNFO0VBQ0ksY0FBQTtBQVBOOztBQVlFO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBVE47O0FBWUU7RUFDSSxjQUFBO0FBVk47O0FBY0E7RUFDRSxpQkFBQTtBQVhGOztBQWFFO0VBQ0ksY0FBQTtBQVhOOztBQWVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFaRjs7QUFjRTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7QUFaTjs7QUFlRTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQWJOOztBQWVNO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQWJWOztBQWdCTTtFQUNJLGNBQUE7RUFDQSwwQ0FBQTtBQWRWOztBQWtCRTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQWhCTjs7QUFrQk07RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBaEJWOztBQW1CTTtFQUNJLGNBQUE7RUFDQSwwQ0FBQTtBQWpCVjs7QUF1QkU7RUFDSSxVQUFBO0FBcEJOOztBQXNCTTtFQUNJLFVBQUE7QUFwQlY7O0FBc0JVO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFwQmQ7O0FBMkJBO0VBQ0UsaUNBQUE7QUF4QkY7O0FBMEJBO0VBQ0UsbUJBQUE7QUF2QkY7O0FBeUJFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUF2Qk47O0FBMEJVO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBeEJkOztBQTJCVTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUF6QmQ7O0FBNEJVO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBMUJkIiwiZmlsZSI6Iml0ZW0tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjZweDtcclxufVxyXG5cclxuLml0ZW0tbmFtZSB7XHJcbiAgY29sb3I6ICMyYTJhMmE7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjMmEyYTJhO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxufVxyXG5cclxuLnNlcGVyYXRvciB7XHJcbiAgXHJcbiAgaHIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xyXG4gIH1cclxuICBkaXYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjg0ZDE7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG59XHJcblxyXG4ucmV2aWV3IHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGNvbG9yOiAjMmEyYTJhO1xyXG5cclxuICAucmF0aW5nIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5jb3VudCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgaDUge1xyXG4gICAgICBjb2xvcjogIzJhMmEyYTtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgICAgY29sb3I6ICM2NTY1NjU7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RvY2sge1xyXG4gIGg1IHtcclxuICAgICAgY29sb3I6ICMyYTJhMmE7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gIH1cclxufVxyXG5cclxuLnZhcmlhdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcblxyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiAjMmEyYTJhO1xyXG4gIH1cclxufVxyXG5cclxuLnZhcmlhdGlvbi1zZWxlY3RvciB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmFjdGl2ZS12YXJpYXRpb24ge1xyXG4gICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zaXplcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAuY29sb3JzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIGlvbi1yb3cge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFRoaXMgd2lsbCByZW1vdmUgZm9vdGVyIHNoYWRvdyBvbiBhbmRyb2lkXHJcbi5mb290ZXItbWQ6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9kdWN0LXNsaWRlciB7IFxyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIGlvbi1zbGlkZSB7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 40623:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-details/item-details.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" (click)=\"back()\" routerDirection=\"back\">\n        <img src=\"../../assets/back.svg\" />\n      </ion-button>\n    </ion-buttons>\n\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\" class=\"product-slider\">\n    <ion-slide>\n      <img src=\"{{prod_img}}\" />\n    </ion-slide>\n    <ion-slide *ngIf=\"img2\">\n      <img src=\"{{image2}}\" />\n    </ion-slide>\n    <ion-slide *ngIf=\"img3\">\n      <img src=\"{{image3}}\" />\n    </ion-slide> \n  </ion-slides>\n \n  <div class=\"ion-padding-vertical\">\n    \n    <h1 class=\"item-name\">{{prod_name}}</h1>\n\n    <h4 class=\"price\">\n      ₱{{var_price}}.00\n    </h4>\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n \n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"description\">\n    <h5>Description</h5>\n\n    <ion-textarea readonly=\"true\">{{prod_desc}}\n    </ion-textarea>\n\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"stock\">\n    <h5>Stock</h5>\n\n    <p>\n      {{stock}}\n    </p>\n\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"variation\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"size\">\n      <ion-segment-button value=\"size\" *ngIf=\"v1\">\n        <ion-label>Select {{varname1}}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"color\" *ngIf=\"v2\">\n        <ion-label>Select {{varname2}}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <br>\n  <div class=\"product-slider ion-padding-start\" *ngIf=\"vv1\">\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n      <ion-slide *ngFor =\"let var1 of var1\" >\n        <ion-col class=\"ion-text-left\" >\n          <ion-card color=\"secondary\" (click)=\"showlog(var1.variation_id)\">\n            <ion-card-header>\n              <ion-card-title >{{var1.variation_classification}} </ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n\n  <div class=\"product-slider ion-padding-start\"*ngIf=\"vv2\">\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n      <ion-slide *ngFor =\"let var2 of var2\">\n        <ion-col class=\"ion-text-left\" >\n          <ion-card color=\"secondary\">\n            <ion-card-header>\n              <ion-card-title >{{var2.variation_classification}} </ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n\n\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" routerLink=\"/edit-product\" routerDirection=\"forward\" >Edit Product</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" (click)=\"deleteProd()\" color=\"light\">Delete Product</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_item-details_item-details_module_ts.js.map