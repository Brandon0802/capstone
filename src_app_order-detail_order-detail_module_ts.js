(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_order-detail_order-detail_module_ts"],{

/***/ 21311:
/*!*************************************************************!*\
  !*** ./src/app/order-detail/order-detail-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPageRoutingModule": () => (/* binding */ OrderDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail.page */ 16878);




const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_0__.OrderDetailPage
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderDetailPageRoutingModule);



/***/ }),

/***/ 78294:
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPageModule": () => (/* binding */ OrderDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail-routing.module */ 21311);
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.page */ 16878);







let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderDetailPageRoutingModule
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_1__.OrderDetailPage]
    })
], OrderDetailPageModule);



/***/ }),

/***/ 16878:
/*!***************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPage": () => (/* binding */ OrderDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-detail.page.html */ 82989);
/* harmony import */ var _order_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.page.scss */ 64573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/access-providers */ 25675);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 75481);
/* harmony import */ var _navparam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navparam.service */ 61731);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ 50363);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ 81525);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var esri_leaflet_geocoder_dist_esri_leaflet_geocoder_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css */ 77851);
/* harmony import */ var esri_leaflet_geocoder_dist_esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri-leaflet-geocoder/dist/esri-leaflet-geocoder */ 93974);
/* harmony import */ var esri_leaflet_geocoder_dist_esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(esri_leaflet_geocoder_dist_esri_leaflet_geocoder__WEBPACK_IMPORTED_MODULE_7__);













