(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 70809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 29535);



const routes = [
    {
        path: 'main',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./main/main.module */ 79580)).then(m => m.MainPageModule)
    },
    {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full'
    },
    {
        path: 'register-consumer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_register-consumer_register-consumer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./register-consumer/register-consumer.module */ 79560)).then(m => m.RegisterConsumerPageModule)
    },
    {
        path: 'register-vendor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_register-vendor_register-vendor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./register-vendor/register-vendor.module */ 82774)).then(m => m.RegisterVendorPageModule)
    },
    {
        path: 'register-driver',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_register-driver_register-driver_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./register-driver/register-driver.module */ 98267)).then(m => m.RegisterDriverPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 22474)).then(m => m.RegisterPageModule)
    },
    {
        path: 'panel-admin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_panel-admin_panel-admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./panel-admin/panel-admin.module */ 69211)).then(m => m.PanelAdminPageModule)
    },
    {
        path: 'panel-admin/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_panel-admin_panel-admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./panel-admin/panel-admin.module */ 69211)).then(m => m.PanelAdminPageModule)
    },
    {
        path: 'panel-consumer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_panel-consumer_panel-consumer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./panel-consumer/panel-consumer.module */ 49525)).then(m => m.PanelConsumerPageModule)
    },
    {
        path: 'panel-driver',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_esri-leaflet-geocoder_dist_esri-leaflet-geocoder_js-node_modules_esri-le-28b1bd"), __webpack_require__.e("src_app_panel-driver_panel-driver_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./panel-driver/panel-driver.module */ 94296)).then(m => m.PanelDriverPageModule)
    },
    {
        path: 'panel-driver/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_esri-leaflet-geocoder_dist_esri-leaflet-geocoder_js-node_modules_esri-le-28b1bd"), __webpack_require__.e("src_app_panel-driver_panel-driver_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./panel-driver/panel-driver.module */ 94296)).then(m => m.PanelDriverPageModule)
    },
    {
        path: 'panel-vendor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_panel-vendor_panel-vendor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./panel-vendor/panel-vendor.module */ 48536)).then(m => m.PanelVendorPageModule)
    },
    {
        path: 'panel-vendor/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_panel-vendor_panel-vendor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./panel-vendor/panel-vendor.module */ 48536)).then(m => m.PanelVendorPageModule)
    },
    {
        path: 'create-store',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_create-store_create-store_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./create-store/create-store.module */ 43017)).then(m => m.CreateStorePageModule)
    },
    {
        path: 'intro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_intro_intro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./intro/intro.module */ 45309)).then(m => m.IntroPageModule)
    },
    {
        path: 'checkout',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_checkout_checkout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./checkout/checkout.module */ 16311)).then(m => m.CheckoutPageModule)
    },
    {
        path: 'confirm-order',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_confirm-order_confirm-order_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./confirm-order/confirm-order.module */ 90441)).then(m => m.ConfirmOrderPageModule)
    },
    {
        path: 'favorite',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_favorite_favorite_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./favorite/favorite.module */ 79530)).then(m => m.FavoritePageModule)
    },
    {
        path: 'item-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_item-details_item-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-details/item-details.module */ 70061)).then(m => m.ItemDetailsPageModule)
    },
    {
        path: 'mycart',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mycart_mycart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mycart/mycart.module */ 96535)).then(m => m.MycartPageModule)
    },
    {
        path: 'myorders',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_myorders_myorders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./myorders/myorders.module */ 47327)).then(m => m.MyordersPageModule)
    },
    {
        path: 'my-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_my-profile_my-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./my-profile/my-profile.module */ 37875)).then(m => m.MyProfilePageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_productlist_productlist_page_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 82711)).then(m => m.HomePageModule)
    },
    {
        path: 'home/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_productlist_productlist_page_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 82711)).then(m => m.HomePageModule)
    },
    {
        path: 'folder',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 35098)).then(m => m.FolderPageModule)
    },
    {
        path: 'add-products',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_add-products_add-products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add-products/add-products.module */ 86903)).then(m => m.AddProductsPageModule)
    },
    {
        path: 'orders',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_orders_orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./orders/orders.module */ 89492)).then(m => m.OrdersPageModule)
    },
    {
        path: 'transactions-vendor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_transactions-vendor_transactions-vendor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./transactions-vendor/transactions-vendor.module */ 59707)).then(m => m.TransactionsVendorPageModule)
    },
    {
        path: 'try',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_try_try_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./try/try.module */ 9726)).then(m => m.TryPageModule)
    },
    {
        path: 'variation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_variation_variation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./variation/variation.module */ 18430)).then(m => m.VariationPageModule)
    },
    {
        path: 'edit-product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_edit-product_edit-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-product/edit-product.module */ 34677)).then(m => m.EditProductPageModule)
    },
    {
        path: 'edit-variation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_edit-variation_edit-variation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-variation/edit-variation.module */ 35120)).then(m => m.EditVariationPageModule)
    },
    {
        path: 'store',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_store_store_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./store/store.module */ 57050)).then(m => m.StorePageModule)
    },
    {
        path: 'view-product',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_select-variation_select-variation_component_ts"), __webpack_require__.e("src_app_view-product_view-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view-product/view-product.module */ 88574)).then(m => m.ViewProductPageModule)
    },
    {
        path: 'edit-store',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_edit-store_edit-store_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-store/edit-store.module */ 63929)).then(m => m.EditStorePageModule)
    },
    {
        path: 'transactions-consumer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_transactions-consumer_transactions-consumer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./transactions-consumer/transactions-consumer.module */ 26084)).then(m => m.TransactionsConsumerPageModule)
    },
    {
        path: 'approve-orders',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_approve-orders_approve-orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./approve-orders/approve-orders.module */ 30050)).then(m => m.ApproveOrdersPageModule)
    },
    {
        path: 'terms-and-condition',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms-and-condition_terms-and-condition_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms-and-condition/terms-and-condition.module */ 74951)).then(m => m.TermsAndConditionPageModule)
    },
    {
        path: 'terms-and-condition-driver',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms-and-condition-driver_terms-and-condition-driver_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms-and-condition-driver/terms-and-condition-driver.module */ 52700)).then(m => m.TermsAndConditionDriverPageModule)
    },
    {
        path: 'newhome',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_productlist_productlist_page_ts"), __webpack_require__.e("src_app_newhome_newhome_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./newhome/newhome.module */ 97946)).then(m => m.NewhomePageModule)
    },
    {
        path: 'newhome/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_productlist_productlist_page_ts"), __webpack_require__.e("src_app_newhome_newhome_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./newhome/newhome.module */ 97946)).then(m => m.NewhomePageModule)
    },
    {
        path: 'productlist',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_productlist_productlist_page_ts"), __webpack_require__.e("src_app_productlist_productlist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./productlist/productlist.module */ 82393)).then(m => m.ProductlistPageModule)
    },
    {
        path: 'product-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_productlist_productlist_page_ts"), __webpack_require__.e("default-src_app_select-variation_select-variation_component_ts"), __webpack_require__.e("src_app_product-detail_product-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product-detail/product-detail.module */ 40210)).then(m => m.ProductDetailPageModule)
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms_terms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms/terms.module */ 45322)).then(m => m.TermsPageModule)
    },
    {
        path: 'privacy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_privacy_privacy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./privacy/privacy.module */ 72550)).then(m => m.PrivacyPageModule)
    },
    {
        path: 'buy-now-cart',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_buy-now-cart_buy-now-cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./buy-now-cart/buy-now-cart.module */ 5208)).then(m => m.BuyNowCartPageModule)
    },
    {
        path: 'buy-now',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_buy-now_buy-now_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./buy-now/buy-now.module */ 45930)).then(m => m.BuyNowPageModule)
    },
    {
        path: 'order-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_esri-leaflet-geocoder_dist_esri-leaflet-geocoder_js-node_modules_esri-le-28b1bd"), __webpack_require__.e("src_app_order-detail_order-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./order-detail/order-detail.module */ 78294)).then(m => m.OrderDetailPageModule)
    },
    {
        path: 'order-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_order-history_order-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order-history/order-history.module */ 51611)).then(m => m.OrderHistoryPageModule)
    },
    {
        path: 'order-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_order-list_order-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order-list/order-list.module */ 11960)).then(m => m.OrderListPageModule)
    },
    {
        path: 'history-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_history-details_history-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./history-details/history-details.module */ 12013)).then(m => m.HistoryDetailsPageModule)
    },
    {
        path: 'order-status',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_order-status_order-status_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order-status/order-status.module */ 49323)).then(m => m.OrderStatusPageModule)
    },
    {
        path: 'address-manager',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_address-manager_address-manager_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./address-manager/address-manager.module */ 82579)).then(m => m.AddressManagerPageModule)
    },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 57451)).then(m => m.SearchPageModule)
    },
    {
        path: 'search/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 57451)).then(m => m.SearchPageModule)
    },
    {
        path: 'search-product',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_search-product_search-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search-product/search-product.module */ 97570)).then(m => m.SearchProductPageModule)
    },
    {
        path: 'admin-panel',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin-panel_admin-panel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-panel/admin-panel.module */ 68369)).then(m => m.AdminPanelPageModule)
    }, {
        path: 'admin-panel/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin-panel_admin-panel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-panel/admin-panel.module */ 68369)).then(m => m.AdminPanelPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 20721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.service */ 61852);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29535);










let AppComponent = class AppComponent {
    constructor(loadingController, toastController, alertController, platform, storage, navController, util, router) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.platform = platform;
        this.storage = storage;
        this.navController = navController;
        this.util = util;
        this.router = router;
        this.vendor = false;
        this.consumer = false;
        this.driver = false;
        this.device = true;
        this.admin = false;
        this.web = true;
        this.x = true;
        this.initializeApp();
        this.device = this.platform.is('mobile');
        this.web = this.platform.is('desktop');
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                message: 'Please wait',
            });
            loader.present();
            loader.dismiss();
            this.storage.clear();
            this.presentToast('Log out successfully');
            this.navController.navigateRoot(['/intro']);
        });
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'top'
            });
            toast.present();
        });
    }
    initializeApp() {
        this.storage.get('storage_xxx').then((res) => {
            if (res == null) {
                this.navController.navigateRoot('/intro');
            }
            else {
                this.datastorage = res;
                console.log(this.datastorage.admin);
                this.name = this.datastorage.first_name;
                this.lname = this.datastorage.last_name;
                if (this.datastorage.business_permit != null) {
                    this.vendor = true;
                    this.navController.navigateRoot('/panel-vendor');
                }
                else if (this.datastorage.consumer == 'Consumer') {
                    this.consumer = true;
                    this.navController.navigateRoot('/newhome');
                }
                else if (this.datastorage.drivers_license != null) {
                    this.navController.navigateRoot('/panel-driver');
                    this.driver = true;
                }
                else if (this.datastorage.admin == 'Admin') {
                    this.navController.navigateRoot('/panel-admin');
                    this.admin = true;
                }
            }
        });
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 50023:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 93220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 20721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 70809);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navparam.service */ 61731);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 84105);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 73181);














