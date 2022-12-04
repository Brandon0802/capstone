(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_add-products_add-products_module_ts"],{

/***/ 34301:
/*!*************************************************************!*\
  !*** ./src/app/add-products/add-products-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductsPageRoutingModule": () => (/* binding */ AddProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _add_products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-products.page */ 93092);




const routes = [
    {
        path: '',
        component: _add_products_page__WEBPACK_IMPORTED_MODULE_0__.AddProductsPage
    }
];
let AddProductsPageRoutingModule = class AddProductsPageRoutingModule {
};
AddProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddProductsPageRoutingModule);



/***/ }),

/***/ 86903:
/*!*****************************************************!*\
  !*** ./src/app/add-products/add-products.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductsPageModule": () => (/* binding */ AddProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _add_products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-products-routing.module */ 34301);
/* harmony import */ var _add_products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-products.page */ 93092);







let AddProductsPageModule = class AddProductsPageModule {
};
AddProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_products_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddProductsPageRoutingModule
        ],
        declarations: [_add_products_page__WEBPACK_IMPORTED_MODULE_1__.AddProductsPage]
    })
], AddProductsPageModule);



/***/ }),

/***/ 93092:
/*!***************************************************!*\
  !*** ./src/app/add-products/add-products.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductsPage": () => (/* binding */ AddProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_add_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-products.page.html */ 15022);
/* harmony import */ var _add_products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-products.page.scss */ 32519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);










let AddProductsPage = class AddProductsPage {
    constructor(http, router, toastCtrl, loadingCtrl, alertCtrl, accessProviders, storage, navParamService) {
        this.http = http;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accessProviders = accessProviders;
        this.storage = storage;
        this.navParamService = navParamService;
        this.i2 = false;
        this.i3 = false;
        this.icon1add = true;
        this.icon2add = false;
        this.icon3add = false;
        this.icon1del = false;
        this.icon2del = false;
        this.icon3del = false;
        this.image = "";
        this.image2 = "";
        this.image3 = "";
        this.imagename2 = "image2";
        this.imagename3 = "image3";
        this.product_name = "";
        this.product_desc = "";
        this.category = "";
        this.price = "";
        this.var_price = "";
        this.stock = 0;
        this.product_condition = "";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.user_id = this.datastorage.user_id;
            this.sid = this.datastorage.store_id;
        });
        this.aa = this.navParamService.getNavData();
        console.log(this.aa);
        if (this.aa == 0) {
            this.aa = "";
        }
        console.log(this.aa);
        this.price = this.navParamService.getPrice();
        console.log(this.price);
        this.price.toString();
        if (this.price == 0) {
            this.price = "";
        }
        this.stock = this.navParamService.getStock();
        console.log(this.stock);
        if (this.stock == 0) {
            this.stock = "";
        }
    }
    selectedFile(event) {
        this.image = event.target.files[0];
    }
    selectedFile2(event) {
        this.image2 = event.target.files[0];
    }
    selectedFile3(event) {
        this.image3 = event.target.files[0];
    }
    add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.var_price == 0) {
                this.var_price = 0;
            }
            if (this.image == "") {
                this.presentToast('Product image is required');
            }
            else if (this.image == "" && this.image2 == "") {
                this.presentToast('Product image is required');
            }
            else if (this.image == "" && this.image3 == "") {
                this.presentToast('Product image is required');
            }
            else if (this.product_name == "") {
                this.presentToast('Product name is required');
            }
            else if (this.product_desc == "") {
                this.presentToast('Description is required');
            }
            else if (this.category == "") {
                this.presentToast('Product category is required');
            }
            else if (this.price == "") {
                this.presentToast('Price is required');
            }
            else if (this.aa == "") {
                this.presentToast('Varaition not defined');
            }
            else if (this.stock == "") {
                this.presentToast('Produck stock is required');
            }
            else if (this.product_condition == "") {
                this.presentToast('Product condition is required');
            }
            else {
                console.log('andito na');
                const loader = yield this.loadingCtrl.create({
                    message: 'Please wait.....',
                });
                loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'process_add-products',
                        product_name: this.product_name,
                        product_desc: this.product_desc,
                        category: this.category,
                        price: this.price,
                        var_price: this.var_price,
                        stock: this.stock,
                        product_condition: this.product_condition,
                        user_id: this.user_id
                    };
                    this.accessProviders.postData(body, 'process_add-products.php').subscribe((res) => {
                        if (res.success == true) {
                            const formData = new FormData();
                            formData.append('image', this.image);
                            formData.append('name', this.product_name);
                            this.http.post('http://165.232.160.89/api/add_products_image.php', formData).subscribe((response) => {
                                console.log(response);
                            });
                            if (this.image2 != "") {
                                const formData = new FormData();
                                formData.append('image', this.image2);
                                formData.append('name', this.product_name);
                                formData.append('category', this.category);
                                formData.append('image_name', this.imagename2);
                                this.http.post('http://165.232.160.89/api/add_image.php', formData).subscribe((response) => {
                                    console.log(response);
                                });
                            }
                            if (this.image3 != "") {
                                const formData = new FormData();
                                formData.append('image', this.image3);
                                formData.append('name', this.product_name);
                                formData.append('category', this.category);
                                formData.append('image_name', this.imagename3);
                                this.http.post('http://165.232.160.89/api/add_image.php', formData).subscribe((response) => {
                                    console.log(response);
                                });
                            }
                            loader.dismiss();
                            this.disabledButton = false;
                            this.presentToast(res.msg);
                            this.router.navigate(['/panel-vendor']);
                        }
                        else {
                            this.presentToast(res.msg);
                            loader.dismiss();
                        }
                    });
                });
            }
        });
    }
    addImage1() {
        this.i2 = true;
        this.icon2add = true;
        this.icon2del = true;
        this.icon1add = false;
    }
    addImage2() {
        this.i3 = true;
        this.icon3add = true;
        this.icon3del = true;
        this.icon2add = false;
        this.icon2del = false;
    }
    delImage2() {
        this.i2 = false;
        this.icon2add = false;
        this.icon2del = false;
        this.icon1add = true;
    }
    delImage3() {
        this.i3 = false;
        this.icon3add = false;
        this.icon3del = false;
        this.icon2del = true;
        this.icon2add = true;
    }
    addProduct() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.price == "Price Varies") {
                return new Promise(resolve => {
                    let body = {
                        aksi: 'var_price'
                    };
                    this.accessProviders.postData(body, 'get_var_price.php').subscribe((res) => {
                        if (res.success == true) {
                            console.log(res);
                            console.log(res.result);
                            this.var_price = res.result;
                            this.add();
                        }
                        else {
                            this.presentToast('Failed');
                        }
                    });
                });
            }
            else {
                this.var_price = 0;
                this.add();
            }
            console.log('andtio');
        });
    }
    getVariation() {
        this.router.navigate(['/variation']);
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: a,
                duration: 1500,
                position: 'top'
            });
            toast.present();
        });
    }
};
AddProductsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService }
];
AddProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-add-products',
        template: _raw_loader_add_products_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_products_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddProductsPage);



