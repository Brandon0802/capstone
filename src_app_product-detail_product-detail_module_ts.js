(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_product-detail_product-detail_module_ts"],{

/***/ 51557:
/*!*****************************************************************!*\
  !*** ./src/app/product-detail/product-detail-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPageRoutingModule": () => (/* binding */ ProductDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.page */ 10798);




const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPage
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductDetailPageRoutingModule);



/***/ }),

/***/ 40210:
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPageModule": () => (/* binding */ ProductDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _productlist_productlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../productlist/productlist.page */ 11043);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail-routing.module */ 51557);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.page */ 10798);








let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductDetailPageRoutingModule
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_2__.ProductDetailPage, _productlist_productlist_page__WEBPACK_IMPORTED_MODULE_0__.ProductlistPage
        ], entryComponents: [_productlist_productlist_page__WEBPACK_IMPORTED_MODULE_0__.ProductlistPage]
    })
], ProductDetailPageModule);



/***/ }),

/***/ 10798:
/*!*******************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPage": () => (/* binding */ ProductDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-detail.page.html */ 14099);
/* harmony import */ var _product_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.page.scss */ 47441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ 22600);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navparam.service */ 61731);
/* harmony import */ var _select_variation_select_variation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../select-variation/select-variation.component */ 41249);












