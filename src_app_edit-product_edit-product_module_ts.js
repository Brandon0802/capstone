(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_edit-product_edit-product_module_ts"],{

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

/***/ 46181:
/*!*************************************************************!*\
  !*** ./src/app/edit-product/edit-product-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProductPageRoutingModule": () => (/* binding */ EditProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _edit_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-product.page */ 7090);




const routes = [
    {
        path: '',
        component: _edit_product_page__WEBPACK_IMPORTED_MODULE_0__.EditProductPage
    }
];
let EditProductPageRoutingModule = class EditProductPageRoutingModule {
};
EditProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProductPageRoutingModule);



/***/ }),

/***/ 34677:
/*!*****************************************************!*\
  !*** ./src/app/edit-product/edit-product.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProductPageModule": () => (/* binding */ EditProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _edit_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-product-routing.module */ 46181);
/* harmony import */ var _edit_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-product.page */ 7090);







let EditProductPageModule = class EditProductPageModule {
};
EditProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProductPageRoutingModule
        ],
        declarations: [_edit_product_page__WEBPACK_IMPORTED_MODULE_1__.EditProductPage]
    })
], EditProductPageModule);



/***/ }),

/***/ 7090:
/*!***************************************************!*\
  !*** ./src/app/edit-product/edit-product.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProductPage": () => (/* binding */ EditProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_edit_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-product.page.html */ 71478);
/* harmony import */ var _edit_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-product.page.scss */ 31873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 22600);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navparam.service */ 61731);











let EditProductPage = class EditProductPage {
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
        this.a = false;
        this.pa = true;
        this.va = "";
        this.vb = "";
        this.vc = "";
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
                product_id: this.product_id
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
                    this.prod_img = this.prods.product_image;
                    this.prod_name = this.prods.product_name;
                    this.prod_desc = this.prods.product_desc;
                    this.stock = this.prods.stock;
                    this.ship_fee = this.prods.shipping_fee;
                    this.price = this.prods.price;
                    this.prod_cond = this.prods.product_condition;
                    console.log(this.price);
                    if (this.price == 0) {
                        this.a = true;
                        this.pa = false;
                    }
                    else {
                        this.a = false;
                        this.pa = true;
                    }
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
        this.navController.navigateRoot(['/item-details']);
    }
    showlog(a, b, c, d, e) {
        this.navParamService.setVarID(a);
        this.navParamService.setVarName(b);
        this.navParamService.setVarClass(c);
        this.navParamService.setVarPrice(d);
        this.navParamService.setVarStock(e);
        console.log(a + ' ' + b + ' ' + c + ' ' + d + ' ' + e);
        this.router.navigate(['/edit-variation']);
    }
    save() {
        console.log(this.prod_name);
        return new Promise(resolve => {
            let body = {
                aksi: 'edit_product',
                product_id: this.product_id,
                prod_name: this.prod_name,
                prod_desc: this.prod_desc,
                stock: this.stock,
                prod_cond: this.prod_cond,
                price: this.var_price
            };
            this.accessProviders.postData(body, 'edit_product.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.msg);
                    this.presentToast(res.msg);
                    this.navController.navigateRoot(['/item-details']);
                }
                else {
                    this.presentToast('Failed');
                }
            });
        });
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
EditProductPage.ctorParameters = () => [
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
EditProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-edit-product',
        template: _raw_loader_edit_product_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_product_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditProductPage);



/***/ }),