/***/ }),

/***/ 32519:
/*!*****************************************************!*\
  !*** ./src/app/add-products/add-products.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content ion-grid {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\nion-content ion-grid ion-col {\n  border: 2px solid #080808;\n}\nion-content .bg {\n  background: linear-gradient(to bottom, #2188db 0%, #ffffff 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSEY7QUFJRTtFQUNFLHlCQUFBO0FBRko7QUFLRTtFQUNJLGdFQUFBO0FBSE4iLCJmaWxlIjoiYWRkLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudHtcclxuXHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBpb24tY29se1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDgwODtcclxuICAgIH1cclxuICB9XHJcbiAgLmJne1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjE4OGRiIDAlLCAjZmZmZmZmIDEwMCUpO1xyXG4gICAgfVxyXG59XHJcbiAgICBcclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ 15022:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-products/add-products.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header padding class=\"bg\">\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\" [text]=\"buttonText\" color=\"light\" routerLink=\"/panel-vendor\" routerDirection=\"back\"> </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding >\n  \n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <div class=\"s\">\n            <ion-label position=\"floating\"> Product Image </ion-label>\n            <ion-item>\n              <ion-input type=\"file\" [(ngModel)]=\"image\" (change)=\"selectedFile($event)\" ></ion-input>\n              <ion-icon *ngIf=\"icon1add\"  (click)=\"addImage1()\" slot=\"end\" name=\"add-circle-outline\"></ion-icon>\n            </ion-item>\n               \n            <ion-item *ngIf=\"i2\">\n              <ion-input type=\"file\" [(ngModel)]=\"image2\" (change)=\"selectedFile2($event)\" ></ion-input>\n              <ion-icon *ngIf=\"icon2add\"  (click)=\"addImage2()\" slot=\"end\" name=\"add-circle-outline\"></ion-icon>\n              <ion-icon *ngIf=\"icon2del\"  (click)=\"delImage2()\" slot=\"end\" name=\"remove-circle-outline\"></ion-icon>\n            </ion-item>\n      \n            <ion-item *ngIf=\"i3\">\n              <ion-input type=\"file\" [(ngModel)]=\"image3\" (change)=\"selectedFile3($event)\" ></ion-input>\n              <ion-icon *ngIf=\"icon3del\"  (click)=\"delImage3()\" slot=\"end\" name=\"remove-circle-outline\"></ion-icon>\n            </ion-item>\n      \n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Product Name\" [(ngModel)]=\"product_name\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-textarea rows='6' type=\"text\" placeholder=\"Product Description\" [(ngModel)]=\"product_desc\"> </ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-label>Category</ion-label>\n              <ion-select interface=\"popover\" [(ngModel)]=\"category\"> \n                <ion-select-option value=\"Clothes\">Clothes</ion-select-option>\n                <ion-select-option value=\"School Supply\">School Supply</ion-select-option>\n                <ion-select-option value=\"Shoes\">Shoes</ion-select-option>\n                <ion-select-option value=\"Bags\">Bags</ion-select-option>\n                <ion-select-option value=\"Dry Food\">Dry Food</ion-select-option>\n                <ion-select-option value=\"Canned Food\">Canned Food</ion-select-option>\n                <ion-select-option value=\"Instant Food\">Instant Food</ion-select-option>\n                <ion-select-option value=\"Hygiene\">Hygiene</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item > \n              <ion-label (click)=\"getVariation()\" >Variation</ion-label>\n              <ion-label  slot=\"end\" >{{aa}}</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"Price\" [(ngModel)]=\"price\" value=\"{{price}}\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type=\"number\" placeholder=\"Stock\" [(ngModel)]=\"stock\" value=\"{{stock}}\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Item Condition</ion-label>\n              <ion-select interface=\"popover\" [(ngModel)]=\"product_condition\">\n                <ion-select-option value=\"New\">New</ion-select-option>\n                <ion-select-option value=\"Used\">Used</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-button expand=\"full\" class=\"ion-padding\"  (click)=\"addProduct()\" [disabled]=\"disabledButton\" >Add</ion-button>\n          </div>\n        </ion-list>\n\n\n      </ion-col>\n    </ion-row>\n \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_add-products_add-products_module_ts.js.map