let OrderDetailPage = class OrderDetailPage {
    constructor(router, loadingController, toastController, alertController, accessProviders, navController, activatedRoute, storage, navParamService) {
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.accessProviders = accessProviders;
        this.navController = navController;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.navParamService = navParamService;
        this.properties = [];
        this.deliver = false;
        this.acc = true;
        this.dec = true;
        this.ship = false;
        this.bid = 0;
        this.id = 0;
        this.orders = [];
        this.oid = this.navParamService.getOrderID();
        this.lattitude = 0;
        this.longitude = 0;
    }
    ;
    ngOnInit() {
        this.con = this.navParamService.getCon();
        console.log(this.con);
        if (this.con == 'Picked-up by courier') {
            this.acc = false;
            this.dec = false;
            this.ship = true;
        }
        if (this.con == 'Shipped by courier') {
            this.deliver = true;
            this.acc = false;
            this.dec = false;
            this.ship = false;
        }
        console.log(this.oid);
        this.orders = [];
        return new Promise(resolve => {
            let body = {
                aksi: 'get_orders_details',
                oid: this.oid,
            };
            console.log(this.oid);
            this.accessProviders.postData(body, 'get_orders.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.user);
                    console.log(res.result);
                    this.user = res.user;
                    this.specific = this.user.specific;
                    parseFloat(this.longitude = this.user.longitude);
                    parseFloat(this.lattitude = this.user.lattitude);
                    console.log(this.lattitude);
                    console.log(this.longitude);
                    this.fname = this.user.first_name;
                    this.lname = this.user.last_name;
                    this.street = this.user.street;
                    this.barangay = this.user.barangay_name;
                    this.brgy = this.user.barangay_name;
                    this.number = this.user.contact_number;
                    this.total = res.total;
                    for (let datas of res.result) {
                        this.orders.push(datas);
                    }
                    console.log(this.orders);
                }
                else {
                    console.log('x');
                }
            });
        });
    }
    leafletMap() {
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_5__.Map('map').setView([14.0221, 120.7284], 14);
        leaflet__WEBPACK_IMPORTED_MODULE_5__.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Tuy-Pocket Market',
        }).addTo(this.map);
        leaflet__WEBPACK_IMPORTED_MODULE_5__.marker([this.lattitude, this.longitude]).addTo(this.map).bindPopup('Order Destination').openPopup();
        //const markPoint = Leaflet.marker([14.0221, 120.7284]);
        // markPoint.bindPopup('<p>Order Destination.</p>');
        // this.map.addLayer(markPoint);
        console.log('map working');
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'top'
            });
            toast.present();
        });
    }
    accept() {
        this.ship = true;
        this.acc = false;
        this.dec = false;
        console.log(this.number);
        return new Promise(resolve => {
            console.log(this.oid);
            let body = {
                aksi: 'accept_order',
                num: this.number,
                orderid: this.oid,
                fname: this.fname,
                did: this.did,
                bid: this.bid
            };
            this.accessProviders.postData(body, 'sms.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.msg);
                }
                else {
                    this.presentToast('Failed');
                    this.router.navigate(['/panel-driver/']);
                }
            });
        });
    }
    decline() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.barangay = this.datastorage.barangay_name;
            console.log(this.number);
            return new Promise(resolve => {
                console.log(this.oid);
                let body = {
                    aksi: 'decline_order',
                    num: this.number,
                    orderid: this.oid,
                    fname: this.fname,
                    did: this.did,
                    bid: this.bid,
                    barangay: this.barangay,
                    brgy: this.brgy
                };
                console.log(this.barangay);
                this.accessProviders.postData(body, 'sms.php').subscribe((res) => {
                    if (res.success == true) {
                        console.log(res.result);
                        this.router.navigate(['/panel-driver/']);
                    }
                    else {
                        this.presentToast('Failed');
                    }
                });
            });
        });
    }
    shipment() {
        this.deliver = true;
        this.ship = false;
        console.log(this.number);
        return new Promise(resolve => {
            console.log(this.oid);
            let body = {
                aksi: 'ship_order',
                num: this.number,
                orderid: this.oid,
                fname: this.fname,
                did: this.did,
                bid: this.bid
            };
            this.accessProviders.postData(body, 'sms.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.result);
                    this.con = 'Shipped by courier';
                    this.navParamService.setCon(this.con);
                }
                else {
                    this.presentToast('Failed');
                }
            });
        });
    }
    delivered() {
        this.acc = false;
        this.dec = false;
        console.log(this.number);
        return new Promise(resolve => {
            console.log(this.oid);
            let body = {
                aksi: 'order_delivered',
                num: this.number,
                orderid: this.oid,
                fname: this.fname,
                did: this.did,
                bid: this.bid
            };
            this.accessProviders.postData(body, 'sms.php').subscribe((res) => {
                if (res.success == true) {
                    console.log(res.result);
                    this.router.navigate(['/panel-driver/']);
                }
                else {
                    this.presentToast('Failed');
                }
            });
        });
    }
    ionViewDidEnter() {
        this.leafletMap();
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.did = this.datastorage.user_id;
            this.bid = this.datastorage.barangay_id;
        });
    }
    back() {
        this.router.navigate(['panel-driver/']);
    }
    presentAlert(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: a,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
        });
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_2__.AccessProviders },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _navparam_service__WEBPACK_IMPORTED_MODULE_3__.NavparamService }
];
OrderDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-order-detail',
        template: _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderDetailPage);



/***/ }),

/***/ 64573:
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #3880ff;\n  color: white;\n}\nion-toolbar ion-segment-button {\n  color: #3880ff;\n}\nion-toolbar ion-button ion-icon {\n  color: white;\n}\nion-content {\n  --background-repeat: no-repeat;\n  --background-size: cover;\n  color: white;\n}\nion-content ion-col {\n  border: solid 1.5px black;\n  padding: 1.5px;\n}\nion-content ion-button {\n  --background:#3880ff;\n  color: black;\n}\nion-content ion-card {\n  padding-top: 1%;\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-bottom: 1%;\n  color: black;\n}\nion-content ion-card ion-card-subtitle {\n  color: #3880ff;\n}\nion-content ion-card ion-badge {\n  color: #3880ff;\n}\n.map {\n  height: 100%;\n  width: 100%;\n}\n.a {\n  padding-top: 1%;\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-bottom: 1%;\n  height: 50%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBQ1E7RUFDSSxZQUFBO0FBQ1o7QUFLSTtFQUVRLDhCQUFBO0VBQ0Esd0JBQUE7RUFFTCxZQUFBO0FBSlA7QUFLUTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtBQUpaO0FBTVE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFKWjtBQVFRO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFQWjtBQVFZO0VBQ0ksY0FBQTtBQU5oQjtBQVFZO0VBQ0ksY0FBQTtBQU5oQjtBQVdJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFSUjtBQVdJO0VBQ0ksZUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUloiLCJmaWxlIjoib3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgIGNvbG9yIDp3aGl0ZTtcclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICBjb2xvcjojMzg4MGZmO1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4gICAgaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG5cclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxLjVweCBibGFjaztcclxuICAgICAgICAgICAgcGFkZGluZzogMS41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDojMzg4MGZmO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxJTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxJTsgXHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM4ODBmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYmFkZ2V7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM4ODBmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFwIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICB9XHJcbiAgICAuYXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMSU7IFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gIFxyXG4iXX0= */");