/***/ 31873:
/*!*****************************************************!*\
  !*** ./src/app/edit-product/edit-product.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".product-slider {\n  margin-bottom: 30px;\n}\n.product-slider ion-slide {\n  width: 75px;\n  height: auto;\n}\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.product-slider ion-slide ion-col ion-card {\n  margin-top: 5px;\n  margin-bottom: 0;\n  width: 50px;\n}\n.product-slider ion-slide ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBQ0U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNOO0FBRVU7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBZDtBQUdVO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQURkO0FBSVU7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFGZCIsImZpbGUiOiJlZGl0LXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3Qtc2xpZGVyIHsgXHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgaW9uLXNsaWRlIHtcclxuICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ 71478:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-product/edit-product.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\" [text]=\"buttonText\" color=\"light\" (click)=\"back()\" > </ion-back-button>\n    </ion-buttons>\n\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <ion-slides pager=\"true\" class=\"product-slider\">\n    <ion-slide>\n      <img src=\"{{prod_img}}\" />\n    </ion-slide>\n    <ion-slide *ngIf=\"img2\">\n      <img src=\"{{image2}}\" />\n    </ion-slide>\n    <ion-slide *ngIf=\"img3\">\n      <img src=\"{{image3}}\" />\n    </ion-slide>\n  </ion-slides>\n \n  <div class=\"ion-padding-vertical\">\n    \n  </div>\n  <ion-item>\n    <ion-label>Product Name: </ion-label>\n    <ion-input type=\"text\" class=\"item-name\" placeholder=\"Product Name\" value=\"{{prod_name}}\" [(ngModel)]=\"prod_name\" ></ion-input>\n  </ion-item>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"description\">\n    <ion-item>\n      <ion-label>Description: </ion-label>\n      <ion-textarea type=\"text\" rows='6'  class=\"description\" placeholder=\"Description\" value=\"{{prod_desc}}\" [(ngModel)]=\"prod_desc\" ></ion-textarea>\n    </ion-item>\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"description\">\n    <ion-item>\n      <ion-label>Condition: </ion-label>\n      <ion-select value=\"{{prod_cond}}\" interface=\"popover\" [(ngModel)]=\"prod_cond\">\n        <ion-select-option value=\"New\">New</ion-select-option>\n        <ion-select-option value=\"Used\">Used</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </div>\n  \n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <ion-item *ngIf=\"pa\">\n    <ion-label>Price: </ion-label >\n    <ion-input type=\"number\" readonly=\"{{a}}\" class=\"price\" placeholder=\"Price\" value=\"{{var_price}}\" [(ngModel)]=\"var_price\" ></ion-input>\n  </ion-item>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"stock\">\n    <ion-item>\n      <ion-label>Stock: </ion-label>\n      <ion-input type=\"number\"  class=\"stock\" placeholder=\"Stock\" value=\"{{stock}}\" [(ngModel)]=\"stock\" ></ion-input>\n    </ion-item>\n\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"variation\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"size\">\n      <ion-segment-button value=\"size\" *ngIf=\"v1\">\n        <ion-label>Select {{varname1}}</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"color\" *ngIf=\"v2\">\n        <ion-label>Select {{varname2}}</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <br>\n  <div class=\"seperator\" *ngFor =\"let var1 of var1\"  >\n    <div >\n      <ion-item *ngIf=\"vv1\" >\n        <ion-label>Classification: </ion-label>\n        <ion-input type=\"text\" placeholder=\"Classification\" value=\"{{var1.variation_classification}}\" ></ion-input>\n        <ion-label>Price: </ion-label>\n        <ion-input type=\"number\" placeholder=\"Price\"  value=\"{{var1.variation_price}}\" ></ion-input>\n        <ion-label>Stock: </ion-label>\n        <ion-input type=\"number\" placeholder=\"Price\" value=\"{{var1.variation_stock}}\" ></ion-input>\n        <ion-button (click)=\"showlog(var1.variation_id,var1.variation_name,var1.variation_classification,var1.variation_price,var1.variation_stock)\" slot=\"end\">Edit</ion-button>\n    </ion-item>\n    </div>\n  </div>\n\n\n  <div class=\"seperator\" *ngFor =\"let var2 of var2\"  >\n    <div >\n      <ion-item *ngIf=\"vv2\">\n        <ion-label>Classification: </ion-label>\n        <ion-input type=\"text\" placeholder=\"Classification\" value=\"{{var2.variation_classification}}\" ></ion-input>\n        <ion-label>Price: </ion-label>\n        <ion-input type=\"number\"  placeholder=\"Price\" value=\"{{var2.variation_price}}\" ></ion-input>\n        <ion-label>Stock: </ion-label>\n        <ion-input type=\"number\" placeholder=\"Price\" value=\"{{var2.variation_stock}}\" ></ion-input>\n        <ion-button (click)=\"showlog(var2.variation_id,var2.variation_name,var2.variation_classification,var2.variation_price,var2.variation_stock)\" slot=\"end\">Edit</ion-button>\n    </ion-item>\n    </div>\n  </div>\n\n\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" (click)=\"save()\" >Save</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" color=\"light\" routerLink=\"/item-details\">Cancel</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_edit-product_edit-product_module_ts.js.map