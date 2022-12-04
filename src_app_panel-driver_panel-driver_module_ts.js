(self["webpackChunkcapstone_project"] = self["webpackChunkcapstone_project"] || []).push([["src_app_panel-driver_panel-driver_module_ts"],{

/***/ 65318:
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map.component.html */ 37162);
/* harmony import */ var _map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss */ 18144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let MapComponent = class MapComponent {
    constructor() { }
    ngOnInit() {
    }
};
MapComponent.ctorParameters = () => [];
MapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-map',
        template: _raw_loader_map_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapComponent);



/***/ }),

/***/ 98789:
/*!*************************************************************!*\
  !*** ./src/app/panel-driver/panel-driver-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelDriverPageRoutingModule": () => (/* binding */ PanelDriverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _panel_driver_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-driver.page */ 25735);




const routes = [
    {
        path: '',
        component: _panel_driver_page__WEBPACK_IMPORTED_MODULE_0__.PanelDriverPage
    }
];
let PanelDriverPageRoutingModule = class PanelDriverPageRoutingModule {
};
PanelDriverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PanelDriverPageRoutingModule);



/***/ }),

/***/ 94296:
/*!*****************************************************!*\
  !*** ./src/app/panel-driver/panel-driver.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelDriverPageModule": () => (/* binding */ PanelDriverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/map.component */ 65318);
/* harmony import */ var _panel_driver_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-driver-routing.module */ 98789);
/* harmony import */ var _panel_driver_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-driver.page */ 25735);








let PanelDriverPageModule = class PanelDriverPageModule {
};
PanelDriverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _panel_driver_routing_module__WEBPACK_IMPORTED_MODULE_1__.PanelDriverPageRoutingModule
        ],
        declarations: [_panel_driver_page__WEBPACK_IMPORTED_MODULE_2__.PanelDriverPage, _map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent]
    })
], PanelDriverPageModule);



/***/ }),

/***/ 25735:
/*!***************************************************!*\
  !*** ./src/app/panel-driver/panel-driver.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelDriverPage": () => (/* binding */ PanelDriverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_panel_driver_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./panel-driver.page.html */ 32896);
/* harmony import */ var _panel_driver_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-driver.page.scss */ 8521);
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









//import Map from '@arcgis/core/Map';
//import MapView from '@arcgis/core/views/MapView';