/***/ }),

/***/ 82989:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-detail/order-detail.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" >\n        <img src=\"../../assets/back.svg\" (click)=\"back()\" />\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Order Details</ion-title>\n    <ion-button slot=\"end\" fill=\"clear\">\n      <ion-icon fill=\"white\" name=\"notifications\"></ion-icon>\n    </ion-button>\n  </ion-toolbar> \n</ion-header>\n<ion-content>\n        \n  <ion-card class=\"a\">\n    <div id=\"map\" style=\"width:100%; height:100%;\" > </div>\n  </ion-card>\n\n  <ion-card>\n    <ion-label class=\"i\"> \n      ORDER ID: <b>{{oid}}</b> <br>\n    </ion-label>\n    <ion-label class=\"i\">\n    CUTOMER NAME: <b>{{fname}} {{lname}} </b> <br>\n    </ion-label>\n    <ion-label class=\"i\">\n      HOUSE NO./PUROK/SITIO: <b>{{street}}</b> <br>\n    </ion-label >\n    <ion-label class=\"i\">\n      BARANGAY: <b>{{barangay}}</b> <br>\n    </ion-label>\n    <ion-label class=\"i\">\n      CONTACT NO.: <b>{{number}}</b> <br>\n    </ion-label>\n    <ion-label class=\"i\">\n      LANDMARK.: <b>{{specific}}</b> <br>\n    </ion-label>\n    <br>\n    <br>\n    \n    <ion-grid *ngFor=\"let orders of orders\" >\n        <ion-row>\n          <ion-col size=\"4\">\n            <b>Items</b>\n          </ion-col>\n          <ion-col size=\"2\">\n            <b>Quantity</b>\n          </ion-col>\n          <ion-col size=\"3\">\n            <b>Price</b>\n          </ion-col>\n          <ion-col size=\"3\">\n            <b>Total Price</b>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">\n            {{orders.product}}\n          </ion-col>\n          <ion-col size=\"2\">\n            {{orders.quantity}} \n          </ion-col>\n          <ion-col size=\"3\">\n            Php{{orders.price}}\n          </ion-col>\n          <ion-col size=\"3\" >\n            Php{{orders.price*orders.quantity}}\n          </ion-col>\n        </ion-row>\n      \n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"9\" class=\"ion-text-right\">\n         <b > Total Purchase</b>\n        </ion-col>\n        <ion-col size=\"3\">\n          <b>Php{{total}}</b>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-button *ngIf=\"acc\" (click)=\"accept()\">\n      <ion-icon color=\"light\" name=\"checkmark-circle-outline\"></ion-icon>\n      <br>\n      <ion-label color=\"light\">  Accept</ion-label>\n    </ion-button>    \n    <ion-button *ngIf=\"dec\" (click)=\"decline()\">\n      <ion-icon color=\"light\"name=\"close-circle-outline\"></ion-icon>\n      <br>\n        <ion-label color=\"light\">  Decline</ion-label>\n      </ion-button>\n      <ion-button *ngIf=\"ship\" (click)=\"shipment()\">\n        <ion-label color=\"light\"> Proceed to shipment</ion-label>\n      </ion-button>\n      <ion-button *ngIf=\"deliver\" (click)=\"delivered()\">\n        <ion-label color=\"light\"> Order Delivered</ion-label>\n      </ion-button>\n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  \n</ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_order-detail_order-detail_module_ts.js.map