let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_12__.IonicStorageModule.forRoot(),
        ],
        providers: [
            _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders,
            _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService,
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeGeocoder,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 61731:
/*!*************************************!*\
  !*** ./src/app/navparam.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavparamService": () => (/* binding */ NavparamService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 42741);


let NavparamService = class NavparamService {
    constructor() { }
    clear() {
        this.navData = undefined;
    }
    setKey(q) {
        this.g = q;
    }
    getKey() {
        if (this.g == null || this.g == undefined) {
            return 0;
        }
        else {
            return this.g;
        }
    }
    setVarID(w) {
        this.a = w;
    }
    getVarID() {
        if (this.a == null || this.a == undefined) {
            return 0;
        }
        else {
            return this.a;
        }
    }
    setVarName(x) {
        this.b = x;
    }
    setVarButton(a) {
        this.button = a;
    }
    getVarButton() {
        if (this.button == null || this.button == undefined) {
            return 0;
        }
        else {
            return this.button;
        }
    }
    getVarName() {
        if (this.b == null || this.b == undefined) {
            return 0;
        }
        else {
            return this.b;
        }
    }
    setVarClass(y) {
        this.c = y;
    }
    getVarClass() {
        if (this.c == null || this.c == undefined) {
            return 0;
        }
        else {
            return this.c;
        }
    }
    setVarPrice(z) {
        this.d = z;
    }
    getVarPrice() {
        if (this.d == null || this.d == undefined) {
            return 0;
        }
        else {
            return this.d;
        }
    }
    setVarStock(v) {
        this.e = v;
    }
    getVarStock() {
        if (this.e == null || this.e == undefined) {
            return 0;
        }
        else {
            return this.e;
        }
    }
    setStoreId(s) {
        this.sid = s;
    }
    getStoreId() {
        if (this.sid == null || this.sid == undefined) {
            return 0;
        }
        else {
            return this.sid;
        }
    }
    setNavData(navObj) {
        this.navData = navObj;
    }
    getNavData() {
        if (this.navData == null || this.navData == undefined) {
            return 0;
        }
        else {
            return this.navData;
        }
    }
    setPrice(p) {
        this.price = p;
    }
    getPrice() {
        if (this.price == null || this.price == undefined) {
            return 0;
        }
        else {
            return this.price;
        }
    }
    setStock(s) {
        this.stock = s;
    }
    getStock() {
        if (this.stock == null || this.stock == undefined) {
            return 0;
        }
        else {
            return this.stock;
        }
    }
    setOrderID(aa) {
        this.f = aa;
    }
    getOrderID() {
        if (this.f == null || this.f == undefined) {
            return 0;
        }
        else {
            return this.f;
        }
    }
    setCon(bb) {
        this.h = bb;
    }
    getCon() {
        if (this.h == null || this.h == undefined) {
            return 0;
        }
        else {
            return this.h;
        }
    }
};
NavparamService.ctorParameters = () => [];
NavparamService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], NavparamService);



