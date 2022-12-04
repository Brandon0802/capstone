(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_search_search_module_ts"],{

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

/***/ 66153:
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 21453);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 57451:
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 66153);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 21453);







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 21453:
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./search.page.html */ 74173);
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss */ 7802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ 22600);










let SearchPage = class SearchPage {
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
        this.prods = [];
        this.key = this.navParamService.getKey();
        this.keys = "";
        this.device = true;
        this.web = true;
        this.nores = false;
        this.id = 0;
        this.device = this.platform.is('mobile');
        this.web = this.platform.is('desktop');
    }
    ngOnInit() {
        return new Promise(resolve => {
            let body = {
                aksi: 'search',
                key: this.key
            };
            this.accessProviders.postData(body, 'search.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.result);
                    for (let datas of res.result) {
                        this.prods.push(datas);
                    }
                    console.log(this.prods);
                    if (this.prods == 0) {
                        this.nores = true;
                    }
                    else {
                        this.nores = false;
                    }
                }
                else {
                }
            });
        });
    }
    viewProduct(product_id) {
        console.log(product_id);
        this.navParamService.setNavData(product_id);
        this.router.navigate(['/product-detail']);
    }
    back() {
        this.router.navigate(['/newhome/']);
    }
    newhome() {
        this.router.navigate(['/newhome/']);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    search() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.keys == "") {
                this.presentToast('Please type keyword');
            }
            else {
                const loader = yield this.loadingController.create({
                    message: 'Please wait',
                });
                loader.present();
                console.log(this.keys);
                this.navParamService.setKey(this.keys);
                this.prods.splice(0);
                return new Promise(resolve => {
                    let body = {
                        aksi: 'search',
                        key: this.keys
                    };
                    this.accessProviders.postData(body, 'search.php').subscribe((res) => {
                        if (res.success == true) {
                            loader.dismiss();
                            console.log(res.result);
                            for (let datas of res.result) {
                                this.prods.push(datas);
                            }
                            console.log(this.prods);
                            if (this.prods == 0) {
                                this.nores = true;
                            }
                            else {
                                this.nores = false;
                            }
                        }
                        else {
                        }
                    });
                });
            }
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
};
SearchPage.ctorParameters = () => [
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
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchPage);



/***/ }),

/***/ 7802:
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n  align-items: center;\n  height: 100%;\n}\n.card .pclass p {\n  font-size: 20px;\n}\n.price {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n.inline {\n  font-size: 15px;\n  margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n.badge {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n.search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n.hor-scroll {\n  height: 30px;\n}\n.menu {\n  color: white !important;\n}\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n#dag {\n  scroll-behavior: smooth;\n}\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n.s {\n  border-radius: 9px;\n  margin-left: 9px;\n  margin-right: 9px;\n}\n.ss {\n  border-radius: 9px;\n  margin-left: 9px;\n  margin-right: 9px;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNRO0VBQ0ksZUFBQTtBQUNaO0FBR0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFBSjtBQUVBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFFSjtBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQURBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBSUo7QUFGQTtFQUNJLFlBQUE7QUFLSjtBQUhBO0VBQ0ksdUJBQUE7QUFNSjtBQUpBO0VBQ0ksd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFPSjtBQUxBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBUUo7QUFOQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0FBU0o7QUFSSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFVUjtBQVBBO0VBQ0ksdUJBQUE7QUFVSjtBQVBBO0VBQ0ksa0JBQUE7QUFVSjtBQVRJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFXUjtBQVBBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVUo7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFVSiIsImZpbGUiOiJzZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5wY2xhc3N7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSBcclxuLnByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuLmlubGluZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XHJcbn1cclxuLmJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEyLCAxMiwgLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLnNlYXJjaC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDsgXHJcbn1cclxuLmhvci1zY3JvbGx7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLm1lbnUge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7ICAgIFxyXG59XHJcbi5teS1idG57XHJcbiAgICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgICBtYXJnaW46IDAgMTJweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWluLWhlaWdodDogMjVweDtcclxufVxyXG4udGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5idG4tYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOm5vbmUgIWltcG9ydGFudDtcclxuICAgIGlvbi10ZXh0e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG59XHJcbiNkYWd7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuLnNlZ21lbnR0b29sYmFyU2VjdGlvbntcclxuICAgIC0tbWluLWhlaWdodDogMzBweDtcclxuICAgIC5zZWdTZWN0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6MzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnN7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbn1cclxuXHJcbi5zc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 74173:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button [icon]=\"buttonIcon\" [text]=\"buttonText\" color=\"light\" (click)=\"back()\"> </ion-back-button>\n        <ion-button class=\"home\" (click)=\"newhome()\">\n          <ion-icon name=\"home-outline\" color=\"light\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-input type=\"text\"  [(ngModel)]=\"keys\" padding-start placeholder=\"Search for product...\" class=\"search-bar\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\" (click)=\"search()\"  >\n        <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-row  *ngIf=\"device\" >\n    <br>\n    <br>\n    <br>\n    <ion-item lines=\"none\" *ngIf=\"nores\" >\n     \n      <img src=\"../../assets/nores.png\"/>\n    </ion-item>\n    <ion-col  *ngFor=\"let data of prods\" size=\"6\">\n      <ion-card class=\"card\" no-margin  (click)=\"viewProduct(data.product_id)\" routerDirection=\"forward\">\n        <ion-badge class=\"badge\" ></ion-badge>\n        <img [src]=\"data.product_image\" [alt]=\"data.product_name\">\n        <ion-card-content>\n          <ion-card-title>\n            <ion-row>\n              <ion-col class=\"pclass\" no-padding>\n                <p >{{data.product_name}}</p>\n              </ion-col>\n            </ion-row>\n            <p>₱{{data.var_price}}.00</p>\n          </ion-card-title>\n        </ion-card-content> \n      </ion-card>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row *ngIf=\"web\">\n    <ion-item lines=\"none\" *ngIf=\"nores\">\n      <img src=\"../../assets/nores.png\"/>\n    </ion-item>\n    <ion-col  *ngFor=\"let data of prods\" size=\"3\">\n      <ion-card class=\"card\" no-margin  (click)=\"viewProduct(data.product_id)\" routerDirection=\"forward\">\n        <ion-badge class=\"badge\" ></ion-badge>\n        <img [src]=\"data.product_image\" [alt]=\"data.product_name\">\n        <ion-card-content>\n          <ion-card-title>\n            <ion-row>\n              <ion-col class=\"pclass\" no-padding>\n                <p >{{data.product_name}}</p>\n              </ion-col>\n            </ion-row>\n            <p>₱{{data.var_price}}.00</p>\n          </ion-card-title>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_search_search_module_ts.js.map