let PanelDriverPage = class PanelDriverPage {
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
        this.acc = true;
        this.dec = false;
        this.his = false;
        this.id = 0;
        this.uid = 0;
        this.orders = [];
        this.aorders = [];
        this.declined = [];
        this.hist = [];
        this.latitude = 0; //latitude
        this.longitude = 0; //longitude
        this.a = true;
        this.b = true;
        this.options = {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 3600
        };
    }
    ngOnInit() {
        this.getid();
    }
    doRefresh(event) {
        console.log('Begin async operation');
    }
    getid() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.name = this.datastorage.first_name;
            this.bid = this.datastorage.barangay_id;
            console.log(this.bid);
            this.uid = this.datastorage.user_id;
            this.name = this.datastorage.first_name + ' ' + this.datastorage.last_name;
            this.did = this.datastorage.user_id;
            this.barangay = this.datastorage.barangay_name;
            return new Promise(resolve => {
                let body = {
                    aksi: 'get_orders_driver',
                    uid: this.uid,
                    bid: this.bid,
                    did: this.did,
                    name: this.name,
                    barangay: this.barangay
                };
                this.accessProviders.postData(body, 'get_orders.php').subscribe((res) => {
                    if (res.success == true) {
                        console.log(res.result);
                        console.log(res.queue);
                        console.log(res.adata);
                        console.log(res.finish);
                        console.log(res.cqueue);
                        console.log(res.count);
                        console.log(res.stat);
                        this.cqueuenum = res.cqueue;
                        if (res.finish == 'Finished') {
                        }
                        if (res.finish == 'Not finished') {
                        }
                        if (res.queue == "") {
                            this.queuenum = 'None';
                            this.a = false;
                        }
                        else {
                            this.queuenum = res.queue;
                            this.b = false;
                        }
                        for (let datas of res.adata) {
                            this.aorders.push(datas);
                        }
                        if (this.queuenum == this.cqueuenum) {
                            for (let datas of res.result) {
                                this.orders.push(datas);
                            }
                        }
                        else {
                            this.orders = [];
                        }
                        console.log(this.orders);
                        console.log(res.stat);
                    }
                    else {
                        console.log(res.queue);
                        console.log(res.stat);
                    }
                });
            });
        });
    }
    leafletMap() {
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_5__.Map('map').setView([14.0221, 120.7284], 14);
        leaflet__WEBPACK_IMPORTED_MODULE_5__.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);
        const markPoint = leaflet__WEBPACK_IMPORTED_MODULE_5__.marker([14.0221, 120.7284]);
        markPoint.bindPopup('<p>Tashi Delek - Bangalore.</p>');
        this.map.addLayer(markPoint);
    }
    openOrder(i) {
        this.navParamService.setOrderID(i);
        console.log(this.navParamService.getOrderID());
        //this.map.remove();
        this.router.navigate(['/order-detail']);
    }
    orderOpen(i, a) {
        this.navParamService.setOrderID(i);
        this.navParamService.setCon(a);
        console.log(this.navParamService.getCon());
        console.log(this.navParamService.getOrderID());
        //this.map.remove();
        this.router.navigate(['/order-detail']);
    }
    openHistory(i) {
        this.navParamService.setOrderID(i);
        console.log(this.navParamService.getOrderID());
        //this.map.remove();
        this.router.navigate(['/history-details']);
    }
    accept() {
        this.acc = true;
        this.dec = false;
        this.his = false;
    }
    decline() {
        this.acc = false;
        this.dec = true;
        this.his = false;
    }
    history() {
        this.acc = false;
        this.dec = false;
        this.his = true;
    }
    ionViewWillEnter() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.name = this.datastorage.first_name;
            this.bid = this.datastorage.barangay_id;
            return new Promise(resolve => {
                let body = {
                    aksi: 'get_history_driver',
                    bid: this.bid
                };
                this.accessProviders.postData(body, 'get_orders.php').subscribe((res) => {
                    if (res.success == true) {
                        console.log(res.result);
                        for (let datas of res.result) {
                            this.hist.push(datas);
                        }
                        console.log(this.hist);
                    }
                    else {
                    }
                });
            });
        });
    }
    ionViewDidEnter() {
        this.activatedRoute.params.subscribe((data) => {
            this.id = data.id;
            console.log(this.id);
            //this.leafletMap();
            console.log(this.id);
            if (this.id == 1) {
                window.location.reload();
            }
            this.navParamService.clear();
            this.storage.get('storage_xxx').then((res) => {
                console.log(res);
                this.datastorage = res;
                this.name = this.datastorage.first_name;
                this.bid = this.datastorage.barangay_id;
            });
            return new Promise(resolve => {
                let body = {
                    aksi: 'get_decline_driver',
                    bid: this.bid
                };
                this.accessProviders.postData(body, 'get_orders.php').subscribe((res) => {
                    if (res.success == true) {
                        console.log(res.result);
                        for (let datas of res.result) {
                            this.declined.push(datas);
                        }
                        console.log(this.orders);
                    }
                    else {
                    }
                });
            });
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: a,
                duration: 1500,
                position: 'bottom'
            });
            toast.present();
        });
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
    queue() {
        this.storage.get('storage_xxx').then((res) => {
            this.datastorage = res;
            this.name = this.datastorage.first_name + ' ' + this.datastorage.last_name;
            this.did = this.datastorage.user_id;
            this.barangay = this.datastorage.barangay_name;
            this.bid = this.datastorage.barangay_id;
            return new Promise(resolve => {
                let body = {
                    aksi: 'get_queue',
                    did: this.did,
                    name: this.name,
                    barangay: this.barangay,
                    bid: this.bid
                };
                console.log(res);
                this.accessProviders.postData(body, 'queue.php').subscribe((res) => {
                    if (res.success == true) {
                        console.log(res.msg);
                        this.router.navigate(['/panel-driver/1']);
                    }
                    else {
                        console.log(res.msg);
                    }
                });
            });
        });
    }
};
PanelDriverPage.ctorParameters = () => [
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
PanelDriverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-panel-driver',
        template: _raw_loader_panel_driver_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_panel_driver_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PanelDriverPage);



/***/ }),

/***/ 18144:
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 8521:
/*!*****************************************************!*\
  !*** ./src/app/panel-driver/panel-driver.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  color: white;\n}\nion-toolbar ion-button ion-icon {\n  color: white;\n}\n.map2 {\n  height: 100%;\n  width: 100%;\n}\n#container {\n  text-align: center;\n  height: 100%;\n  width: 100%;\n}\nion-content {\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\nion-content ion-col {\n  align-items: center;\n  border: solid 1.5px black;\n  padding: 1.5px;\n}\nion-content ion-button {\n  color: white;\n  position: relative;\n}\nion-content ion-card {\n  padding-top: 1%;\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-bottom: 1%;\n  height: relative;\n  color: black;\n  text-align: center;\n}\n.a {\n  text-align: center;\n  padding-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLWRyaXZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0FBQUo7QUFFUTtFQUNJLFlBQUE7QUFBWjtBQUtBO0VBQ00sWUFBQTtFQUNBLFdBQUE7QUFGTjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0k7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUZSO0FBR1E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQURaO0FBR1E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUlRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRlo7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGUiIsImZpbGUiOiJwYW5lbC1kcml2ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10b29sYmFyIHtcclxuICAgIGNvbG9yIDp3aGl0ZTtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxufVxyXG4ubWFwMiB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIH0gXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGlvbi1jb2x7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMS41cHggYmxhY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxJTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxJTsgXHJcbiAgICAgICAgICAgIGhlaWdodDogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuICAgIC5he1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ 37162:
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("");

/***/ }),

