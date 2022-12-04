(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_variation_variation_module_ts"],{

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

/***/ 96717:
/*!*******************************************************!*\
  !*** ./src/app/variation/variation-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariationPageRoutingModule": () => (/* binding */ VariationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _variation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variation.page */ 95314);




const routes = [
    {
        path: '',
        component: _variation_page__WEBPACK_IMPORTED_MODULE_0__.VariationPage
    }
];
let VariationPageRoutingModule = class VariationPageRoutingModule {
};
VariationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VariationPageRoutingModule);



/***/ }),

/***/ 18430:
/*!***********************************************!*\
  !*** ./src/app/variation/variation.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariationPageModule": () => (/* binding */ VariationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _variation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variation-routing.module */ 96717);
/* harmony import */ var _variation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variation.page */ 95314);







let VariationPageModule = class VariationPageModule {
};
VariationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _variation_routing_module__WEBPACK_IMPORTED_MODULE_0__.VariationPageRoutingModule
        ],
        declarations: [_variation_page__WEBPACK_IMPORTED_MODULE_1__.VariationPage]
    })
], VariationPageModule);



/***/ }),

/***/ 95314:
/*!*********************************************!*\
  !*** ./src/app/variation/variation.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariationPage": () => (/* binding */ VariationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_variation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./variation.page.html */ 44995);
/* harmony import */ var _variation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variation.page.scss */ 13009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 22600);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navparam.service */ 61731);