/***/ }),

/***/ 25675:
/*!***********************************************!*\
  !*** ./src/app/providers/access-providers.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessProviders": () => (/* binding */ AccessProviders)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 45067);
/* harmony import */ var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/timeout */ 24658);





let AccessProviders = class AccessProviders {
    constructor(http) {
        this.http = http;
        this.server = 'http://165.232.160.89/api/';
    }
    postData(body, file) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8'
        });
        let options = {
            headers: headers
        };
        return this.http.post(this.server + file, JSON.stringify(body), options)
            .timeout(59000)
            .map(res => res);
    }
};
AccessProviders.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AccessProviders = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], AccessProviders);



/***/ }),

/***/ 61852:
/*!*********************************!*\
  !*** ./src/app/util.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6006);



let UtilService = class UtilService {
    constructor() {
        this.isMenuEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    // Creating method to handle Side Menu State (Enabled or Disabeld)
    setMenuState(enabled) {
        this.isMenuEnabled.next(enabled);
    }
    // Method for get the Menu State
    getMenuState() {
        return this.isMenuEnabled;
    }
};
UtilService.ctorParameters = () => [];
UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UtilService);



/***/ }),

/***/ 24766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 90476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50023);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 24766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		95261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		29009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		27221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		34694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		70993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		63645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		62245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		23482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		53315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		37542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		21459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		47618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		90101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		82210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		47370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		23652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		28220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		25500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		84913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		15078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		14857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		48958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		14383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		97630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		81297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		35492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		13752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		61778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		82904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		81609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		31218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		92849,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		28400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		14397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		43391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		66793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		11695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".menu-header-bg {\n  height: 180px;\n  width: 650px;\n  background: #000000;\n  background: linear-gradient(180deg, #3880ff 0%, white 100%);\n  margin-top: -50px;\n}\n\n.header-content {\n  position: absolute;\n  padding-left: 14%;\n  top: 5px;\n  align-items: center;\n}\n\n.header-content img {\n  height: 250px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: black;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #000000;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.action-button ion-button {\n  text-transform: captilizes;\n  font-weight: 300;\n  --background: #000000;\n  --badckground-radius: 7px;\n  --boc-shadow:none;\n}\n\n.action-button ion-icon {\n  margin-right: 1px;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n  color: #000000;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBREE7O0FBR0E7RUFDQyxhQUFBO0FBREQ7O0FBSUE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7QUFGRDs7QUFJQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUZEOztBQUtBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGRDs7QUFJQztFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFGSDs7QUFJQztFQUNFLGlCQUFBO0FBRkg7O0FBTUE7RUFDQSxXQUFBO0FBSEE7O0FBS0M7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFISDs7QUFNQztFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFKSCIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5tZW51LWhlYWRlci1iZyB7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICB3aWR0aDogNjUwcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzg4MGZmIDAlLCBoc2woMCwgMCUsIDEwMCUpIDEwMCUpO1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnBhZGRpbmctbGVmdDogMTQlO1xyXG50b3A6IDVweDtcclxuYWxpZ24taXRlbXM6IGNlbnRlciA7XHJcblxyXG5pbWcge1xyXG4gaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuaDIge1xyXG4gZm9udC13ZWlnaHQ6IDMwMDtcclxuIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxucCB7XHJcbiBmb250LXNpemU6MTJweDtcclxuIGNvbG9yOiAjMDAwMDAwO1xyXG4gZm9udC13ZWlnaHQ6IDEwMDtcclxuIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxufVxyXG59XHJcbi5hY3Rpb24tYnV0dG9uIHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gaW9uLWJ1dHRvbiB7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBjYXB0aWxpemVzO1xyXG4gICBmb250LXdlaWdodDogMzAwO1xyXG4gICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgIC0tYmFkY2tncm91bmQtcmFkaXVzOiA3cHg7XHJcbiAgIC0tYm9jLXNoYWRvdzpub25lO1xyXG4gfVxyXG4gaW9uLWljb257XHJcbiAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gfVxyXG5cclxufVxyXG4ubWVudS1pdGVtc3tcclxubWFyZ2luOiAwcHg7XHJcblxyXG4gaW9uLWljb24ge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gfVxyXG5cclxuIGlvbi1pdGVtIHtcclxuICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gfVxyXG5cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main\" menuId=\"main-menu\">\n  <ion-menu  menuId=\"main-menu\" contentId=\"main\">\n    <ion-header class=\"ion-no-border\">\n      <div class=\"menu-header-bg\"></div>\n      <div class=\"header-content\">\n        <img class=\"footer\" src=\"../assets/logo (2).png\">\n      </div>\n    </ion-header>\n\n    <ion-content>\n      <br>\n      <br>\n      <br>\n      <br>\n      <br>\n      <ng-container  *ngIf = \"vendor\"> \n        <ion-list class=\"menu-items\" lines=\"none\">\n          <ion-menu-toggle>\n            <ion-item lines=\"none\" routerLink=\"/my-profile\">\n             <ion-icon name=\"person-circle-outline\"></ion-icon>\n             <ion-label>{{name}} {{lname}}</ion-label>\n           </ion-item>\n         </ion-menu-toggle>\n\n          <ion-menu-toggle>\n            <ion-item lines=\"none\" routerLink=\"/panel-vendor\"> \n              <ion-icon name=\"home-outline\"></ion-icon>\n              <ion-label>Home</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle>\n            <ion-item lines=\"none\" routerLink=\"/add-products\">\n              <ion-icon name=\"add-circle-outline\"></ion-icon>\n              <ion-label>Add Product</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle>\n            <ion-item lines=\"none\" routerLink=\"/orders\">\n              <ion-icon name=\"receipt-outline\"></ion-icon>\n              <ion-label>Orders</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n            \n\n          <ion-menu-toggle>\n             <ion-item lines=\"none\"(click) = \"logout()\">\n               <ion-icon name=\"log-out-outline\"></ion-icon>\n               <ion-label>Logout</ion-label>\n             </ion-item>\n          </ion-menu-toggle>\n\n        </ion-list>\n      </ng-container>\n\n      <ng-container *ngIf = \"consumer\">\n        <ion-list class=\"menu-items\" lines=\" none\">\n\n          <ion-menu-toggle>\n            <ion-item lines=\"none\"routerLink=\"/my-profile\">\n             <ion-icon name=\"person-circle-outline\"></ion-icon>\n             <ion-label>{{name}} {{lname}}</ion-label>\n           </ion-item>\n         </ion-menu-toggle>\n\n          <ion-menu-toggle>\n            <ion-item lines=\"none\"routerLink=\"/newhome\">\n              <ion-icon name=\"home-outline\"></ion-icon>\n              <ion-label> Home</ion-label>\n            </ion-item>\n          </ion-menu-toggle> \n    \n          <ion-menu-toggle>\n            <ion-item lines=\"none\" routerLink=\"/mycart\">\n              <ion-icon name=\"cart-outline\"></ion-icon>\n              <ion-label> Cart</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle>\n            <ion-item lines=\"none\" routerLink=\"/transactions-consumer\">\n              <ion-icon name=\"bar-chart-outline\"></ion-icon>\n              <ion-label>Transactions</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle>\n            <ion-item lines=\"none\" (click) = \"logout()\">\n              <ion-icon name=\"log-out-outline\"></ion-icon>\n              <ion-label> Logout</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          \n\n        </ion-list>\n      </ng-container>\n\n      <ng-container *ngIf = \"driver\">\n\n          <ion-list>\n            <ion-menu-toggle>\n            <ion-item lines=\"none\" button routerLink=\"/my-profile\">\n              <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n              <ion-label>{{name}} {{lname}}</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\" button routerLink=\"/panel-driver\">\n              <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n              <ion-label>Home</ion-label>\n            </ion-item>\n            \n            <ion-item  lines=\"none\" (click) = \"logout()\">\n              <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n              <ion-label> Logout</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          </ion-list>\n      </ng-container>\n      \n      <ng-container *ngIf = \"admin\">\n        <ion-list>\n          <ion-menu-toggle>\n          <ion-item lines=\"none\" button routerLink=\"/my-profile\">\n            <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n            <ion-label>{{name}} {{lname}}</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\" button routerLink=\"/panel-admin\">\n            <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Home</ion-label>\n          </ion-item>\n          \n          <ion-item  lines=\"none\" (click) = \"logout()\">\n            <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n            <ion-label> Logout</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        </ion-list>\n      </ng-container>\n\n      <ng-container *ngIf=\"web\">\n        <ng-container  *ngIf = \"vendor\"> \n          <ion-list class=\"menu-items\" lines=\"none\">\n              <ion-item lines=\"none\" routerLink=\"/my-profile\">\n               <ion-icon name=\"person-circle-outline\"></ion-icon>\n               <ion-label>{{name}} {{lname}}</ion-label>\n             </ion-item>\n              <ion-item lines=\"none\" routerLink=\"/panel-vendor\"> \n                <ion-icon name=\"home-outline\"></ion-icon>\n                <ion-label>Home</ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" routerLink=\"/add-products\">\n                <ion-icon name=\"add-circle-outline\"></ion-icon>\n                <ion-label>Add Product</ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" routerLink=\"/orders\">\n                <ion-icon name=\"receipt-outline\"></ion-icon>\n                <ion-label>Orders</ion-label>\n              </ion-item>\n              \n               <ion-item lines=\"none\" (click) = \"logout()\">\n                 <ion-icon name=\"log-out-outline\"></ion-icon>\n                 <ion-label>Logout</ion-label>\n               </ion-item>\n  \n          </ion-list>\n        </ng-container>\n  \n        <ng-container *ngIf = \"consumer\">\n          <ion-list class=\"menu-items\" lines=\" none\">\n  \n              <ion-item lines=\"none\" routerLink=\"/my-profile\">\n               <ion-icon name=\"person-circle-outline\"></ion-icon>\n               <ion-label>{{name}} {{lname}}</ion-label>\n             </ion-item>\n              <ion-item lines=\"none\" routerLink=\"/newhome\">\n                <ion-icon name=\"home-outline\"></ion-icon>\n                <ion-label> Home</ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" routerLink=\"/mycart\">\n                <ion-icon name=\"cart-outline\"></ion-icon>\n                <ion-label> Cart</ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" routerLink=\"/transactions-consumer\">\n                <ion-icon name=\"bar-chart-outline\"></ion-icon>\n                <ion-label>Transactions</ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" (click) = \"logout()\">\n                <ion-icon name=\"log-out-outline\"></ion-icon>\n                <ion-label> Logout</ion-label>\n              </ion-item>\n  \n          </ion-list>\n        </ng-container>\n  \n        <ng-container *ngIf = \"driver\">\n            <ion-list>\n              <ion-item lines=\"none\" button routerLink=\"/my-profile\">\n                <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n                <ion-label>{{name}} {{lname}}</ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" button routerLink=\"/panel-driver\">\n                <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n                <ion-label>Home</ion-label>\n              </ion-item>\n              \n              <ion-item  lines=\"none\" (click) = \"logout()\">\n                <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n                <ion-label> Logout</ion-label>\n              </ion-item>\n            </ion-list>\n      </ng-container>\n\n      <ng-container *ngIf = \"admin\">\n        <ion-list>\n          <ion-item lines=\"none\" button routerLink=\"/my-profile\">\n            <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n            <ion-label>{{name}} {{lname}}</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\" button routerLink=\"/panel-admin\">\n            <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Home</ion-label>\n          </ion-item>\n          \n          <ion-item  lines=\"none\" (click) = \"logout()\">\n            <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n            <ion-label> Logout</ion-label>\n          </ion-item>\n        </ion-list>\n      </ng-container>\n    </ng-container>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-split-pane>\n</ion-app>\n ");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map