/***/ 32896:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/panel-driver/panel-driver.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-menu-button slot=\"start\" autoHide=\"false\"color=\"light\" menu=\"main-menu\" ></ion-menu-button>\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"logout()\">\n      <ion-icon fill=\"white\" name=\"log-out-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>   \n  \n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card >\n    <ion-text><h1 no-margin margin-bottom text-center class=\"title\">TODA:  Brgy. {{barangay}} </h1></ion-text>\n    <ion-text><h1 no-margin margin-bottom text-center class=\"title\">Current Queue:  {{cqueuenum}} </h1></ion-text>\n    <ion-grid >\n    </ion-grid>\n  </ion-card>\n\n    <ion-item text-center lines=\"none\">\n      <ion-label><h1>My Queue Number:  {{queuenum}}</h1></ion-label>\n    </ion-item>\n\n  <ion-row class=\"a\" *ngIf=\"b\">\n    <ion-button (click)=\"queue()\" >Get queue number</ion-button>\n  </ion-row>\n   \n \n  <ion-segment>\n    <ion-segment-button (click)=\"accept()\">\n      <ion-label>Orders</ion-label>\n    </ion-segment-button >\n    <ion-segment-button (click)=\"decline()\">\n      <ion-label>Declined</ion-label>\n    </ion-segment-button>\n    <ion-segment-button (click)=\"history()\">\n      <ion-label>History</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n    \n    <div *ngIf=\"acc\" >\n      <ion-card >\n        <ion-text><h1 no-margin margin-bottom text-center class=\"title\">Orders</h1></ion-text>\n        <ion-grid *ngFor=\"let orders of orders\">\n          <ion-row *ngIf=\"a\">\n            <ion-col size=\"2\">\n              {{orders.order_id}}\n            </ion-col>\n            <ion-col size=\"5\">\n            {{orders.first_name}} {{orders.last_name}}  \n            </ion-col>\n            <ion-col size=\"3\">\n              {{orders.street}}\n            </ion-col> \n            <ion-col size=\"2\">\n                <ion-button size=\"extra small\" (click)=\"openOrder(orders.order_id)\">\n                  <ion-icon slot=\"icon-only\" color=\"light\" name=\"eye-outline\"></ion-icon>\n                </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n<br>\n      <ion-card >\n        <ion-text><h1 no-margin margin-bottom text-center class=\"title\">Accepted Orders</h1></ion-text>\n        <ion-grid *ngFor=\"let aorders of aorders\">\n          <ion-row *ngIf=\"a\">\n            <ion-col size=\"2\">\n              {{aorders.order_id}}\n            </ion-col>\n            <ion-col size=\"5\">\n            {{aorders.first_name}} {{aorders.last_name}}  \n            </ion-col>\n            <ion-col size=\"3\">\n             Proceed with order\n            </ion-col>\n            <ion-col size=\"2\">\n                <ion-button size=\"extra small\" (click)=\"orderOpen(aorders.order_id, aorders.confirmation)\">\n                  <ion-icon slot=\"icon-only\" color=\"light\" name=\"eye-outline\"></ion-icon>\n                </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"dec\">\n      <ion-card >\n        <ion-text><h1 no-margin margin-bottom text-center class=\"title\">Declined</h1></ion-text>\n        <ion-grid *ngFor=\"let declined of declined\">\n          <ion-row>\n            <ion-col size=\"2\">\n              {{declined.order_id}}\n            </ion-col>\n            <ion-col size=\"3\">\n            {{declined.first_name}} {{declined.last_name}}  \n            </ion-col>\n            <ion-col size=\"4\">\n             {{declined.street}}\n            </ion-col>\n            <ion-col size=\"3\">\n              {{barangay}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"his\">\n      \n      <ion-card >\n        <ion-text><h1 no-margin margin-bottom text-center class=\"title\">History</h1></ion-text>\n        <ion-list   *ngFor=\"let hist of hist\">\n          <ion-item  (click)=\"openHistory(hist.order_id)\">\n            <ion-avatar slot=\"start\"> \n            <img src=\"../../../assets/icon/user.png\"/>\n            </ion-avatar>\n            <ion-label >{{hist.first_name}} {{hist.last_name}}  </ion-label> <!-- kapag binuksan dertso sa order details -->\n            <ion-badge>1</ion-badge>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </div>\n \n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_panel-driver_panel-driver_module_ts.js.map