let VariationPage = class VariationPage {
    constructor(animatioCntrl, data, router, toastCtrl, loadingCtrl, alertController, accessProviders, navController, storage, activatedRoute, navParamService) {
        this.animatioCntrl = animatioCntrl;
        this.data = data;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.navParamService = navParamService;
        this.a = true;
        this.b = false;
        this.c = false;
        this.d = false;
        this.e = false;
        this.f = false;
        this.v1 = true;
        this.another = false;
        this.vdb1 = "";
        this.v1a = "";
        this.v1b = "";
        this.v1c = "";
        this.v1d = "";
        this.v1e = "";
        this.v1f = "";
        this.v1ap = "";
        this.v1bp = "";
        this.v1cp = "";
        this.v1dp = "";
        this.v1ep = "";
        this.v1fp = "";
        this.v1as = "";
        this.v1bs = "";
        this.v1cs = "";
        this.v1ds = "";
        this.v1es = "";
        this.v1fs = "";
        //end of variation 1
        this.g = true;
        this.h = false;
        this.i = false;
        this.j = false;
        this.k = false;
        this.l = false;
        this.v2 = false;
        this.vdb2 = "";
        this.v2g = "";
        this.v2h = "";
        this.v2i = "";
        this.v2j = "";
        this.v2k = "";
        this.v2l = "";
        this.v2gp = "";
        this.v2hp = "";
        this.v2ip = "";
        this.v2jp = "";
        this.v2kp = "";
        this.v2lp = "";
        this.v2gs = "";
        this.v2hs = "";
        this.v2is = "";
        this.v2js = "";
        this.v2ks = "";
        this.v2ls = "";
        this.variationName1 = "";
        this.variationName2 = "";
    }
    ngOnInit() {
    }
    dontHaveVar() {
        this.navParamService.setNavData('Item does not have variation ');
    }
    addInput() {
        if (this.a == false) {
            this.a = true;
        }
        else if (this.b == false) {
            this.b = true;
        }
        else if (this.c == false) {
            this.c = true;
        }
        else if (this.d == false) {
            this.d = true;
        }
        else if (this.e == false) {
            this.e = true;
        }
        else if (this.f == false) {
            this.f = true;
        }
    }
    addInput2() {
        if (this.g == false) {
            this.g = true;
        }
        else if (this.h == false) {
            this.h = true;
        }
        else if (this.i == false) {
            this.i = true;
        }
        else if (this.j == false) {
            this.j = true;
        }
        else if (this.k == false) {
            this.k = true;
        }
        else if (this.l == false) {
            this.l = true;
        }
    }
    delInput() {
        if (this.f == true) {
            this.f = false;
        }
        else if (this.e == true) {
            this.e = false;
        }
        else if (this.d == true) {
            this.d = false;
        }
        else if (this.c == true) {
            this.c = false;
        }
        else if (this.b == true) {
            this.b = false;
        }
        else if (this.a == true) {
            this.a = false;
        }
    }
    delInput2() {
        if (this.l == true) {
            this.l = false;
        }
        else if (this.k == true) {
            this.k = false;
        }
        else if (this.j == true) {
            this.j = false;
        }
        else if (this.i == true) {
            this.i = false;
        }
        else if (this.h == true) {
            this.h = false;
        }
        else if (this.g == true) {
            this.g = false;
        }
    }
    addVariation() {
        this.v1 = false;
        this.another = true;
        this.v2 = true;
    }
    remVariation() {
        this.v1 = true;
        this.another = false;
        this.v2 = false;
    }
    save() {
        console.log(this.variationName1);
        console.log(this.variationName2);
        this.navParamService.setNavData("Variation Set");
        this.price = 'Price Varies';
        this.navParamService.setPrice(this.price);
        if (this.v1as == "") {
            this.v1as = 0;
        }
        if (this.v1bs == "") {
            this.v1bs = 0;
        }
        if (this.v1cs == "") {
            this.v1cs = 0;
        }
        if (this.v1ds == "") {
            this.v1ds = 0;
        }
        if (this.v1es == "") {
            this.v1es = 0;
        }
        if (this.v1fs == "") {
            this.v1fs = 0;
        }
        if (this.v2gs == "") {
            this.v2gs = 0;
        }
        if (this.v2hs == "") {
            this.v2hs = 0;
        }
        if (this.v2is == "") {
            this.v2is = 0;
        }
        if (this.v2js == "") {
            this.v2js = 0;
        }
        if (this.v2ks == "") {
            this.v2ks = 0;
        }
        if (this.v2ls == "") {
            this.v2ls = 0;
        }
        this.stock = parseInt(this.v1as) + parseInt(this.v1bs) + parseInt(this.v1cs) + parseInt(this.v1ds) + parseInt(this.v1es) + parseInt(this.v1fs) + parseInt(this.v2gs) + parseInt(this.v2hs) + parseInt(this.v2is) + parseInt(this.v2js) + parseInt(this.v2ls);
        this.navParamService.setStock(this.stock);
        if (this.variationName1 == "") {
            this.presentToast('Variation name is required');
        }
        else {
            /**  if(this.v1a==""){
               this.presentToast('Classification is required')
             }if(this.v1b==""&&this.b==true){
               this.presentToast('Classification is required')
             }else if(this.v1c==""){
               this.presentToast('Classification is required')
             }else if(this.v1d==""){
               this.presentToast('Classification is required')
             }else if(this.v1e==""){
               this.presentToast('Classification is required')
             }else if(this.v1f==""){
               this.presentToast('Classification is required')
             }else if(this.v1ap==""){
               this.presentToast('Price is required')
             }else if(this.v1bp==""&&this.b==true){
               this.presentToast('Price is required')
             }else if(this.v1cp==""){
               this.presentToast('Price is required')
             }else if(this.v1dp==""){
               this.presentToast('Price is required')
             }else if(this.v1ep==""){
               this.presentToast('Price is required')
             }else if(this.v1fp==""){
               this.presentToast('Price is required')
             }else if(this.v1as==""){
               this.presentToast('Stock is required')
             }if(this.v1bs==""&&this.b==true){
               this.presentToast('Stock is required')
             }else if(this.v1cs==""){
               this.presentToast('Stock is required')
             }else if(this.v1ds==""){
               this.presentToast('Stock is required')
             }else if(this.v1es==""){
               this.presentToast('Stock is required')
             }else if(this.v1fs==""){
               this.presentToast('Stock is required')
             }
           }if(this.v2==true){
             if(this.variationName2==""){
               this.presentToast('Variation name is required');
             }else{
               if(this.v2g==""){
                 this.presentToast('Classification is required')
               }else if(this.v2h==""){
                 this.presentToast('Classification is required')
               }else if(this.v2i==""){
                 this.presentToast('Classification is required')
               }else if(this.v2j==""){
                 this.presentToast('Classification is required')
               }else if(this.v2k==""){
                 this.presentToast('Classification is required')
               }else if(this.v2l==""){
                 this.presentToast('Classification is required')
               }
               else if(this.v2gp==""){
                 this.presentToast('Price is required')
               }else if(this.v2hp==""){
                 this.presentToast('Price is required')
               }else if(this.v2ip==""){
                 this.presentToast('Price is required')
               }else if(this.v2jp==""){
                 this.presentToast('Price is required')
               }else if(this.v2kp==""){
                 this.presentToast('Price is required')
               }else if(this.v2lp==""){
                 this.presentToast('Price is required')
               }
               else if(this.v2gs==""){
                 this.presentToast('Stock is required')
               }else if(this.v2hs==""){
                 this.presentToast('Stock is required')
               }else if(this.v2is==""){
                 this.presentToast('Stock is required')
               }else if(this.v2js==""){
                 this.presentToast('Stock is required')
               }else if(this.v2ks==""){
                 this.presentToast('Stock is required')
               }else if(this.v2ls==""){
                 this.presentToast(' is required')
               }
             }
           }else{*/
            return new Promise(resolve => {
                let body = {
                    aksi: 'process_add-variation',
                    variationName1: this.variationName1,
                    variationName2: this.variationName2,
                    v1a: this.v1a,
                    v1b: this.v1b,
                    v1c: this.v1c,
                    v1d: this.v1d,
                    v1e: this.v1e,
                    v1f: this.v1f,
                    v1ap: this.v1ap,
                    v1bp: this.v1bp,
                    v1cp: this.v1cp,
                    v1dp: this.v1dp,
                    v1ep: this.v1ep,
                    v1fp: this.v1fp,
                    v1as: this.v1as,
                    v1bs: this.v1bs,
                    v1cs: this.v1cs,
                    v1ds: this.v1ds,
                    v1es: this.v1es,
                    v1fs: this.v1fs,
                    //end of variation 1
                    v2g: this.v2g,
                    v2h: this.v2h,
                    v2i: this.v2i,
                    v2j: this.v2j,
                    v2k: this.v2k,
                    v2l: this.v2l,
                    v2gp: this.v2gp,
                    v2hp: this.v2hp,
                    v2ip: this.v2ip,
                    v2jp: this.v2jp,
                    v2kp: this.v2kp,
                    v2lp: this.v2lp,
                    v2gs: this.v2gs,
                    v2hs: this.v2hs,
                    v2is: this.v2is,
                    v2js: this.v2js,
                    v2ks: this.v2ks,
                    v2ls: this.v2ls
                    //end of variation 2
                };
                this.accessProviders.postData(body, 'process_add-variation.php').subscribe((res) => {
                    if (res.success == true) {
                        console.log(res.msg);
                    }
                    else {
                        console.log(res.msg);
                    }
                });
            });
        }
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: a,
                duration: 1500,
                position: 'top'
            });
            toast.present();
        });
    }
};
VariationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AnimationController },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_4__.NavparamService }
];
VariationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-variation',
        template: _raw_loader_variation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_variation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VariationPage);