let ProductDetailPage = class ProductDetailPage {
    constructor(animatioCntrl, data, router, loadingController, toastController, alertController, accessProviders, navController, storage, activatedRoute, navParamService, modalController) {
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
        this.modalController = modalController;
        this.var_price = "";
        this.img2 = false;
        this.img3 = false;
        this.v1 = true;
        this.v2 = true;
        this.vv1 = false;
        this.vv2 = false;
        this.var1 = [];
        this.var2 = [];
        this.varname1 = "";
        this.varname2 = "";
        this.classi1 = 'NULL';
        this.classi2 = 'NULL';
        this.quant = 1;
        this.x = false;
        this.slideOpts = {
            effect: 'flip'
        };
        this.open = [false, false, false, false];
        this.liked = false;
    }
    ngOnInit() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.name = this.datastorage.first_name;
            this.uid = this.datastorage.user_id;
        });
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
                user_id: this.uid
            };
            this.accessProviders.postData(body, 'get_product_detail.php').subscribe((res) => {
                if (res.success == true) {
                    this.address = res.address;
                    console.log(res.address);
                    if (res.var1 != 'NULL') {
                        for (let datas of res.var1) {
                            this.var1.push(datas);
                        }
                        this.v1 = false;
                        console.log(this.var1);
                    }
                    else {
                        this.v1 = false;
                    }
                    if (res.var2 != 'NULL') {
                        for (let datas of res.var2) {
                            this.var2.push(datas);
                        }
                        this.v2 = false;
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
                    if (this.varname1 == 'NULL' && this.varname2 == 'NULL') {
                        this.x = true;
                    }
                }
                else {
                }
            });
        });
    }
    search() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                message: 'Please wait',
            });
            loader.present();
            this.navParamService.setKey(this.key);
            this.router.navigate(['/search']);
            loader.dismiss();
        });
    }
    addToCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.address == "none") {
                this.router.navigate(['/address-manager']);
            }
            else {
                if (this.varname1 == 'NULL' && this.varname2 == 'NULL') {
                    if (this.var_price == "") {
                        this.presentToast('Please select variation');
                    }
                    else if (this.quant > this.stock) {
                        this.presentToast('Please select valid quantity');
                    }
                    else if (this.quant <= 0) {
                        this.presentToast('Please select valid quantity');
                    }
                    else {
                        return new Promise(resolve => {
                            let body = {
                                aksi: 'add_to_cart',
                                product_id: this.product_id,
                                uid: this.uid,
                                varname1: this.varname1,
                                varname2: this.varname2,
                                classi1: this.classi1,
                                classi2: this.classi2,
                                var_price: this.var_price,
                                quant: this.quant
                            };
                            this.accessProviders.postData(body, 'add_to_cart.php').subscribe((res) => {
                                if (res.success == true) {
                                    console.log(res.msg);
                                    this.presentToast(res.msg);
                                }
                                else {
                                    this.presentToast(res.msg);
                                }
                            });
                        });
                    }
                }
                else {
                    this.navParamService.setVarButton("add");
                    const modal = yield this.modalController.create({
                        component: _select_variation_select_variation_component__WEBPACK_IMPORTED_MODULE_5__.SelectVariationComponent,
                        cssClass: 'half-modal'
                    });
                    yield modal.present();
                }
            }
        });
    }
    newhome() {
        this.router.navigate(['newhome/']);
    }
    buyNow() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("bought");
            if (this.address == "none") {
                this.router.navigate(['/address-manager']);
            }
            else {
                if (this.varname1 == 'NULL' && this.varname2 == 'NULL') {
                    if (this.var_price == "") {
                        this.presentToast('Please select variation');
                    }
                    else if (this.quant > this.stock) {
                        this.presentToast('Please select valid quantity');
                    }
                    else if (this.quant <= 0) {
                        this.presentToast('Please select valid quantity');
                    }
                    else {
                        return new Promise(resolve => {
                            let body = {
                                aksi: 'buy_now',
                                product_id: this.product_id,
                                uid: this.uid,
                                varname1: this.varname1,
                                varname2: this.varname2,
                                classi1: this.classi1,
                                classi2: this.classi2,
                                var_price: this.var_price,
                                quant: this.quant
                            };
                            this.accessProviders.postData(body, 'buy_now.php').subscribe((res) => {
                                if (res.success == true) {
                                    console.log(res.msg);
                                    this.router.navigate(['/buy-now-cart']);
                                }
                                else {
                                    this.presentToast(res.msg);
                                }
                            });
                        });
                    }
                }
                else {
                    this.navParamService.setVarButton("buy");
                    const modal = yield this.modalController.create({
                        component: _select_variation_select_variation_component__WEBPACK_IMPORTED_MODULE_5__.SelectVariationComponent,
                        cssClass: 'half-modal'
                    });
                    yield modal.present();
                }
            }
        });
    }
    add() {
        this.quant++;
    }
    minus() {
        this.quant--;
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'top'
            });
            toast.present();
        });
    }
    toogle(i) {
        this.open[i] = !this.open[i];
    }
    remove() {
        this.slider.lockSwipes(true);
    }
    gainback() {
        this.slider.lockSwipes(false);
    }
    like() {
        console.log('like');
        this.liked = !this.liked;
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AnimationController },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_4__.NavparamService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
ProductDetailPage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
ProductDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-product-detail',
        template: _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductDetailPage);



/***/ }),

