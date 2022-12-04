(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["default-src_app_productlist_productlist_page_ts"],{

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

/***/ 11043:
/*!*************************************************!*\
  !*** ./src/app/productlist/productlist.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductlistPage": () => (/* binding */ ProductlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_productlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./productlist.page.html */ 92361);
/* harmony import */ var _productlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productlist.page.scss */ 45905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ 22600);










let ProductlistPage = class ProductlistPage {
    constructor(router, dataService, loadingController, toastController, alertController, accessProviders, navController, storage, platform, activatedRoute, navParamService) {
        this.router = router;
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
        this.device = true;
        this.web = true;
        this.device = this.platform.is('mobile');
        this.web = this.platform.is('desktop');
    }
    ngOnInit() {
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
        });
    }
    viewProduct(product_id) {
        console.log(product_id);
        this.navParamService.setNavData(product_id);
        this.router.navigate(['/product-detail']);
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
ProductlistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
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
ProductlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-productlist',
        template: _raw_loader_productlist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_productlist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductlistPage);



/***/ }),

/***/ 45905:
/*!***************************************************!*\
  !*** ./src/app/productlist/productlist.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n  align-items: center;\n  height: 100%;\n}\n.card .pclass p {\n  font-size: 20px;\n}\n.price {\n  font-size: 18px;\n  float: left;\n  margin: 3px;\n}\n.inline {\n  font-size: 15px;\n  margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n.badge {\n  position: absolute;\n  top: 10%;\n  left: 0;\n  background-color: rgba(12, 12, 12, 0.75);\n  border-radius: 0;\n}\n.search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n.hor-scroll {\n  height: 30px;\n}\n.menu {\n  color: white !important;\n}\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n.text {\n  font-size: 12px;\n  padding-bottom: 5px;\n}\n.btn-active {\n  background-color: unset;\n  color: white;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 21px;\n  border-radius: 3px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n#dag {\n  scroll-behavior: smooth;\n}\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n.s {\n  border-radius: 9px;\n  margin-left: 9px;\n  margin-right: 9px;\n}\n.ss {\n  border-radius: 9px;\n  margin-left: 9px;\n  margin-right: 9px;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtBQUdKO0FBREE7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFJSjtBQUZBO0VBQ0ksWUFBQTtBQUtKO0FBSEE7RUFDSSx1QkFBQTtBQU1KO0FBSkE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQU9KO0FBTEE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFRSjtBQU5BO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7QUFTSjtBQVJJO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQVVSO0FBUEE7RUFDSSx1QkFBQTtBQVVKO0FBUEE7RUFDSSxrQkFBQTtBQVVKO0FBVEk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVdSO0FBUEE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFVSjtBQVBBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVVKIiwiZmlsZSI6InByb2R1Y3RsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAucGNsYXNze1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXHJcbi5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5pbmxpbmUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyLCAxMiwgMTIsIC43NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5zZWFyY2gtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyNDAsIDI0MCwgLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5ob3Itc2Nyb2xse1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5tZW51IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyAgICBcclxufVxyXG4ubXktYnRue1xyXG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgbWFyZ2luOiAwIDEycHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4uYnRuLWFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIH1cclxufVxyXG4jZGFne1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi5zZWdtZW50dG9vbGJhclNlY3Rpb257XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAuc2VnU2VjdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBtaW4taGVpZ2h0OjMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ze1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG59XHJcblxyXG4uc3N7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 92361:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productlist/productlist.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row  *ngIf=\"device\" >\n  <ion-col  *ngFor=\"let data of prods\" size=\"6\">\n    <ion-card class=\"card\" no-margin  (click)=\"viewProduct(data.product_id)\" routerDirection=\"forward\">\n      <ion-badge class=\"badge\" ></ion-badge>\n      <img [src]=\"data.product_image\" [alt]=\"data.product_name\">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-row>\n            <ion-col class=\"pclass\" no-padding>\n              <p >{{data.product_name}}</p>\n            </ion-col>\n          </ion-row>\n          <p>₱{{data.var_price}}.00</p>\n        </ion-card-title>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n</ion-row>\n\n<ion-row *ngIf=\"web\">\n  <ion-col  *ngFor=\"let data of prods\" size=\"3\">\n    <ion-card class=\"card\" no-margin  (click)=\"viewProduct(data.product_id)\" routerDirection=\"forward\">\n      <ion-badge class=\"badge\" ></ion-badge>\n      <img [src]=\"data.product_image\" [alt]=\"data.product_name\">\n      <ion-card-content>\n        <ion-card-title>\n          <ion-row>\n            <ion-col class=\"pclass\" no-padding>\n              <p >{{data.product_name}}</p>\n            </ion-col>\n          </ion-row>\n          <p>₱{{data.var_price}}.00</p>\n        </ion-card-title>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n</ion-row>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_productlist_productlist_page_ts.js.map