/***/ }),

/***/ 13009:
/*!***********************************************!*\
  !*** ./src/app/variation/variation.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXJpYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 44995:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/variation/variation.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>variation</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/add-products\" routerDirection=\"back\">\n        <img src='../../assets/back-dark.svg' />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n      <ion-button expand=\"full\" (click)=\"dontHaveVar()\" routerLink=\"/add-products\" routerDirection=\"back\" >Item does not have varation</ion-button>\n  <br>\n  <ion-item>\n    <ion-input [(ngModel)]=\"variationName1\" placeholder=\"Variation Name (e.g. Size)\"></ion-input>\n  </ion-item>\n   \n  <div>\n    <ng-container *ngIf= \"a\"> \n      <ion-item>\n        <ion-input placeholder=\"Classification (e.g. Small/S)\" type=\"text\" [(ngModel)]=\"v1a\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"text\" [(ngModel)]=\"v1ap\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v1as\" ></ion-input>\n      </ion-item>\n    </ng-container>\n  \n    <ng-container *ngIf= \"b\"> \n      <ion-item>\n        <ion-input  type=\"text\" [(ngModel)]=\"v1b\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"text\" [(ngModel)]=\"v1bp\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v1bs\" ></ion-input>\n      </ion-item>\n    </ng-container>\n  \n    <ng-container *ngIf= \"c\"> \n      <ion-item>\n        <ion-input  [(ngModel)]=\"v1c\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"number\" [(ngModel)]=\"v1cp\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v1cs\" ></ion-input>\n      </ion-item>\n    </ng-container>\n\n    <ng-container *ngIf= \"d\"> \n      <ion-item>\n        <ion-input  type=\"text\" [(ngModel)]=\"v1d\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"number\" [(ngModel)]=\"v1d\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v1ds\" ></ion-input>\n      </ion-item>\n    </ng-container>\n\n    <ng-container *ngIf= \"e\"> \n      <ion-item>\n        <ion-input  type=\"text\" [(ngModel)]=\"v1e\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"number\" [(ngModel)]=\"v1ep\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v1es\" ></ion-input>\n      </ion-item>\n    </ng-container>\n\n    <ng-container *ngIf= \"f\"> \n      <ion-item>\n        <ion-input  type=\"text\" [(ngModel)]=\"v1f\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"number\" [(ngModel)]=\"v1fp\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v1fs\" ></ion-input>\n      </ion-item>\n    </ng-container>\n  </div>\n  <div>\n    <ion-button  (click)=\"addInput()\">Add</ion-button>\n    <ion-button (click)=\"delInput()\">Delete</ion-button>\n  </div>\n  <div *ngIf = \"v1\">\n    <ion-button  (click)=\"addVariation()\">Add Variation</ion-button>\n  </div>\n  \n  <br>\n\n  <ng-container *ngIf=\"another\">\n    <ion-item>\n      <ion-input [(ngModel)]=\"variationName2\" placeholder=\"Variation Name (e.g. Color)\"></ion-input>\n    </ion-item>\n    \n    <div>\n      <ng-container *ngIf= \"g\"> \n        <ion-item>\n          <ion-input placeholder=\"Classification (e.g. Black)\" [(ngModel)]=\"v2g\" type=\"text\" ></ion-input>\n          <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"text\" [(ngModel)]=\"v2gp\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v2gs\" ></ion-input>\n        </ion-item>\n      </ng-container>\n    \n      <ng-container *ngIf= \"h\"> \n        <ion-item>\n          <ion-input type=\"text\" [(ngModel)]=\"v2h\" ></ion-input>\n          <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"text\" [(ngModel)]=\"v2hp\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v2hs\" ></ion-input>\n        </ion-item>\n      </ng-container>\n    \n      <ng-container *ngIf= \"i\"> \n        <ion-item>\n          <ion-input  type=\"text\" [(ngModel)]=\"v2i\" ></ion-input>\n          <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"text\" [(ngModel)]=\"v2ip\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v2is\" ></ion-input>\n        </ion-item>\n      </ng-container>\n  \n      <ng-container *ngIf= \"j\"> \n        <ion-item>\n          <ion-input  type=\"text\" [(ngModel)]=\"v2j\" ></ion-input>\n          <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"text\" [(ngModel)]=\"v2jp\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v2js\" ></ion-input>\n        </ion-item>\n      </ng-container>\n  \n      <ng-container *ngIf= \"k\"> \n        <ion-item>\n          <ion-input  type=\"text\"  [(ngModel)]=\"v2k\"></ion-input>\n          <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"text\" [(ngModel)]=\"v2kp\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v2ks\" ></ion-input>\n        </ion-item>\n      </ng-container>\n  \n      <ng-container *ngIf= \"l\"> \n        <ion-item>\n          <ion-input  type=\"text\" [(ngModel)]=\"v2l\" ></ion-input>\n          <ion-input slot=\"end\" expand=\"half\" placeholder=\"Price\" type=\"text\" [(ngModel)]=\"v2lp\" ></ion-input>\n        <ion-input slot=\"end\" expand=\"half\" placeholder=\"Stock\" type=\"text\" [(ngModel)]=\"v2ls\" ></ion-input>\n        </ion-item>\n      </ng-container>\n    </div>\n\n    <div>\n      <ion-button  (click)=\"addInput2()\">Add</ion-button>\n      <ion-button (click)=\"delInput2()\">Delete</ion-button>\n    </div>\n    <div *ngIf = \"v2\">\n      <ion-button  (click)=\"remVariation()\">Remove Variation</ion-button>\n    </div>\n  </ng-container>\n</ion-content>\n<ion-footer>\n  <ion-item>\n    <ion-col size=\"12\">\n      <ion-button expand=\"half\" (click)=\"save()\"routerLink=\"/add-products\" routerDirection=\"back\">Save</ion-button>\n      <ion-button expand=\"half\" color = \"light\" routerLink=\"/add-products\" routerDirection=\"back\">Cancel</ion-button>\n    </ion-col>\n  </ion-item>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_variation_variation_module_ts.js.map