/***/ 47441:
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".white {\n  color: white !important;\n}\n\n.search-bar {\n  background-color: rgba(240, 240, 240, 0.5);\n  border-radius: 3px;\n  font-size: 0.9em !important;\n}\n\n.mybg {\n  background-color: #3284d1;\n}\n\n.slide {\n  width: 100%;\n}\n\n.btn-active {\n  background-color: unset;\n  color: white !important;\n  text-decoration: underline;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 21px;\n  border-bottom: 1px solid gray;\n  --indicator-color-checked:none !important;\n}\n\n.btn-active ion-text {\n  border-bottom: 2px solid white;\n  padding-bottom: 5px;\n}\n\n.text {\n  font-size: 12px;\n}\n\n.light-bg {\n  background: #f4f5f8;\n}\n\n.my-btn {\n  border: unset !important;\n  border-radius: 5px !important;\n  color: #fafafa;\n  margin: 0 12px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  --background-checked: transparent;\n  min-height: 25px;\n}\n\n.hor-scroll {\n  height: 30px;\n}\n\n.cut {\n  text-decoration: line-through;\n  display: inline-block;\n  margin-right: 5px;\n  margin: auto;\n}\n\n.footer {\n  color: #d2d2d2;\n  background-image: none !important;\n}\n\n.foot-btn {\n  background-color: #3284d1;\n}\n\n#dag {\n  scroll-behavior: smooth;\n}\n\n.segmenttoolbarSection {\n  --min-height: 30px;\n}\n\n.segmenttoolbarSection .segSection {\n  display: flex;\n  align-items: flex-end;\n  min-height: 30px;\n}\n\n.price {\n  margin-left: 5%;\n  color: #3284d1;\n  align-items: center;\n  font-weight: bold;\n}\n\n.product-image-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(transparent 75%, white 100%);\n}\n\n.hover-buttons {\n  position: absolute;\n  bottom: -10px;\n  z-index: 10;\n  right: 15px;\n}\n\n.red {\n  color: red;\n}\n\n.inline {\n  font-size: 12px;\n  margin-inline-end: 5px;\n  text-decoration: line-through;\n}\n\n.badge {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 8px 5px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 45px;\n  border: 0.6px solid rgba(120, 120, 120, 0.5);\n  border-radius: 25px;\n  z-index: 9;\n  font-size: 16px;\n}\n\n.cmnt {\n  font-size: 12px;\n}\n\n.rev-img {\n  width: 50px;\n}\n\n.row {\n  margin: 5px;\n}\n\n.spon-img {\n  min-height: 100px;\n  max-height: 100px;\n  margin: 3px;\n}\n\n.container-outer {\n  overflow: scroll;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.container-inner {\n  min-width: 120px;\n  max-width: 120px;\n  display: inline;\n  padding: 3px 9px;\n  align-content: center !important;\n}\n\n.progress-outer {\n  width: 96%;\n  text-align: center;\n  background-color: #f4f4f4;\n  border: 1px solid #dcdcdc;\n  color: #fff;\n  border-radius: 20px;\n}\n\n.progress-inner {\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 20px;\n  background-color: var(--ion-color-mytheme);\n}\n\n.info {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.name {\n  font-size: 30px;\n  color: #3284d1;\n}\n\n.small-ico {\n  font-size: 12px;\n}\n\n.avatar {\n  width: 33px;\n  height: 33px;\n}\n\n.sep {\n  height: 1px;\n  background-color: #d2d2d2;\n  width: 100vw;\n  margin: 6px 0;\n  transform: translateX(-16px);\n}\n\n.fab {\n  width: 25px;\n  height: 25px;\n  padding: 9px;\n  border-radius: 25px;\n  margin-left: 6px;\n  border: 0.6px solid rgba(0, 0, 0, 0.3);\n  background-color: white !important;\n}\n\n.rate {\n  color: var(--ion-color-mytheme) !important;\n  font-size: 12px;\n}\n\n.full {\n  width: 100%;\n  display: block;\n}\n\n.product-slider {\n  margin-bottom: 30px;\n}\n\n.product-slider ion-slide {\n  width: auto;\n  height: auto;\n}\n\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.product-slider ion-slide ion-col ion-card {\n  margin-top: 5px;\n  margin-bottom: 0;\n  width: auto;\n}\n\n.product-slider ion-slide ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.qty-selector ion-button {\n  font-size: 16px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.qty-selector ion-label {\n  font-size: 16px;\n}\n\n.seperator hr {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  background: #e2e2e2;\n}\n\n.seperator div {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  background-color: #3284d1;\n  width: 50px;\n  height: 50px;\n}\n\n.description h5 {\n  margin: 5px;\n  color: #2a2a2a;\n  padding-top: 10px;\n}\n\n.description p {\n  margin: 5px;\n  color: #656565;\n}\n\n.stock h5 {\n  margin: 5px;\n  color: #2a2a2a;\n  padding-top: 20px;\n}\n\n.stock p {\n  margin: 5px;\n  color: #656565;\n}\n\n.related h5 {\n  margin-left: 40%;\n  color: #2a2a2a;\n  padding-top: 20px;\n}\n\n.related p {\n  margin: 5px;\n  color: #656565;\n}\n\n.card {\n  box-shadow: unset;\n  border-radius: 9px;\n  background-color: white !important;\n  align-items: center;\n  height: 100%;\n}\n\n.card .pclass p {\n  font-size: 20px;\n}\n\n.subtitle {\n  font-size: 12px;\n  color: #787878;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0FBSUo7O0FBRkE7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7QUFLSjs7QUFKSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFNUjs7QUFIQTtFQUNJLGVBQUE7QUFNSjs7QUFKQTtFQUNJLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtBQVNKOztBQVBBO0VBQ0ksNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0FBV0o7O0FBVEE7RUFDSSx5QkFBQTtBQVlKOztBQVZBO0VBQ0ksdUJBQUE7QUFhSjs7QUFYQTtFQUNJLGtCQUFBO0FBY0o7O0FBYkk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWVSOztBQVpBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZUo7O0FBWEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7QUFjSjs7QUFaQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBZUo7O0FBYkE7RUFDSSxVQUFBO0FBZ0JKOztBQWJBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFnQko7O0FBZEE7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFpQko7O0FBZkE7RUFDSSxlQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7QUFtQko7O0FBakJBO0VBQ0ksV0FBQTtBQW9CSjs7QUFqQkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQW9CSjs7QUFsQkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFzQko7O0FBcEJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQTBCSjs7QUF2QkE7RUFDSSxlQUFBO0FBMEJKOztBQXhCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBMkJKOztBQXpCQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksMENBQUE7RUFDQSxlQUFBO0FBOEJKOztBQTVCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBK0JKOztBQTdCQTtFQUNJLG1CQUFBO0FBZ0NKOztBQTlCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBZ0NSOztBQTdCWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQStCaEI7O0FBNUJZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQThCaEI7O0FBM0JZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBNkJoQjs7QUF4QkU7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUEwQko7O0FBeEJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUEwQlI7O0FBdkJJO0VBQ0ksZUFBQTtBQXlCUjs7QUFwQkk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUF1QlI7O0FBckJJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBdUJOOztBQWxCSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFxQlI7O0FBbEJJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFvQlI7O0FBZkk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBa0JSOztBQWZJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFpQlI7O0FBWkk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQWVSOztBQVpJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFjUjs7QUFWQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWFKOztBQVhRO0VBQ0ksZUFBQTtBQWFaOztBQVBBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFVSiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGUge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaC1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDtcclxufVxyXG4ubXliZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjg0ZDE7XHJcbn1cclxuLnNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG4tYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5saWdodC1iZ3tcclxuICAgIGJhY2tncm91bmQ6ICNmNGY1Zjg7XHJcbn1cclxuLm15LWJ0bntcclxuICAgIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuICAgIG1hcmdpbjogMCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5ob3Itc2Nyb2xse1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5jdXQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uZm9vdGVyIHtcclxuICAgIGNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvb3QtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjg0ZDE7XHJcbn1cclxuI2RhZ3tcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcbi5zZWdtZW50dG9vbGJhclNlY3Rpb257XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAuc2VnU2VjdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBtaW4taGVpZ2h0OjMwcHg7XHJcbiAgICB9XHJcbn1cclxuLnByaWNle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgY29sb3I6ICMzMjg0ZDE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdC1pbWFnZS1vdmVybGF5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNzUlLHdoaXRlIDEwMCUpO1xyXG59XHJcbi5ob3Zlci1idXR0b25ze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnJlZHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5pbmxpbmUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDQ1cHg7XHJcbiAgICBib3JkZXI6IDAuNnB4IHNvbGlkIHJnYmEoMTIwLCAxMjAsIDEyMCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5jbW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucmV2LWltZyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG5cclxufVxyXG4uc3Bvbi1pbWcge1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5jb250YWluZXItb3V0ZXIgeyBcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcbi5jb250YWluZXItaW5uZXIgeyBcclxuICAgIG1pbi13aWR0aDogMTIwcHg7IFxyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZ3Jlc3Mtb3V0ZXIge1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5wcm9ncmVzcy1pbm5lciB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XHJcbn1cclxuLmluZm8ge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMzMjg0ZDE7XHJcbiAgICBcclxufVxyXG4uc21hbGwtaWNvIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG59XHJcbi5zZXAge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNnB4KTtcclxufVxyXG4uZmFiIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBib3JkZXI6IC42cHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5yYXRlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZnVsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5wcm9kdWN0LXNsaWRlciB7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBcclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gIFxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5xdHktc2VsZWN0b3Ige1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VwZXJhdG9yIHtcclxuICBcclxuICAgIGhyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjg0ZDE7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgaDUge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMmEyYTJhO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICM2NTY1NjU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zdG9jayB7XHJcbiAgICBoNSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMyYTJhMmE7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBjb2xvcjogIzY1NjU2NTtcclxuICAgIH1cclxuICB9ICBcclxuXHJcbiAgLnJlbGF0ZWQge1xyXG4gICAgaDUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICAgICAgY29sb3I6ICMyYTJhMmE7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBjb2xvcjogIzY1NjU2NTtcclxuICAgIH1cclxuICB9ICBcclxuXHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAucGNsYXNze1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXHJcblxyXG5cclxuLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XHJcbn0iXX0= */");

/***/ }),

/***/ 14099:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"mybg\">\n  <ion-toolbar color=\"primary\"> \n    <ion-buttons slot=\"start\">\n      <ion-back-button [icon]=\"buttonIcon\" [text]=\"buttonText\" color=\"light\" (click)=\"newhome()\"> </ion-back-button>\n    </ion-buttons>\n    <ion-input type=\"text\"  [(ngModel)]=\"key\" padding-start placeholder=\"Search for product...\" class=\"search-bar\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\" (click)=\"search()\"  >\n        <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-row>\n      <ion-col>\n        <ion-slides pager=\"true\" class=\"product-slider\">\n          <ion-slide>\n            <img src=\"{{prod_img}}\" />\n          </ion-slide>\n          <ion-slide *ngIf=\"img2\">\n            <img src=\"{{image2}}\" />\n          </ion-slide>\n          <ion-slide *ngIf=\"img3\">\n            <img src=\"{{image3}}\" />\n          </ion-slide> \n          <div class=\"product-image-overlay\"></div>\n        </ion-slides> \n        \n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-row lines=\"none\" class=\"row\">\n    <ion-text class=\"name\">{{prod_name}}</ion-text>\n  </ion-row>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n \n  <div class=\"description\">\n    <h5>Description</h5>\n    <p>\n      {{prod_desc}}.\n    </p>\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"stock\">\n    <h5>Stock</h5>\n    <p>\n      {{stock}}\n    </p>\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"qty-selector\" *ngIf=\"x\">\n    <ion-label>Quantity: </ion-label>\n    <ion-button fill=\"clear\" (click)=\"minus()\">-</ion-button>\n    <ion-label>{{quant}}</ion-label>\n    <ion-button fill=\"clear\" (click)=\"add()\">+</ion-button>\n  </div>\n\n  \n  <div class=\"seperator\">\n    <hr>\n  </div>\n  <div class=\"seperator\">\n    <hr>\n  </div>\n  <div class=\"seperator\">\n    <hr>\n  </div>\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"related\">\n    <h5>Related</h5>\n  </div>\n\n  <ion-slides >\n    <ion-slide >\n      <app-productlist></app-productlist>\n    </ion-slide>\n  </ion-slides>\n  \n  \n</ion-content>\n\n<ion-footer class=\"footer\" align-items-center >\n  <ion-row class=\"price\" align-items-center>\n      <ion-text>\n        <h3 >₱{{var_price}}.00</h3>\n      </ion-text>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" (click)=\"addToCart()\" >Add to Cart</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" (click)=\"buyNow()\" color=\"light\">Buy Now</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_product-detail_product-detail_module_ts.js.map